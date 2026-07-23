#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.9"
# dependencies = ["rich"]
# ///
"""
Hardware video encoder report for ffmpeg + GStreamer.

Lists every hardware encoder (NVIDIA NVENC, Intel QSV/MSDK, AMD AMF, VAAPI,
V4L2 M2M, VideoToolbox, D3D11/Media Foundation) that each tool *claims* to
support, then actually runs a tiny real encode / pipeline for each one that's
present and reports whether it truly works on this machine right now.

Run it with:
    uv run hw_encoder_check.py
or, if executable:
    ./hw_encoder_check.py
"""

import argparse
import os
import platform
import re
import shutil
import subprocess
from dataclasses import dataclass
from typing import Optional

try:
    from rich.console import Console
    from rich.table import Table
    from rich import box
except ImportError:
    raise SystemExit(
        "This script needs 'rich'. Run it via `uv run hw_encoder_check.py` "
        "so uv installs dependencies automatically, or `pip install rich` first."
    )

TIMEOUT = 25
IS_WINDOWS = platform.system() == "Windows"
IS_LINUX = platform.system() == "Linux"
IS_MAC = platform.system() == "Darwin"

console = Console(width=min(max(shutil.get_terminal_size((120, 20)).columns, 100), 200))


def run(cmd, timeout=TIMEOUT):
    try:
        p = subprocess.run(cmd, capture_output=True, text=True, timeout=timeout)
        return p.returncode, p.stdout, p.stderr
    except FileNotFoundError:
        return None, "", "not found"
    except subprocess.TimeoutExpired:
        return -1, "", "timed out"


def which(name):
    return shutil.which(name)


# --------------------------------------------------------------------------
# GPU detection (best effort; used for context + to pick VAAPI render nodes)
# --------------------------------------------------------------------------

@dataclass
class GPU:
    vendor: str
    name: str
    render_node: Optional[str] = None


VENDOR_IDS = {"0x10de": "NVIDIA", "0x8086": "Intel", "0x1002": "AMD"}


def detect_gpus_linux():
    gpus = []
    dri = "/sys/class/drm"
    if os.path.isdir(dri):
        for entry in sorted(os.listdir(dri)):
            if not re.fullmatch(r"renderD\d+", entry):
                continue
            vendor_path = os.path.join(dri, entry, "device", "vendor")
            vendor_id = None
            if os.path.exists(vendor_path):
                with open(vendor_path) as f:
                    vendor_id = f.read().strip()
            vendor = VENDOR_IDS.get(vendor_id, f"Unknown ({vendor_id})")
            gpus.append(GPU(vendor=vendor, name=vendor, render_node=f"/dev/dri/{entry}"))
    return gpus


def detect_gpus_windows():
    gpus = []
    rc, out, _ = run(["powershell", "-NoProfile", "-Command",
                       "Get-CimInstance Win32_VideoController | Select-Object -ExpandProperty Name"])
    if rc != 0:
        rc, out, _ = run(["wmic", "path", "win32_VideoController", "get", "name"])
    if rc == 0:
        for line in out.splitlines():
            line = line.strip()
            if not line or line.lower() == "name":
                continue
            low = line.lower()
            if "nvidia" in low:
                vendor = "NVIDIA"
            elif "intel" in low:
                vendor = "Intel"
            elif "amd" in low or "radeon" in low or "advanced micro" in low:
                vendor = "AMD"
            else:
                vendor = "Unknown"
            gpus.append(GPU(vendor=vendor, name=line))
    return gpus


def detect_gpus():
    if IS_LINUX:
        return detect_gpus_linux()
    if IS_WINDOWS:
        return detect_gpus_windows()
    return []


# --------------------------------------------------------------------------
# Result model
# --------------------------------------------------------------------------

@dataclass
class Result:
    tool: str
    vendor: str
    codec: str
    name: str
    listed: bool = False
    working: Optional[bool] = None
    detail: str = ""


# --------------------------------------------------------------------------
# ffmpeg
# --------------------------------------------------------------------------

