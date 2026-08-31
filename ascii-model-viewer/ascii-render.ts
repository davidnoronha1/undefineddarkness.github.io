// ascii-render.ts — standalone demo for the ASCII 3D renderer
//
// This is the TypeScript counterpart to the <ascii-model-viewer> web component
// (ascii-model-viewer.ts).  It runs as a full-page app: renders a .obj model
// offscreen with three.js, reads the pixels back each frame, and displays
// them as monospace ASCII art.  Drag to rotate, scroll to zoom, drop a .obj
// anywhere or use the bottom panel to tweak cols/style/invert.
//
// Original inline JS lived in experiments/ascii-render.html; extracted here
// so it can be type-checked, bundled, and kept in sync with the component
// version without duplication.
import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
type RenderStyle = "octant" | "braille" | "text";
type RampName = "simple" | "detailed" | "blocks";

const RAMPS: Record<RampName, string> = {
  simple: " .:-=+*#%@",
  detailed: " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",
  blocks: " ░▒▓█",
};

// Braille packs an 8-dot (2×4) sub-grid into one monospace glyph.
// Bit layout per Unicode braille dot numbering:
//   (row,col) -> bit    0,0->0  0,1->3
//                1,0->1  1,1->4
//                2,0->2  2,1->5
//                3,0->6  3,1->7
const BRAILLE_BIT: number[][] = [
  [0, 3],
  [1, 4],
  [2, 5],
  [6, 7],
];

// 4×4 Bayer ordered-dither so gradients read as dot density.
const BAYER4: number[][] = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
].map((row) => row.map((v) => (v + 0.5) / 16));

// Octants share braille's 2×4 grid but as filled blocks with per-cell
// grayscale color.  Table indexed by mask (bit i-1 = cell i on/off),
// generated from the Unicode 16 UCD (every "BLOCK OCTANT-*" plus the
// pre-existing block/quarter characters those collapse to).
const OCTANT_BIT: number[][] = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7],
];
const OCTANT_CODEPOINTS: number[] = [
  0x0020, 0x0020, 0x0020, 0x1fb82, 0x1cd00, 0x2598, 0x1cd01, 0x1cd02, 0x1cd03, 0x1cd04, 0x259d, 0x1cd05, 0x1cd06, 0x1cd07, 0x1cd08, 0x2580, 0x1cd09, 0x1cd0a, 0x1cd0b, 0x1cd0c, 0x1fbe6, 0x1cd0d, 0x1cd0e, 0x1cd0f, 0x1cd10, 0x1cd11, 0x1cd12, 0x1cd13,
  0x1cd14, 0x1cd15, 0x1cd16, 0x1cd17, 0x1cd18, 0x1cd19, 0x1cd1a, 0x1cd1b, 0x1cd1c, 0x1cd1d, 0x1cd1e, 0x1cd1f, 0x1fbe7, 0x1cd20, 0x1cd21, 0x1cd22, 0x1cd23, 0x1cd24, 0x1cd25, 0x1cd26, 0x1cd27, 0x1cd28, 0x1cd29, 0x1cd2a, 0x1cd2b, 0x1cd2c, 0x1cd2d, 0x1cd2e, 0x1cd2f,
  0x1cd30, 0x1cd31, 0x1cd32, 0x1cd33, 0x1cd34, 0x1cd35, 0x2588, 0x0020, 0x1cd36, 0x1cd37, 0x1cd38, 0x1cd39, 0x1cd3a, 0x1cd3b, 0x1cd3c, 0x1cd3d, 0x1cd3e, 0x1cd3f, 0x1cd40, 0x1cd41, 0x1cd42, 0x1cd43, 0x1cd44, 0x2596, 0x1cd45, 0x1cd46, 0x1cd47, 0x1cd48, 0x258c,
  0x1cd49, 0x1cd4a, 0x1cd4b, 0x1cd4c, 0x259e, 0x1cd4d, 0x1cd4e, 0x1cd4f, 0x1cd50, 0x259b, 0x1cd51, 0x1cd52, 0x1cd53, 0x1cd54, 0x1cd55, 0x1cd56, 0x1cd57, 0x1cd58, 0x1cd59, 0x1cd5a, 0x1cd5b, 0x1cd5c, 0x1cd5d, 0x1cd5e, 0x1cd5f, 0x1cd60, 0x1cd61, 0x1cd62, 0x1cd63,
  0x1cd64, 0x1cd65, 0x1cd66, 0x1cd67, 0x1cd68, 0x1cd69, 0x1cd6a, 0x1cd6b, 0x1cd6c, 0x1cd6d, 0x1cd6e, 0x1cd6f, 0x1cd70, 0x0020, 0x1cd71, 0x1cd72, 0x1cd73, 0x1cd74, 0x1cd75, 0x1cd76, 0x1cd77, 0x1cd78, 0x1cd79, 0x1cd7a, 0x1cd7b, 0x1cd7c, 0x1cd7d, 0x1cd7e, 0x1cd7f,
  0x1cd80, 0x1cd81, 0x1cd82, 0x1cd83, 0x1cd84, 0x1cd85, 0x1cd86, 0x1cd87, 0x1cd88, 0x1cd89, 0x1cd8a, 0x1cd8b, 0x1cd8c, 0x1cd8d, 0x1cd8e, 0x1cd8f, 0x2597, 0x1cd90, 0x1cd91, 0x1cd92, 0x1cd93, 0x259a, 0x1cd94, 0x1cd95, 0x1cd96, 0x1cd97, 0x2590, 0x1cd98, 0x1cd99,
  0x1cd9a, 0x1cd9b, 0x259c, 0x1cd9c, 0x1cd9d, 0x1cd9e, 0x1cd9f, 0x1cda0, 0x1cda1, 0x1cda2, 0x1cda3, 0x1cda4, 0x1cda5, 0x1cda6, 0x1cda7, 0x1cda8, 0x1cda9, 0x1cdaa, 0x1cdab, 0x1cdac, 0x2582, 0x1cdac, 0x1cdad, 0x1cdae, 0x1cdaf, 0x1cdb0, 0x1cdb1, 0x1cdb2, 0x1cdb3,
  0x1cdb4, 0x1cdb5, 0x1cdb6, 0x1cdb7, 0x1cdb8, 0x1cdb9, 0x1cdba, 0x1cdbb, 0x1cdbc, 0x1cdbd, 0x1cdbe, 0x1cdbf, 0x1cdc0, 0x1cdc1, 0x1cdc2, 0x1cdc3, 0x1cdc4, 0x1cdc5, 0x1cdc6, 0x1cdc7, 0x1cdc8, 0x1cdc9, 0x1cdca, 0x1cdcb, 0x1cdcc, 0x1cdcd, 0x1cdce, 0x1cdcf, 0x1cdd0,
  0x1cdd1, 0x1cdd2, 0x1cdd3, 0x1cdd4, 0x1cdd5, 0x1cdd6, 0x1cdd7, 0x1cdd8, 0x1cdd9, 0x1cdda, 0x2584, 0x1cddb, 0x1cddc, 0x1cddd, 0x1cdde, 0x2599, 0x1cddf, 0x1cde0, 0x1cde1, 0x1cde2, 0x259f, 0x1cde3, 0x2588, 0x1cde4, 0x1cde5, 0x2588,
];
const OCTANT_GLYPHS: string[] = OCTANT_CODEPOINTS.map((cp) => String.fromCodePoint(cp));

