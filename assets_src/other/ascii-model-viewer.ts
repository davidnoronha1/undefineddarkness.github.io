// ascii-model-viewer.ts
//
// Custom element packaging the ASCII renderer from experiments/ascii-render.html:
// renders a .glb/.gltf/.obj model offscreen with three.js, reads the pixels back
// each frame, and displays them as monospace ASCII art (character ramp, braille,
// or octant blocks). Drag to rotate, Shift+drag to pan, scroll to zoom; on touch,
// one finger rotates and two fingers pinch-zoom/pan. An expand button toggles
// native fullscreen, and auto-rotation pauses while the user is
// dragging/zooming, resuming after a few seconds of idle.
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

type RenderStyle = "octant" | "braille" | "text";

const RAMPS: Record<string, string> = {
  simple: " .:-=+*#%@",
  detailed: " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",
  blocks: " ░▒▓█"
};

// Unicode braille (U+2800-U+28FF) packs an 8-dot (2x4) sub-grid into a
// single monospace glyph. Bit layout per the Unicode braille dot numbering.
const BRAILLE_BIT = [
  [0, 3],
  [1, 4],
  [2, 5],
  [6, 7]
];

// 4x4 Bayer ordered-dither matrix: gradients read as dot density.
const BAYER4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5]
].map((row) => row.map((v) => (v + 0.5) / 16));