FFMPEG_CANDIDATES = [
    ("NVIDIA", "H.264", "h264_nvenc"),
    ("NVIDIA", "HEVC", "hevc_nvenc"),
    ("NVIDIA", "AV1", "av1_nvenc"),
    ("Intel", "H.264", "h264_qsv"),
    ("Intel", "HEVC", "hevc_qsv"),
    ("Intel", "AV1", "av1_qsv"),
    ("Intel", "VP9", "vp9_qsv"),
    ("Intel", "MJPEG", "mjpeg_qsv"),
    ("AMD", "H.264", "h264_amf"),
    ("AMD", "HEVC", "hevc_amf"),
    ("AMD", "AV1", "av1_amf"),
    ("Intel/AMD (VAAPI)", "H.264", "h264_vaapi"),
    ("Intel/AMD (VAAPI)", "HEVC", "hevc_vaapi"),
    ("Intel/AMD (VAAPI)", "VP8", "vp8_vaapi"),
    ("Intel/AMD (VAAPI)", "VP9", "vp9_vaapi"),
    ("Intel/AMD (VAAPI)", "AV1", "av1_vaapi"),
    ("Intel/AMD (VAAPI)", "MJPEG", "mjpeg_vaapi"),
    ("Generic (V4L2 M2M)", "H.264", "h264_v4l2m2m"),
    ("Generic (V4L2 M2M)", "HEVC", "hevc_v4l2m2m"),
    ("Apple (VideoToolbox)", "H.264", "h264_videotoolbox"),
    ("Apple (VideoToolbox)", "HEVC", "hevc_videotoolbox"),
]


def ffmpeg_list_encoders(ffmpeg_bin):
    rc, out, _ = run([ffmpeg_bin, "-hide_banner", "-encoders"])
    names = set()
    if rc == 0:
        for line in out.splitlines():
            m = re.match(r"\s*[VAS\.][F\.][S\.][X\.][B\.][D\.]\s+(\S+)", line)
            if m:
                names.add(m.group(1))
    return names


def build_ffmpeg_test_cmds(ffmpeg_bin, encoder_name, gpus):
    base_input = ["-f", "lavfi", "-i", "testsrc2=size=1280x720:rate=30", "-frames:v", "5"]
    cmds = []
    if "vaapi" in encoder_name:
        nodes = [g.render_node for g in gpus if g.render_node] or ["/dev/dri/renderD128"]
        for node in nodes:
            cmds.append((
                [ffmpeg_bin, "-hide_banner", "-loglevel", "error", "-nostdin", "-y",
                 "-vaapi_device", node] + base_input +
                ["-vf", "format=nv12,hwupload", "-c:v", encoder_name, "-f", "null", "-"],
                node,
            ))
    elif "qsv" in encoder_name:
        cmds.append((
            [ffmpeg_bin, "-hide_banner", "-loglevel", "error", "-nostdin", "-y",
             "-init_hw_device", "qsv=hw", "-filter_hw_device", "hw"] + base_input +
            ["-vf", "format=nv12,hwupload=extra_hw_frames=16", "-c:v", encoder_name, "-f", "null", "-"],
            "explicit qsv device",
        ))
        cmds.append((
            [ffmpeg_bin, "-hide_banner", "-loglevel", "error", "-nostdin", "-y"] + base_input +
            ["-c:v", encoder_name, "-f", "null", "-"],
            "default device",
        ))
    else:
        cmds.append((
            [ffmpeg_bin, "-hide_banner", "-loglevel", "error", "-nostdin", "-y"] + base_input +
            ["-c:v", encoder_name, "-f", "null", "-"],
            None,
        ))
    return cmds


def last_error_line(out, err):
    text = (err or out or "").strip()
    if not text:
        return "(no error output)"
    return text.splitlines()[-1][:140]


def test_ffmpeg_encoder(ffmpeg_bin, name, gpus):
    last_err = "(no attempts run)"
    for cmd, tag in build_ffmpeg_test_cmds(ffmpeg_bin, name, gpus):
        rc, out, err = run(cmd)
        if rc == 0:
            return True, f"encoded 5 test frames OK" + (f" via {tag}" if tag else "")
        last_err = last_error_line(out, err)
    return False, last_err