// ---------------------------------------------------------------------------
// DOM refs  (all required — fail fast if the HTML shell is wrong)
// ---------------------------------------------------------------------------
function requireEl<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`#${id} not found`);
  return el as T;
}

const asciiEl = requireEl<HTMLPreElement>("ascii");
const canvasEl = requireEl<HTMLCanvasElement>("ascii-canvas");
const canvasCtx = canvasEl.getContext("2d")!;
const stage = requireEl<HTMLDivElement>("stage");
const fpsEl = requireEl<HTMLDivElement>("fps");
const gridSizeEl = requireEl<HTMLDivElement>("grid-size");
const colsInput = requireEl<HTMLInputElement>("cols");
const styleSelect = requireEl<HTMLSelectElement>("style");
const rampLabel = requireEl<HTMLLabelElement>("ramp-label");
const rampSelect = requireEl<HTMLSelectElement>("ramp");
const autoRotateInput = requireEl<HTMLInputElement>("auto-rotate");
const invertInput = requireEl<HTMLInputElement>("invert");
const resetBtn = requireEl<HTMLButtonElement>("reset");
const fileInput = requireEl<HTMLInputElement>("file-input");

// ---------------------------------------------------------------------------
// UI helpers
// ---------------------------------------------------------------------------
function syncStyleUi(): void {
  const isOctant = styleSelect.value === "octant";
  rampLabel.style.display = styleSelect.value === "text" ? "flex" : "none";
  asciiEl.style.display = isOctant ? "none" : "block";
  canvasEl.style.display = isOctant ? "block" : "none";
}
syncStyleUi();

// ---------------------------------------------------------------------------
// three.js — fully offscreen, no canvas ever hits the DOM
// ---------------------------------------------------------------------------
const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, preserveDrawingBuffer: false });
renderer.setPixelRatio(1);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
camera.position.set(0, 0, 6);