// Octants share braille's 2x4 sub-grid but as filled blocks carrying a real
// grayscale color per cell. Indexed by mask (bit i-1 = cell i on/off), the
// table is generated straight from the Unicode 16 UCD (UnicodeData.txt).
const OCTANT_BIT = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7]
];
const OCTANT_CODEPOINTS = [
  0x0020, 0x0020, 0x0020, 0x1FB82, 0x1CD00, 0x2598, 0x1CD01, 0x1CD02,
  0x1CD03, 0x1CD04, 0x259D, 0x1CD05, 0x1CD06, 0x1CD07, 0x1CD08, 0x2580,
  0x1CD09, 0x1CD0A, 0x1CD0B, 0x1CD0C, 0x1CD0D, 0x1CD0E, 0x1CD0F, 0x1CD10,
  0x1CD11, 0x1CD12, 0x1CD13, 0x1CD14, 0x1CD15, 0x1CD16, 0x1CD17, 0x1CD18,
  0x1CD19, 0x1CD1A, 0x1CD1B, 0x1CD1C, 0x1CD1D, 0x1CD1E, 0x1CD1F, 0x1FBE7,
  0x1CD20, 0x1CD21, 0x1CD22, 0x1CD23, 0x1CD24, 0x1CD25, 0x1CD26, 0x1CD27,
  0x1CD28, 0x1CD29, 0x1CD2A, 0x1CD2B, 0x1CD2C, 0x1CD2D, 0x1CD2E, 0x1CD2F,
  0x1CD30, 0x1CD31, 0x1CD32, 0x1CD33, 0x1CD34, 0x1CD35, 0x1CD36, 0x2588,
  0x0020, 0x1CD37, 0x1CD38, 0x1CD39, 0x1CD3A, 0x1CD3B, 0x1CD3C, 0x1CD3D,
  0x1CD3E, 0x1CD3F, 0x1CD40, 0x1CD41, 0x1CD42, 0x1CD43, 0x1CD44, 0x1CD45,
  0x2596, 0x1CD46, 0x1CD47, 0x1CD48, 0x1CD49, 0x258C, 0x1CD4A, 0x1CD4B,
  0x1CD4C, 0x1CD4D, 0x259E, 0x1CD4E, 0x1CD4F, 0x1CD50, 0x1CD51, 0x259B,
  0x1CD52, 0x1CD53, 0x1CD54, 0x1CD55, 0x1CD56, 0x1CD57, 0x1CD58, 0x1CD59,
  0x1CD5A, 0x1CD5B, 0x1CD5C, 0x1CD5D, 0x1CD5E, 0x1CD5F, 0x1CD60, 0x1CD61,
  0x1CD62, 0x1CD63, 0x1CD64, 0x1CD65, 0x1CD66, 0x1CD67, 0x1CD68, 0x1CD69,
  0x1CD6A, 0x1CD6B, 0x1CD6C, 0x1CD6D, 0x1CD6E, 0x1CD6F, 0x1CD70, 0x0020,
  0x1CD71, 0x1CD72, 0x1CD73, 0x1CD74, 0x1CD75, 0x1CD76, 0x1CD77, 0x1CD78,
  0x1CD79, 0x1CD7A, 0x1CD7B, 0x1CD7C, 0x1CD7D, 0x1CD7E, 0x1CD7F, 0x1CD80,
  0x1CD81, 0x1CD82, 0x1CD83, 0x1CD84, 0x1CD85, 0x1CD86, 0x1CD87, 0x1CD88,
  0x1CD89, 0x1CD8A, 0x1CD8B, 0x1CD8C, 0x1CD8D, 0x1CD8E, 0x1CD8F, 0x1CD90,
  0x2597, 0x1CD91, 0x1CD92, 0x1CD93, 0x1CD94, 0x259A, 0x1CD95, 0x1CD96,
  0x1CD97, 0x1CD98, 0x2590, 0x1CD99, 0x1CD9A, 0x1CD9B, 0x259C, 0x1CD9C,
  0x1CD9D, 0x1CD9E, 0x1CD9F, 0x1CDA0, 0x1CDA1, 0x1CDA2, 0x1CDA3, 0x1CDA4,
  0x1CDA5, 0x1CDA6, 0x1CDA7, 0x1CDA8, 0x1CDA9, 0x1CDAA, 0x1CDAB, 0x1CDAC,
  0x2582, 0x1CDAD, 0x1CDAE, 0x1CDAF, 0x1CDB0, 0x1CDB1, 0x1CDB2, 0x1CDB3,
  0x1CDB4, 0x1CDB5, 0x1CDB6, 0x1CDB7, 0x1CDB8, 0x1CDB9, 0x1CDBA, 0x1CDBB,
  0x1CDBC, 0x1CDBD, 0x1CDBE, 0x1CDBF, 0x1CDC0, 0x1CDC1, 0x1CDC2, 0x1CDC3,
  0x1CDC4, 0x1CDC5, 0x1CDC6, 0x1CDC7, 0x1CDC8, 0x1CDC9, 0x1CDCA, 0x1CDCB,
  0x1CDCC, 0x1CDCD, 0x1CDCE, 0x1CDCF, 0x1CDD0, 0x1CDD1, 0x1CDD2, 0x1CDD3,
  0x1CDD4, 0x1CDD5, 0x1CDD6, 0x1CDD7, 0x1CDD8, 0x1CDD9, 0x1CDDA, 0x1CDDB,
  0x2584, 0x1CDDC, 0x1CDDD, 0x1CDDE, 0x2599, 0x1CDDF, 0x1CDE0, 0x1CDE1,
  0x1CDE2, 0x259F, 0x1CDE3, 0x2588, 0x1CDE4, 0x1CDE5, 0x2588
];
const OCTANT_GLYPHS = OCTANT_CODEPOINTS.map((cp) => String.fromCodePoint(cp));

const FONT_STACK =
  '"FairfaxOctant", "SF Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace';

// Inline SVG rather than a Unicode glyph (e.g. ⛶ U+26F6) for the expand
// button — that glyph's font coverage is inconsistent across platforms and
// renders as a missing-character box on several of them.
const EXPAND_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>';
const COLLAPSE_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>';

export class AsciiModelViewer extends HTMLElement {
  // How long after the user stops dragging/zooming before auto-rotation
  // resumes, in milliseconds.
  private static readonly IDLE_RESUME_MS = 2500;

  private container!: HTMLDivElement;
  private asciiEl!: HTMLPreElement;
  private canvasEl!: HTMLCanvasElement;
  private canvasCtx!: CanvasRenderingContext2D;
  private measureCtx: CanvasRenderingContext2D;
  private expandBtn!: HTMLButtonElement;