def check_ffmpeg(gpus):
    ffmpeg_bin = which("ffmpeg")
    results = []
    if not ffmpeg_bin:
        return results, None
    encoders = ffmpeg_list_encoders(ffmpeg_bin)
    for vendor, codec, name in FFMPEG_CANDIDATES:
        if name.endswith("_vaapi") and not IS_LINUX:
            continue
        if name.endswith("_v4l2m2m") and not IS_LINUX:
            continue
        if name.endswith("_videotoolbox") and not IS_MAC:
            continue
        listed = name in encoders
        r = Result(tool="ffmpeg", vendor=vendor, codec=codec, name=name, listed=listed)
        if listed:
            r.working, r.detail = test_ffmpeg_encoder(ffmpeg_bin, name, gpus)
        else:
            r.detail = "not compiled into this ffmpeg build"
        results.append(r)
    return results, ffmpeg_bin


# --------------------------------------------------------------------------
# GStreamer
# --------------------------------------------------------------------------

GST_CANDIDATES = [
    ("NVIDIA (nvcodec)", "H.264", "nvh264enc"),
    ("NVIDIA (nvcodec)", "H.264", "nvcudah264enc"),
    ("NVIDIA (nvcodec)", "H.264", "nvautogpuh264enc"),
    ("NVIDIA (nvcodec)", "HEVC", "nvh265enc"),
    ("NVIDIA (nvcodec)", "HEVC", "nvcudah265enc"),
    ("NVIDIA (nvcodec)", "HEVC", "nvautogpuh265enc"),
    ("NVIDIA (nvcodec)", "AV1", "nvav1enc"),
    ("NVIDIA (V4L2, Jetson)", "H.264", "nvv4l2h264enc"),
    ("NVIDIA (V4L2, Jetson)", "HEVC", "nvv4l2h265enc"),
    ("NVIDIA (V4L2, Jetson)", "AV1", "nvv4l2av1enc"),
    ("Intel/AMD (VA-API, modern)", "H.264", "vah264enc"),
    ("Intel/AMD (VA-API, modern)", "HEVC", "vah265enc"),
    ("Intel/AMD (VA-API, modern)", "VP9", "vavp9enc"),
    ("Intel/AMD (VA-API, modern)", "AV1", "vaav1enc"),
    ("Intel/AMD (VA-API, modern)", "MJPEG", "vajpegenc"),
    ("Intel/AMD (vaapi, legacy)", "H.264", "vaapih264enc"),
    ("Intel/AMD (vaapi, legacy)", "HEVC", "vaapih265enc"),
    ("Intel/AMD (vaapi, legacy)", "VP8", "vaapivp8enc"),
    ("Intel/AMD (vaapi, legacy)", "VP9", "vaapivp9enc"),
    ("Intel/AMD (vaapi, legacy)", "MJPEG", "vaapijpegenc"),
    ("Intel (MSDK/oneVPL)", "H.264", "msdkh264enc"),
    ("Intel (MSDK/oneVPL)", "HEVC", "msdkh265enc"),
    ("Intel (MSDK/oneVPL)", "VP9", "msdkvp9enc"),
    ("Intel (MSDK/oneVPL)", "AV1", "msdkav1enc"),
    ("Intel (MSDK/oneVPL)", "MJPEG", "msdkmjpegenc"),
    ("AMD (AMF)", "H.264", "amfh264enc"),
    ("AMD (AMF)", "HEVC", "amfh265enc"),
    ("AMD (AMF)", "AV1", "amfav1enc"),
    ("Windows (D3D11)", "H.264", "d3d11h264enc"),
    ("Windows (D3D11)", "HEVC", "d3d11h265enc"),
    ("Windows (Media Foundation)", "H.264", "mfh264enc"),
    ("Windows (Media Foundation)", "HEVC", "mfh265enc"),
    ("Generic (V4L2 M2M)", "H.264", "v4l2h264enc"),
    ("Generic (V4L2 M2M)", "VP8", "v4l2vp8enc"),
    ("Apple (VideoToolbox)", "H.264", "vtenc_h264_hw"),
    ("Apple (VideoToolbox)", "HEVC", "vtenc_h265_hw"),
]