scene.add(new THREE.AmbientLight(0xffffff, 0.35));
const key = new THREE.DirectionalLight(0xffffff, 1.1);
key.position.set(4, 6, 5);
scene.add(key);
const rim = new THREE.DirectionalLight(0xffffff, 0.4);
rim.position.set(-5, -3, -4);
scene.add(rim);

const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
const pivot = new THREE.Group();
scene.add(pivot);
let mesh: THREE.Mesh | null = null;

let renderTarget: THREE.WebGLRenderTarget | null = null;
let pixelBuffer: Uint8Array | null = null;
let termCols = 0;
let termRows = 0; // character grid (what you see as "cols")
let ptCols = 0;
let ptRows = 0; // pixel/sub-dot grid actually rendered & read back

function setModel(geometry: THREE.BufferGeometry): void {
  if (mesh) {
    pivot.remove(mesh);
    mesh.geometry.dispose();
  }
  geometry.computeVertexNormals();
  geometry.center();

  const box = new THREE.Box3().setFromObject(new THREE.Mesh(geometry));
  const size = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  geometry.scale(2 / maxDim, 2 / maxDim, 2 / maxDim);

  mesh = new THREE.Mesh(geometry, material);
  pivot.add(mesh);
  pivot.rotation.set(0, 0, 0);
}

function objFromGeometry(geometry: THREE.BufferGeometry): string {
  const pos = geometry.attributes["position"] as THREE.BufferAttribute;
  const index = geometry.index;
  const lines: string[] = [];
  for (let i = 0; i < pos.count; i++) {
    lines.push(`v ${pos.getX(i).toFixed(5)} ${pos.getY(i).toFixed(5)} ${pos.getZ(i).toFixed(5)}`);
  }
  const tri = index ? (index.array as ArrayLike<number>) : null;
  const count = tri ? tri.length : pos.count;
  for (let i = 0; i < count; i += 3) {
    const a = (tri ? tri[i]! : i) + 1;
    const b = (tri ? tri[i + 1]! : i + 1) + 1;
    const c = (tri ? tri[i + 2]! : i + 2) + 1;
    lines.push(`f ${a} ${b} ${c}`);
  }
  return lines.join("\n");
}

function loadDefaultModel(): void {
  const demoGeo = new THREE.TorusKnotGeometry(0.7, 0.25, 140, 24);
  const objText = objFromGeometry(demoGeo);
  const obj = new OBJLoader().parse(objText);
  const loadedMesh = obj.children.find((c): c is THREE.Mesh => (c as THREE.Mesh).isMesh) as THREE.Mesh | undefined;
  if (loadedMesh) setModel(loadedMesh.geometry as THREE.BufferGeometry);
}

function loadObjText(text: string): void {
  const obj = new OBJLoader().parse(text);
  const loadedMesh = obj.children.find((c): c is THREE.Mesh => (c as THREE.Mesh).isMesh) as THREE.Mesh | undefined;
  if (!loadedMesh) return;
  const merged = new THREE.BufferGeometry();
  const geom = loadedMesh.geometry as THREE.BufferGeometry;
  merged.setAttribute("position", geom.attributes["position"]!);
  if (geom.index) merged.setIndex(geom.index);
  setModel(merged);
}

loadDefaultModel();

// Canvas fillText doesn't reliably trigger @font-face fetching the way DOM
// text does, and #ascii stays display:none in octant/braille — request the
// font explicitly so the first frame already has real glyphs.
document.fonts.load('16px "Legacy Symbols"').catch(() => {});

// ---------------------------------------------------------------------------
// Interaction — drag to rotate, wheel to zoom
// ---------------------------------------------------------------------------
let isDragging = false;
let prevX = 0;
let prevY = 0;
const rotation = new THREE.Quaternion();
const targetRotation = new THREE.Quaternion();
let distance = 6;
let targetDistance = 6;

stage.addEventListener("pointerdown", (e: PointerEvent) => {
  isDragging = true;
  prevX = e.clientX;
  prevY = e.clientY;
  stage.classList.add("dragging");
  autoRotateInput.checked = false;
});
window.addEventListener("pointerup", () => {
  isDragging = false;
  stage.classList.remove("dragging");
});
window.addEventListener("pointermove", (e: PointerEvent) => {
  if (!isDragging) return;
  const dx = e.clientX - prevX;
  const dy = e.clientY - prevY;
  prevX = e.clientX;
  prevY = e.clientY;
  const speed = 0.008;
  const delta = new THREE.Quaternion().setFromEuler(new THREE.Euler(dy * speed, dx * speed, 0, "XYZ"));
  targetRotation.multiplyQuaternions(delta, targetRotation);
});
stage.addEventListener(
  "wheel",
  (e: WheelEvent) => {
    e.preventDefault();
    targetDistance = Math.max(2, Math.min(20, targetDistance * (1 + (e.deltaY > 0 ? 0.1 : -0.1))));
  },
  { passive: false },
);