  private renderer?: THREE.WebGLRenderer;
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private pivot?: THREE.Group;
  private model?: THREE.Object3D;
  private material?: THREE.MeshLambertMaterial;
  private renderTarget?: THREE.WebGLRenderTarget;
  private pixelBuffer?: Uint8Array;

  // Grid state (character grid = what you see; pixel grid = what's rendered).
  private termCols = 0;
  private termRows = 0;
  private ptCols = 0;
  private ptRows = 0;
  private fontSize = 16;
  private charWidth = 9;
  private cssW = 0;
  private cssH = 0;
  private dpr = 1;
  private rowStrings: string[] = [];
  private cols = 110;
  // Character cell width at the configured `cols` count under normal
  // (non-fullscreen) layout — used to keep glyphs a constant on-screen size
  // in fullscreen, so the extra space buys more detail instead of just
  // stretching the same grid into bigger blocky characters.
  private baseCharWidth = 0;
  private renderStyle: RenderStyle = "octant";
  private ramp = "detailed";
  private invert = false;
  private fg = "#d8d8d8";
  private bg = "#0b0b0b";
  private autoRotate = true;
  private disableZoom = false;
  private disablePan = false;
  private disableRotate = false;

  // Interaction + animation.
  private isDragging = false;
  private prevX = 0;
  private prevY = 0;
  private rotation = new THREE.Quaternion();
  private targetRotation = new THREE.Quaternion();
  // Default/reset camera distance, overridable via the `distance` attribute
  // so individual embeds can start more or less zoomed in.
  private initialDistance = 6;
  private distance = 6;
  private targetDistance = 6;
  private panX = 0;
  private panY = 0;
  private animationId?: number;
  private resizeObserver?: ResizeObserver;
  private onPointerMove = (e: PointerEvent) => this.handlePointerMove(e);
  private onPointerUp = (e: PointerEvent) => this.handlePointerUp(e);

  // Multi-touch state: two simultaneous pointers are treated as a
  // pinch-to-zoom + two-finger pan gesture instead of rotate.
  private activePointers = new Map<number, { x: number; y: number }>();
  private pinchStartDist = 0;
  private pinchStartDistanceValue = 0;
  private pinchStartMidX = 0;
  private pinchStartMidY = 0;
  private pinchStartPanX = 0;
  private pinchStartPanY = 0;