def gst_element_exists(gst_inspect_bin, element):
    rc, _, _ = run([gst_inspect_bin, element], timeout=10)
    return rc == 0


def build_gst_pipeline_variants(element):
    caps = "video/x-raw,width=1280,height=720,framerate=30/1"
    src = ["videotestsrc", "num-buffers=5", "!", caps]
    variants = []
    if element.startswith("nv") and not element.startswith("nvv4l2"):
        variants.append(src + ["!", "cudaupload", "!", "cudaconvert", "!", element, "!", "fakesink"])
        variants.append(src + ["!", "videoconvert", "!", element, "!", "fakesink"])
    elif element.startswith("d3d11"):
        variants.append(src + ["!", "d3d11upload", "!", "d3d11convert", "!", element, "!", "fakesink"])
        variants.append(src + ["!", "videoconvert", "!", element, "!", "fakesink"])
    else:
        variants.append(src + ["!", "videoconvert", "!", element, "!", "fakesink"])
        variants.append(src + ["!", element, "!", "fakesink"])
    return variants


def test_gst_element(gst_launch_bin, element):
    last_err = "(no attempts run)"
    for tokens in build_gst_pipeline_variants(element):
        rc, out, err = run([gst_launch_bin, "-q"] + tokens)
        if rc == 0:
            return True, "pipeline ran OK"
        last_err = last_error_line(out, err)
    return False, last_err


def check_gstreamer():
    gst_inspect = which("gst-inspect-1.0")
    gst_launch = which("gst-launch-1.0")
    results = []
    if not gst_inspect or not gst_launch:
        return results, None
    for vendor, codec, element in GST_CANDIDATES:
        if element.startswith("d3d11") and not IS_WINDOWS:
            continue
        if element.startswith("mf") and not IS_WINDOWS:
            continue
        if element.startswith("vtenc_") and not IS_MAC:
            continue
        if element.startswith("v4l2") and not IS_LINUX:
            continue
        listed = gst_element_exists(gst_inspect, element)
        r = Result(tool="gstreamer", vendor=vendor, codec=codec, name=element, listed=listed)
        if listed:
            r.working, r.detail = test_gst_element(gst_launch, element)
        else:
            r.detail = "plugin/element not installed"
        results.append(r)
    return results, gst_launch


# --------------------------------------------------------------------------
# Reporting
# --------------------------------------------------------------------------

def status_cell(r: Result):
    if not r.listed:
        return "[dim]not installed[/dim]"
    if r.working is True:
        return "[bold green]WORKING[/bold green]"
    if r.working is False:
        return "[bold red]listed, but fails[/bold red]"
    return "[yellow]listed, untested[/yellow]"


def status_str(r: Result):
    if not r.listed:
        return "not installed"
    if r.working is True:
        return "WORKING"
    if r.working is False:
        return "listed, but fails"
    return "listed, untested"


def print_report(title, binary_path, results, verbose=False):
    console.rule(f"[bold]{title}[/bold]")
    if binary_path is None:
        console.print(f"[yellow]{title} not found on this system (not in PATH).[/yellow]\n")
        return
    console.print(f"[dim]{binary_path}[/dim]")
    if not results:
        console.print("[dim]No applicable hardware encoder candidates for this platform.[/dim]\n")
        return

    filtered = results if verbose else [r for r in results if r.working]
    if not filtered:
        if not verbose:
            console.print("[dim]No working hardware encoders found (use --verbose to see all).[/dim]\n")
        return

    table = Table(box=box.SIMPLE_HEAVY, show_lines=False)
    table.add_column("Vendor / Backend")
    table.add_column("Codec")
    table.add_column("Encoder / Element")
    table.add_column("Status")
    table.add_column("Detail")

    last_vendor = None
    for r in sorted(filtered, key=lambda r: (r.vendor, r.codec, r.name)):
        vendor_cell = r.vendor if r.vendor != last_vendor else ""
        last_vendor = r.vendor
        table.add_row(vendor_cell, r.codec, r.name, status_cell(r), r.detail)
    console.print(table)
    console.print()