resetBtn.addEventListener("click", () => {
  targetRotation.identity();
  targetDistance = 6;
});

// ---------------------------------------------------------------------------
// File loading — <input> + drag-and-drop .obj
// ---------------------------------------------------------------------------
function handleFile(file: File | null | undefined): void {
  if (!file || !file.name.toLowerCase().endsWith(".obj")) return;
  const reader = new FileReader();
  reader.onload = () => loadObjText(reader.result as string);
  reader.readAsText(file);
}
fileInput.addEventListener("change", () => handleFile(fileInput.files?.[0]));

["dragover", "dragenter"].forEach((evt) =>
  window.addEventListener(evt, (e: Event) => {
    e.preventDefault();
    document.body.classList.add("dragover");
  }),
);
["dragleave", "drop"].forEach((evt) =>
  window.addEventListener(evt, (e: Event) => {
    e.preventDefault();
    document.body.classList.remove("dragover");
  }),
);
window.addEventListener("drop", (e: DragEvent) => {
  e.preventDefault();
  const file = e.dataTransfer?.files?.[0];
  handleFile(file);
});

// ---------------------------------------------------------------------------
// Grid sizing — measure monospace glyph metrics so the ASCII grid fills the
// viewport without distortion, then size the render target to match exactly.
// ---------------------------------------------------------------------------
const measureCanvas = document.createElement("canvas");
const measureCtx = measureCanvas.getContext("2d")!;

const dpr = Math.min(window.devicePixelRatio || 1, 2);
let fontSize = 16;
let charWidth = 9;
let cssW = 0;
let cssH = 0;

function computeGrid(): void {
  const cols = parseInt(colsInput.value, 10);
  const style = styleSelect.value as RenderStyle;
  const fontFamily = getComputedStyle(asciiEl).fontFamily;
  const testSize = 100;
  measureCtx.font = `${testSize}px ${fontFamily}`;
  const charWidthRatio = measureCtx.measureText("M").width / testSize;

  const vw = window.innerWidth * 0.94;
  const vh = window.innerHeight * 0.8;

  fontSize = vw / (cols * charWidthRatio);
  charWidth = fontSize * charWidthRatio;
  const rows = Math.max(1, Math.floor(vh / fontSize));

  asciiEl.style.fontSize = `${fontSize}px`;
  asciiEl.style.lineHeight = "1";

  cssW = cols * charWidth;
  cssH = rows * fontSize;
  canvasEl.style.width = `${cssW}px`;
  canvasEl.style.height = `${cssH}px`;
  canvasEl.width = Math.round(cssW * dpr);
  canvasEl.height = Math.round(cssH * dpr);
  canvasCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  canvasCtx.font = `${fontSize}px ${fontFamily}`;
  canvasCtx.textBaseline = "top";

  // Braille/octant pack a 2×4 sub-cell grid, so the render target needs
  // that many more samples per character cell than ramp text.
  const subgrid = style === "braille" || style === "octant";
  const newPtCols = subgrid ? cols * 2 : cols;
  const newPtRows = subgrid ? rows * 4 : rows;

  termCols = cols;
  termRows = rows;

  if (newPtCols !== ptCols || newPtRows !== ptRows) {
    ptCols = newPtCols;
    ptRows = newPtRows;
    if (renderTarget) renderTarget.dispose();
    renderTarget = new THREE.WebGLRenderTarget(ptCols, ptRows, { depthBuffer: true, stencilBuffer: false });
    pixelBuffer = new Uint8Array(ptCols * ptRows * 4);
    camera.aspect = ptCols / ptRows;
    camera.updateProjectionMatrix();
    gridSizeEl.textContent = `${termCols} x ${termRows}${subgrid ? ` (${ptCols}x${ptRows} dots)` : ""}`;
  }
}
computeGrid();
window.addEventListener("resize", computeGrid);
colsInput.addEventListener("input", computeGrid);
styleSelect.addEventListener("change", () => {
  syncStyleUi();
  computeGrid();
});

// ---------------------------------------------------------------------------
// Render loop
// ---------------------------------------------------------------------------
let rowStrings: string[] = [];
let lastFpsT = performance.now();
let frames = 0;