  // True while the user is actively dragging/zooming, or during the idle
  // grace period right after — auto-rotation stays paused for both.
  private interacting = false;
  private idleTimer?: number;
  private onFullscreenChange = () => this.syncFullscreenUi();

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
      :host { display: block; position: relative; }
      #stage {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: grab;
        overflow: hidden;
        user-select: none;
        touch-action: none;
      }
      #stage.dragging { cursor: grabbing; }
      #ascii {
        font-family: ${FONT_STACK};
        white-space: pre;
        line-height: 1;
        letter-spacing: 0;
        margin: 0;
        user-select: none;
        text-align: left;
      }
      #ascii-canvas { user-select: none; }
      #expand-btn {
        position: absolute;
        top: 0.5em;
        right: 0.5em;
        z-index: 1;
        width: 1.8em;
        height: 1.8em;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: none;
        padding: 0;
        color: #fff;
        cursor: pointer;
        opacity: 0.6;
        filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.8));
        transition: opacity 0.15s ease;
      }
      #expand-btn svg { width: 60%; height: 60%; }
      #expand-btn:hover { opacity: 1; }
      :host(:fullscreen) {
        width: 100vw;
        height: 100vh;
        background: #000;
      }
    `;
    this.shadowRoot!.appendChild(style);

    this.container = document.createElement("div");
    this.container.id = "stage";
    this.shadowRoot!.appendChild(this.container);

    this.asciiEl = document.createElement("pre");
    this.asciiEl.id = "ascii";
    this.container.appendChild(this.asciiEl);

    this.canvasEl = document.createElement("canvas");
    this.canvasEl.id = "ascii-canvas";
    this.container.appendChild(this.canvasEl);

    this.expandBtn = document.createElement("button");
    this.expandBtn.id = "expand-btn";
    this.expandBtn.type = "button";
    this.expandBtn.innerHTML = EXPAND_ICON;
    this.expandBtn.setAttribute("aria-label", "Expand viewer");
    // Fullscreen must be requested from a direct user gesture on this
    // button — stop the pointerdown here so it doesn't also register as
    // a drag-to-rotate on the stage underneath.
    this.expandBtn.addEventListener("pointerdown", (e) => e.stopPropagation());
    this.expandBtn.addEventListener("click", () => this.toggleFullscreen());
    this.shadowRoot!.appendChild(this.expandBtn);

    this.canvasCtx = this.canvasEl.getContext("2d")!;
    this.measureCtx = document.createElement("canvas").getContext("2d")!;
  }

  static get observedAttributes(): string[] {
    return [
      "src",
      "mode",
      "ramp",
      "cols",
      "invert",
      "auto-rotate",
      "disable-zoom",
      "disable-pan",
      "disable-rotate",
      "fg",
      "bg",
      "distance"
    ];
  }

  attributeChangedCallback(
    name: string,
    _oldValue: string | null,
    newValue: string | null
  ): void {
    if (name === "src") {
      this.loadModel();
      return;
    }
    this.parseAttributes();
    if (name === "mode" || name === "cols") {
      this.computeGrid();
      this.syncUi();
    } else if (name === "fg" || name === "bg") {
      this.syncUi();
    }
  }

  private parseAttributes(): void {
    this.renderStyle = (this.getAttribute("mode") as RenderStyle) || "octant";
    if (!["octant", "braille", "text"].includes(this.renderStyle)) this.renderStyle = "octant";
    this.ramp = this.getAttribute("ramp") || "detailed";
    if (!(this.ramp in RAMPS)) this.ramp = "detailed";
    this.cols = parseInt(this.getAttribute("cols") ?? "110", 10) || 110;
    this.invert = this.hasAttribute("invert");
    this.autoRotate = this.getAttribute("auto-rotate") !== "false";
    this.disableZoom = this.hasAttribute("disable-zoom");
    this.disablePan = this.hasAttribute("disable-pan");
    this.disableRotate = this.hasAttribute("disable-rotate");
    this.fg = this.getAttribute("fg") || "#d8d8d8";
    this.bg = this.getAttribute("bg") || "#0b0b0b";
    this.initialDistance = parseFloat(this.getAttribute("distance") ?? "6") || 6;
  }

  connectedCallback(): void {
    this.parseAttributes();
    if (!this.renderer) {
      this.initRenderer();
      this.addInteractions();
    }
    this.computeGrid();
    this.syncUi();
    if (this.getAttribute("src") && !this.model) this.loadModel();
    if (!this.animationId) this.tick();
    // fillText doesn't reliably trigger @font-face fetching on its own the way
    // DOM text does — request the octant font explicitly so the first frame
    // already has real glyphs instead of a fallback flash.
    document.fonts.load('16px "FairfaxOctant"').catch(() => {});
    document.addEventListener("fullscreenchange", this.onFullscreenChange);
  }

  disconnectedCallback(): void {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    this.animationId = undefined;
    window.removeEventListener("pointermove", this.onPointerMove);
    window.removeEventListener("pointerup", this.onPointerUp);
    window.removeEventListener("pointercancel", this.onPointerUp);
    document.removeEventListener("fullscreenchange", this.onFullscreenChange);
    if (this.idleTimer !== undefined) window.clearTimeout(this.idleTimer);
    if (this.resizeObserver) this.resizeObserver.disconnect();
  }

  private toggleFullscreen(): void {
    if (document.fullscreenElement === this) {
      document.exitFullscreen().catch(() => {});
    } else {
      this.requestFullscreen().catch(() => {});
    }
  }

  private syncFullscreenUi(): void {
    const isFullscreen = document.fullscreenElement === this;
    this.expandBtn.innerHTML = isFullscreen ? COLLAPSE_ICON : EXPAND_ICON;
    this.expandBtn.setAttribute(
      "aria-label",
      isFullscreen ? "Exit fullscreen" : "Expand viewer"
    );
    // The host's on-screen size just changed; recompute the character grid
    // for it rather than waiting on the ResizeObserver's own timing.
    this.computeGrid();
    this.syncUi();
  }

  private initRenderer(): void {
    const width = this.clientWidth || 600;
    const height = this.clientHeight || 400;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    this.camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 6);

    this.scene.add(new THREE.AmbientLight(0xffffff, 0.35));
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(4, 6, 5);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0xffffff, 0.4);
    rim.position.set(-5, -3, -4);
    this.scene.add(rim);

    this.material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    this.pivot = new THREE.Group();
    this.scene.add(this.pivot);

    this.renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      preserveDrawingBuffer: false
    });
    this.renderer.setPixelRatio(1);
    this.renderer.domElement.style.display = "none";
    this.shadowRoot!.appendChild(this.renderer.domElement);

    this.resizeObserver = new ResizeObserver(() => {
      this.computeGrid();
      this.syncUi();
    });
    this.resizeObserver.observe(this);
  }

  private loadModel(): void {
    const src = this.getAttribute("src");
    if (!src || !this.pivot) return;

    if (this.model) {
      this.pivot.remove(this.model);
      this.model = undefined;
    }

    const path = src.split("?")[0].split("#")[0].toLowerCase();
    if (path.endsWith(".glb") || path.endsWith(".gltf")) {
      const loader = new GLTFLoader();
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
      loader.setDRACOLoader(dracoLoader);
      loader.load(
        src,
        (gltf) => this.setModelObject(gltf.scene),
        undefined,
        (error) => console.error("ascii-model-viewer: error loading GLB:", error)
      );
    } else {
      const loader = new OBJLoader();
      loader.load(
        src,
        (obj) => this.setModelObject(obj),
        undefined,
        (error) => console.error("ascii-model-viewer: error loading OBJ:", error)
      );
    }
  }

  private setModelObject(root: THREE.Object3D): void {
    root.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.isMesh && this.material) mesh.material = this.material;
    });

    const box = new THREE.Box3().setFromObject(root);
    const center = box.getCenter(new THREE.Vector3());
    root.position.sub(center);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    root.scale.setScalar(2 / maxDim);

    this.model = root;
    this.pivot!.add(root);
    this.pivot!.rotation.set(0, 0, 0);
    this.rotation.identity();
    this.targetRotation.identity();
    this.distance = this.initialDistance;
    this.targetDistance = this.initialDistance;
  }

  private addInteractions(): void {
    this.container.addEventListener("pointerdown", (e: PointerEvent) => {
      this.activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (this.activePointers.size === 1) {
        this.isDragging = true;
        this.prevX = e.clientX;
        this.prevY = e.clientY;
        this.container.classList.add("dragging");
      } else if (this.activePointers.size === 2) {
        // A second finger landed: stop treating this as a rotate-drag and
        // start a pinch-zoom + two-finger-pan gesture instead.
        this.isDragging = false;
        this.beginPinch();
      }
      this.markInteracting();
    });
    window.addEventListener("pointermove", this.onPointerMove);
    window.addEventListener("pointerup", this.onPointerUp);
    window.addEventListener("pointercancel", this.onPointerUp);
    this.container.addEventListener(
      "wheel",
      (e: WheelEvent) => {
        if (this.disableZoom) return;
        e.preventDefault();
        this.targetDistance = Math.max(
          2,
          Math.min(20, this.targetDistance * (1 + (e.deltaY > 0 ? 0.1 : -0.1)))
        );
        this.markInteracting();
        this.scheduleIdleResume();
      },
      { passive: false }
    );
  }

  // Captures the starting finger separation/midpoint/pan so subsequent
  // pinch updates can be computed as deltas from this baseline.
  private beginPinch(): void {
    const pts = Array.from(this.activePointers.values());
    const [a, b] = pts;
    this.pinchStartDist = Math.hypot(a.x - b.x, a.y - b.y) || 1;
    this.pinchStartDistanceValue = this.targetDistance;
    this.pinchStartMidX = (a.x + b.x) / 2;
    this.pinchStartMidY = (a.y + b.y) / 2;
    this.pinchStartPanX = this.panX;
    this.pinchStartPanY = this.panY;
  }

  private updatePinch(): void {
    const pts = Array.from(this.activePointers.values());
    const [a, b] = pts;
    if (!this.disableZoom) {
      const dist = Math.hypot(a.x - b.x, a.y - b.y) || 1;
      const ratio = dist / this.pinchStartDist;
      this.targetDistance = Math.max(
        2,
        Math.min(20, this.pinchStartDistanceValue / ratio)
      );
    }
    if (!this.disablePan) {
      const midX = (a.x + b.x) / 2;
      const midY = (a.y + b.y) / 2;
      const panSpeed = 0.003;
      this.panX = this.pinchStartPanX + (midX - this.pinchStartMidX) * panSpeed;
      this.panY = this.pinchStartPanY - (midY - this.pinchStartMidY) * panSpeed;
    }
  }

  // Called the moment the user starts (or continues) dragging/zooming:
  // pauses auto-rotation immediately and cancels any pending resume so a
  // burst of wheel events doesn't resume mid-interaction.
  private markInteracting(): void {
    this.interacting = true;
    if (this.idleTimer !== undefined) {
      window.clearTimeout(this.idleTimer);
      this.idleTimer = undefined;
    }
  }

  // Called once the user lets go: starts (or restarts) the idle countdown
  // before auto-rotation is allowed to resume.
  private scheduleIdleResume(): void {
    if (this.idleTimer !== undefined) window.clearTimeout(this.idleTimer);
    this.idleTimer = window.setTimeout(() => {
      this.interacting = false;
      this.idleTimer = undefined;
    }, AsciiModelViewer.IDLE_RESUME_MS);
  }

  private handlePointerMove(e: PointerEvent): void {
    if (!this.activePointers.has(e.pointerId)) return;
    this.activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (this.activePointers.size >= 2) {
      this.updatePinch();
      this.markInteracting();
      return;
    }

    if (!this.isDragging) return;
    const dx = e.clientX - this.prevX;
    const dy = e.clientY - this.prevY;
    this.prevX = e.clientX;
    this.prevY = e.clientY;

    if (!this.disablePan && e.shiftKey) {
      const panSpeed = 0.003;
      this.panX += dx * panSpeed;
      this.panY -= dy * panSpeed;
    } else if (!this.disableRotate) {
      const speed = 0.008;
      const delta = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(dy * speed, dx * speed, 0, "XYZ")
      );
      this.targetRotation.multiplyQuaternions(delta, this.targetRotation);
    }
  }

  private handlePointerUp(e: PointerEvent): void {
    if (!this.activePointers.has(e.pointerId)) return;
    this.activePointers.delete(e.pointerId);

    if (this.activePointers.size === 0) {
      this.isDragging = false;
      this.container.classList.remove("dragging");
      this.scheduleIdleResume();
    } else if (this.activePointers.size === 1) {
      // Dropped from pinch (two fingers) back to a single finger: resume
      // rotate-drag from the remaining finger's current position so it
      // doesn't jump.
      const [pos] = this.activePointers.values();
      this.isDragging = true;
      this.prevX = pos.x;
      this.prevY = pos.y;
    }
  }

  private computeGrid(): void {
    if (!this.renderer || !this.camera) return;
    const style = this.renderStyle;
    const isFullscreen = document.fullscreenElement === this;

    const testSize = 100;
    this.measureCtx.font = `${testSize}px ${FONT_STACK}`;
    const charWidthRatio =
      this.measureCtx.measureText("M").width / testSize || 0.5;

    const vw = this.clientWidth || 600;
    const vh = this.clientHeight || 400;

    // Normally the column count is fixed (from the `cols` attribute) and
    // the font size grows/shrinks to fill the width — fine for a small,
    // fixed-size embed. In fullscreen that would just blow the same glyphs
    // up bigger; instead hold the glyph size steady and add more columns
    // to fill the extra width, so the render target actually samples more
    // detail out of the model.
    const cols =
      isFullscreen && this.baseCharWidth
        ? Math.max(this.cols, Math.floor(vw / this.baseCharWidth))
        : this.cols;

    this.fontSize = vw / (cols * charWidthRatio);
    this.charWidth = this.fontSize * charWidthRatio;
    if (!isFullscreen) this.baseCharWidth = this.charWidth;
    const rows = Math.max(1, Math.floor(vh / this.fontSize));

    this.asciiEl.style.fontSize = `${this.fontSize}px`;
    this.asciiEl.style.lineHeight = "1";

    this.cssW = cols * this.charWidth;
    this.cssH = rows * this.fontSize;
    this.canvasEl.style.width = `${this.cssW}px`;
    this.canvasEl.style.height = `${this.cssH}px`;
    this.canvasEl.width = Math.round(this.cssW * this.dpr);
    this.canvasEl.height = Math.round(this.cssH * this.dpr);
    this.canvasCtx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.canvasCtx.font = `${this.fontSize}px ${FONT_STACK}`;
    this.canvasCtx.textBaseline = "top";

    // Braille dots and octant blocks both pack a 2x4 sub-cell grid, so the
    // render target needs that many more samples per character cell.
    const subgrid = style === "braille" || style === "octant";
    const newPtCols = subgrid ? cols * 2 : cols;
    const newPtRows = subgrid ? rows * 4 : rows;

    this.termCols = cols;
    this.termRows = rows;

    if (newPtCols !== this.ptCols || newPtRows !== this.ptRows) {
      this.ptCols = newPtCols;
      this.ptRows = newPtRows;
      if (this.renderTarget) this.renderTarget.dispose();
      this.renderTarget = new THREE.WebGLRenderTarget(newPtCols, newPtRows, {
        depthBuffer: true,
        stencilBuffer: false
      });
      this.pixelBuffer = new Uint8Array(newPtCols * newPtRows * 4);
      this.camera.aspect = newPtCols / newPtRows;
      this.camera.updateProjectionMatrix();
    }
  }

  private syncUi(): void {
    const isOctant = this.renderStyle === "octant";
    this.asciiEl.style.display = isOctant ? "none" : "block";
    this.canvasEl.style.display = isOctant ? "block" : "none";
    const effBg = this.invert ? this.fg : this.bg;
    const effFg = this.invert ? this.bg : this.fg;
    this.container.style.background = effBg;
    this.asciiEl.style.color = effFg;
  }

  private tick = (): void => {
    this.animationId = requestAnimationFrame(this.tick);
    if (
      !this.model ||
      !this.renderer ||
      !this.camera ||
      !this.pivot ||
      !this.renderTarget ||
      !this.pixelBuffer
    ) {
      return;
    }

    if (this.autoRotate && !this.interacting) {
      const spin = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(0, 0.012, 0)
      );
      this.targetRotation.multiplyQuaternions(spin, this.targetRotation);
    }
    this.rotation.slerp(this.targetRotation, 0.15);
    this.pivot.setRotationFromQuaternion(this.rotation);
    this.distance += (this.targetDistance - this.distance) * 0.15;
    this.camera.position.set(this.panX, this.panY, this.distance);
    this.camera.lookAt(this.panX, this.panY, 0);

    this.renderer.setRenderTarget(this.renderTarget);
    this.renderer.render(this.scene!, this.camera);
    this.renderer.readRenderTargetPixels(
      this.renderTarget,
      0,
      0,
      this.ptCols,
      this.ptRows,
      this.pixelBuffer
    );
    this.renderer.setRenderTarget(null);

    this.drawFrame();
  };

  // Always raw (never flipped by invert): dot/glyph density stays "background
  // sparse, model dense" in both modes. Only the octant style's per-cell color
  // tone flips for invert (below) — ramp and braille represent brightness
  // purely through density, and the blank background pattern stays blank so it
  // doesn't paint over the page background.
  private luminanceAt(px: number, py: number): number {
    const srcY = this.ptRows - 1 - py;
    const i = (srcY * this.ptCols + px) * 4;
    const buf = this.pixelBuffer!;
    return (
      (buf[i] * 0.299 + buf[i + 1] * 0.587 + buf[i + 2] * 0.114) / 255
    );
  }

  private drawFrame(): void {
    if (this.rowStrings.length !== this.termRows) {
      this.rowStrings = new Array(this.termRows);
    }

    if (this.renderStyle === "octant") {
      // Shape from the dithered 2x4 on/off block pattern; tone from a real
      // per-cell grayscale fill, averaged over the same 8 sub-samples.
      this.canvasCtx.clearRect(0, 0, this.cssW, this.cssH);
      const GRAY_STEP = 4; // quantize so nearby cells merge into one fillText run
      for (let ty = 0; ty < this.termRows; ty++) {
        const y = ty * this.fontSize;
        let runStart = 0;
        let runGray = -1;
        let runStr = "";
        for (let tx = 0; tx < this.termCols; tx++) {
          let bits = 0;
          let sum = 0;
          for (let dy = 0; dy < 4; dy++) {
            const py = ty * 4 + dy;
            const bayerRow = BAYER4[dy];
            for (let dx = 0; dx < 2; dx++) {
              const px = tx * 2 + dx;
              const lum = this.luminanceAt(px, py);
              sum += lum;
              if (lum > bayerRow[dx]) bits |= 1 << OCTANT_BIT[dy][dx];
            }
          }
          const avgLum = this.invert ? 1 - sum / 8 : sum / 8;
          const gray = Math.round((avgLum * 255) / GRAY_STEP) * GRAY_STEP;
          const glyph = OCTANT_GLYPHS[bits];
          if (gray !== runGray) {
            if (runStr) {
              this.canvasCtx.fillStyle = `rgb(${runGray},${runGray},${runGray})`;
              this.canvasCtx.fillText(runStr, runStart * this.charWidth, y);
            }
            runStart = tx;
            runGray = gray;
            runStr = glyph;
          } else {
            runStr += glyph;
          }
        }
        if (runStr) {
          this.canvasCtx.fillStyle = `rgb(${runGray},${runGray},${runGray})`;
          this.canvasCtx.fillText(runStr, runStart * this.charWidth, y);
        }
      }
    } else if (this.renderStyle === "braille") {
      for (let ty = 0; ty < this.termRows; ty++) {
        let row = "";
        for (let tx = 0; tx < this.termCols; tx++) {
          let bits = 0;
          for (let dy = 0; dy < 4; dy++) {
            const py = ty * 4 + dy;
            const bayerRow = BAYER4[dy];
            for (let dx = 0; dx < 2; dx++) {
              const px = tx * 2 + dx;
              const lum = this.luminanceAt(px, py);
              if (lum > bayerRow[dx]) bits |= 1 << BRAILLE_BIT[dy][dx];
            }
          }
          row += String.fromCharCode(0x2800 + bits);
        }
        this.rowStrings[ty] = row;
      }
      this.asciiEl.textContent = this.rowStrings.join("\n");
    } else {
      const ramp = RAMPS[this.ramp];
      const rampLen = ramp.length - 1;
      for (let ty = 0; ty < this.termRows; ty++) {
        let row = "";
        for (let tx = 0; tx < this.termCols; tx++) {
          const lum = this.luminanceAt(tx, ty);
          row += ramp[Math.round(lum * rampLen)];
        }
        this.rowStrings[ty] = row;
      }
      this.asciiEl.textContent = this.rowStrings.join("\n");
    }
  }

  public resetView(): void {
    this.rotation.identity();
    this.targetRotation.identity();
    this.distance = this.initialDistance;
    this.targetDistance = this.initialDistance;
    this.panX = 0;
    this.panY = 0;
  }
}

customElements.define("ascii-model-viewer", AsciiModelViewer);