def collect_system_info():
    """Collect detailed system and driver information."""
    info = []
    info.append("=" * 80)
    info.append("SYSTEM INFORMATION")
    info.append("=" * 80)
    info.append(f"OS: {platform.system()}")
    info.append(f"Release: {platform.release()}")
    info.append(f"Version: {platform.version()}")
    info.append(f"Architecture: {platform.machine()}")

    if IS_LINUX:
        rc, out, _ = run(["lsb_release", "-a"])
        if rc == 0:
            info.append("\nLinux Distribution:")
            info.extend(f"  {line}" for line in out.strip().split("\n"))

    info.append("\n" + "=" * 80)
    info.append("GPU INFORMATION")
    info.append("=" * 80)
    gpus = detect_gpus()
    if gpus:
        for g in gpus:
            render = g.render_node or "N/A"
            info.append(f"  {g.vendor}: {g.name} ({render})")
    else:
        info.append("  No GPUs detected")

    if IS_LINUX:
        info.append("\nDRM Devices:")
        rc, out, _ = run(["ls", "-la", "/dev/dri/"])
        if rc == 0:
            info.extend(f"  {line}" for line in out.strip().split("\n"))

        info.append("\nDriver Info (lspci -v for GPUs):")
        rc, out, _ = run(["lspci", "-v"], timeout=10)
        if rc == 0:
            for line in out.split("\n"):
                if any(x in line.lower() for x in ["vga", "3d", "display", "video"]):
                    info.append(f"  {line}")

    return "\n".join(info)


def collect_ffmpeg_info(ffmpeg_bin):
    """Collect detailed ffmpeg information."""
    info = []
    info.append("\n" + "=" * 80)
    info.append("FFMPEG INFORMATION")
    info.append("=" * 80)

    if ffmpeg_bin is None:
        info.append("ffmpeg not found")
        return "\n".join(info)

    info.append(f"Path: {ffmpeg_bin}")

    info.append("\nffmpeg -version:")
    info.append("-" * 80)
    rc, out, _ = run([ffmpeg_bin, "-version"])
    if rc == 0:
        info.append(out.strip())

    info.append("\nffmpeg -encoders:")
    info.append("-" * 80)
    rc, out, _ = run([ffmpeg_bin, "-encoders"])
    if rc == 0:
        info.append(out.strip())

    return "\n".join(info)


def collect_gstreamer_info():
    """Collect detailed GStreamer information."""
    info = []
    info.append("\n" + "=" * 80)
    info.append("GSTREAMER INFORMATION")
    info.append("=" * 80)

    gst_inspect = which("gst-inspect-1.0")
    if gst_inspect is None:
        info.append("GStreamer not found")
        return "\n".join(info)

    info.append(f"Path: {gst_inspect}")

    info.append("\ngst-inspect-1.0 version:")
    info.append("-" * 80)
    rc, out, _ = run([gst_inspect, "--version"])
    if rc == 0:
        info.append(out.strip())

    info.append("\nAvailable GStreamer Elements:")
    info.append("-" * 80)
    rc, out, _ = run([gst_inspect, "-l"], timeout=30)
    if rc == 0:
        info.append(out.strip())
    else:
        info.append("(Could not list GStreamer elements)")

    return "\n".join(info)