function luminanceAt(px: number, py: number): number {
  // render target rows are bottom-up; flip while reading
  if (!pixelBuffer) return 0;
  const srcY = ptRows - 1 - py;
  const i = (srcY * ptCols + px) * 4;
  return (pixelBuffer[i]! * 0.299 + pixelBuffer[i + 1]! * 0.587 + pixelBuffer[i + 2]! * 0.114) / 255;
}

function render(): void {
  requestAnimationFrame(render);

  if (autoRotateInput.checked) {
    const spin = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0.012, 0));
    targetRotation.multiplyQuaternions(spin, targetRotation);
  }
  rotation.slerp(targetRotation, 0.15);
  pivot.setRotationFromQuaternion(rotation);
  distance += (targetDistance - distance) * 0.15;
  camera.position.set(0, 0, distance);
  camera.lookAt(0, 0, 0);

  if (!renderTarget || !pixelBuffer) return;
  renderer.setRenderTarget(renderTarget);
  renderer.render(scene, camera);
  renderer.readRenderTargetPixels(renderTarget, 0, 0, ptCols, ptRows, pixelBuffer);
  renderer.setRenderTarget(null);

  const invert = invertInput.checked;
  const style = styleSelect.value as RenderStyle;
  if (rowStrings.length !== termRows) rowStrings = new Array(termRows);

  if (style === "octant") {
    // Shape from dithered 2×4 block pattern; tone from per-cell grayscale fill.
    canvasCtx.clearRect(0, 0, cssW, cssH);
    const GRAY_STEP = 4; // quantize so nearby cells merge into one fillText run
    for (let ty = 0; ty < termRows; ty++) {
      const y = ty * fontSize;
      let runStart = 0;
      let runGray = -1;
      let runStr = "";
      for (let tx = 0; tx < termCols; tx++) {
        let bits = 0;
        let sum = 0;
        for (let dy = 0; dy < 4; dy++) {
          const py = ty * 4 + dy;
          const bayerRow = BAYER4[dy]!;
          for (let dx = 0; dx < 2; dx++) {
            const px = tx * 2 + dx;
            const lum = luminanceAt(px, py);
            sum += lum;
            if (lum > bayerRow[dx]!) bits |= 1 << OCTANT_BIT[dy]![dx]!;
          }
        }
        const avgLum = invert ? 1 - sum / 8 : sum / 8;
        const gray = Math.round((avgLum * 255) / GRAY_STEP) * GRAY_STEP;
        const glyph = OCTANT_GLYPHS[bits]!;
        if (gray !== runGray) {
          if (runStr) {
            canvasCtx.fillStyle = `rgb(${runGray},${runGray},${runGray})`;
            canvasCtx.fillText(runStr, runStart * charWidth, y);
          }
          runStart = tx;
          runGray = gray;
          runStr = glyph;
        } else {
          runStr += glyph;
        }
      }
      if (runStr) {
        canvasCtx.fillStyle = `rgb(${runGray},${runGray},${runGray})`;
        canvasCtx.fillText(runStr, runStart * charWidth, y);
      }
    }
  } else if (style === "braille") {
    for (let ty = 0; ty < termRows; ty++) {
      let row = "";
      for (let tx = 0; tx < termCols; tx++) {
        let bits = 0;
        for (let dy = 0; dy < 4; dy++) {
          const py = ty * 4 + dy;
          const bayerRow = BAYER4[dy]!;
          for (let dx = 0; dx < 2; dx++) {
            const px = tx * 2 + dx;
            const lum = luminanceAt(px, py);
            if (lum > bayerRow[dx]!) bits |= 1 << BRAILLE_BIT[dy]![dx]!;
          }
        }
        row += String.fromCharCode(0x2800 + bits);
      }
      rowStrings[ty] = row;
    }
    asciiEl.textContent = rowStrings.join("\n");
  } else {
    const ramp = RAMPS[rampSelect.value as RampName];
    const rampLen = ramp.length - 1;
    for (let ty = 0; ty < termRows; ty++) {
      let row = "";
      for (let tx = 0; tx < termCols; tx++) {
        const lum = luminanceAt(tx, ty);
        row += ramp[Math.round(lum * rampLen)]!;
      }
      rowStrings[ty] = row;
    }
    asciiEl.textContent = rowStrings.join("\n");
  }

  stage.style.background = invert ? "#f0f0f0" : "";
  asciiEl.style.color = invert ? "#111" : "";

  frames++;
  const now = performance.now();
  if (now - lastFpsT >= 500) {
    fpsEl.textContent = `${Math.round((frames * 1000) / (now - lastFpsT))} fps`;
    frames = 0;
    lastFpsT = now;
  }
}
requestAnimationFrame(render);