def generate_report(args):
    """Generate and save detailed report to file."""
    report_lines = []

    report_lines.append(collect_system_info())

    ffmpeg_bin = which("ffmpeg")
    report_lines.append(collect_ffmpeg_info(ffmpeg_bin))
    report_lines.append(collect_gstreamer_info())

    report_lines.append("\n" + "=" * 80)
    report_lines.append("ENCODER TEST RESULTS (VERBOSE)")
    report_lines.append("=" * 80)

    gpus = detect_gpus()
    ffmpeg_results, _ = check_ffmpeg(gpus)
    gst_results, _ = check_gstreamer()

    report_lines.append("\nFFmpeg Encoders (All):")
    report_lines.append("-" * 80)
    for r in sorted(ffmpeg_results, key=lambda r: (r.vendor, r.codec, r.name)):
        status = status_str(r)
        detail = f" ({r.detail})" if r.detail else ""
        report_lines.append(f"  {r.vendor:22} {r.codec:6} {r.name:18} {status}{detail}")

    report_lines.append("\nGStreamer Encoders (All):")
    report_lines.append("-" * 80)
    for r in sorted(gst_results, key=lambda r: (r.vendor, r.codec, r.name)):
        status = status_str(r)
        detail = f" ({r.detail})" if r.detail else ""
        report_lines.append(f"  {r.vendor:22} {r.codec:6} {r.name:18} {status}{detail}")

    report_lines.append("\n" + "=" * 80)
    report_lines.append("TIPS & RESOURCES")
    report_lines.append("=" * 80)
    report_lines.append("\nTo view encoder options:")
    report_lines.append("  ffmpeg -h encoder=<ENCODER_NAME>")
    report_lines.append("\nFFmpeg Hardware Acceleration Wiki:")
    report_lines.append("  https://trac.ffmpeg.org/wiki/HWAccelIntro")

    report_content = "\n".join(report_lines)

    with open("video_encoding_report.txt", "w") as f:
        f.write(report_content)

    print(f"\nReport saved to video_encoding_report.txt")


def main():
    parser = argparse.ArgumentParser(
        description="Report hardware video encoder support in ffmpeg and GStreamer"
    )
    parser.add_argument(
        "--verbose", "-v",
        action="store_true",
        help="Show all encoders, including those not installed or failed"
    )
    parser.add_argument(
        "--report",
        action="store_true",
        help="Generate detailed report and save to video_encoding_report.txt"
    )
    args = parser.parse_args()

    if args.report:
        generate_report(args)
        return

    console.rule("[bold cyan]Hardware Video Encoder Report[/bold cyan]")
    console.print(f"Platform: {platform.system()} {platform.release()} ({platform.machine()})\n")

    gpus = detect_gpus()
    if gpus:
        t = Table(title="Detected GPUs", box=box.SIMPLE)
        t.add_column("Vendor")
        t.add_column("Name")
        t.add_column("Render Node")
        for g in gpus:
            t.add_row(g.vendor, g.name, g.render_node or "-")
        console.print(t)
    else:
        console.print("[yellow]No GPUs detected via OS APIs (detection is best-effort).[/yellow]")
    console.print()

    ffmpeg_results, ffmpeg_bin = check_ffmpeg(gpus)
    gst_results, gst_bin = check_gstreamer()

    print_report("FFmpeg", ffmpeg_bin, ffmpeg_results, verbose=args.verbose)
    print_report("GStreamer", gst_bin, gst_results, verbose=args.verbose)

    all_results = ffmpeg_results + gst_results
    working = [r for r in all_results if r.working]
    listed_only = [r for r in all_results if r.listed and r.working is False]
    not_installed = [r for r in all_results if not r.listed]

    console.rule("[bold green]Summary: Verified Working Hardware Encoders[/bold green]")
    if working:
        t = Table(box=box.SIMPLE_HEAVY)
        t.add_column("Tool")
        t.add_column("Vendor / Backend")
        t.add_column("Codec")
        t.add_column("Encoder / Element")
        for r in working:
            t.add_row(r.tool, r.vendor, r.codec, r.name)
        console.print(t)
    else:
        console.print("[red]No hardware encoders were verified working on this system.[/red]")

    if listed_only or not_installed:
        parts = []
        if not_installed:
            parts.append(f"{len(not_installed)} not installed")
        if listed_only:
            parts.append(f"{len(listed_only)} installed but failed")
        summary = " • ".join(parts)
        console.print(
            f"\n[yellow]{summary} (use --verbose to see details).[/yellow]"
        )

    console.print("\n[cyan]Tips:[/cyan]")
    console.print("  • View encoder options: [yellow]ffmpeg -h encoder=<ENCODER_NAME>[/yellow]")
    console.print("  • FFmpeg Hardware Acceleration: [link]https://trac.ffmpeg.org/wiki/HWAccelIntro[/link]")


if __name__ == "__main__":
    main()
