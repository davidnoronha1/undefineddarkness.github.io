# ascii-model-viewer

Renders `.glb` / `.gltf` / `.obj` models as **monospace ASCII art** — not a post-process filter, but a real offscreen `three.js` render whose pixels are read back every frame and re-emitted as text.

Comes in two forms that share the same renderer core:

| File | What it is |
|---|---|
| `ascii-model-viewer.ts` | `<ascii-model-viewer>` custom element — drop it into any page |
| `ascii-render.ts` + `ascii-render.html` | Full-page standalone demo (drag-and-drop `.obj`, live controls) — the code that used to live inline in `experiments/ascii-render.html` |

Both are **TypeScript**. The HTML shells are intentionally tiny; all logic is in the `.ts` files and can be type-checked / bundled with `bun`.

---

## Preview

```
████████████████████████████
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
░░░░░░░░░░░░░░░░░░░░░░░░░░░░
      ·  :  –  +  *  #  %  @

+ braille (U+2800) — 2×4 dots per cell, 8× detail over plain text
+ octant  (U+1CD00 + U+1FB00) — 2×4 filled blocks + per-cell grayscale
```

> The octant/braille glyphs are Unicode 16 (2024). Most system fonts don't ship them yet — this project uses a ~22 KB subset of [Fairfax HD](https://kreativekorp.com/software/fairfax/) (`LegacySymbols.woff2`, sliced via `assets_src/fonts/.tooling/subset_legacy_symbols.py`) scoped with `unicode-range` so it never touches normal text.

---

## How it works

```
model (.glb/.obj) ──► three.js offscreen ──► WebGL renderTarget (ptCols × ptRows)
                                                │
                          readRenderTargetPixels ▼
                     Uint8Array (RGBA) ──► luminance per sub-dot
                                                │
                           ┌────────────────────┼────────────────────┐
                           ▼                    ▼                    ▼
                        text ramp           braille               octant
                       (ramp char)      (U+2800 + bits)    (block glyph + gray)
                           │                    │                    │
                           └────────────────────┼────────────────────┘
                                                ▼
                                     <pre> or <canvas fillText>
```

* **Offscreen only** — the `WebGLRenderer`'s canvas is `display:none` and never hits the DOM; only the `<pre>`/`<canvas>` that shows the characters is visible.
* **Per-frame readback** — `renderer.readRenderTargetPixels` on a `WebGLRenderTarget` sized to the *sub-dot* grid (`cols×2` by `rows×4` for braille/octant, `cols×rows` for ramp text). No extra downsample pass.
* **Bayer dither** — a 4×4 ordered-dither matrix turns hard on/off thresholds into dot-density gradients, so lighting gradients read smoothly.
* **Responsive grid** — measures real monospace glyph metrics (`measureText("M")`) so `cols` always fills the viewport width without distortion; in fullscreen the glyph size is held fixed and `cols` grows to add detail.

---

## `<ascii-model-viewer>` — the web component

### Quick start

```html
<script type="importmap">
  { "imports": { "three": "https://esm.sh/three@0.179.1", "three/addons/": "https://esm.sh/three@0.179.1/examples/jsm/" } }
</script>
<script type="module" src="/assets/ascii-model-viewer.js"></script>

<ascii-model-viewer
  src="/assets/models/teapot.glb"
  cols="80"
  mode="octant"
  distance="4"
  style="width:600px;height:400px;display:block"
></ascii-model-viewer>
```

On this site the built artifact is `out/.assets/ascii-model-viewer.js` (via `assets_src/Makefile` → `bun build`). The experiments index uses it directly:

```html
<ascii-model-viewer
  src="https://…/simple-auv-v1.glb"
  cols="60" mode="octant" distance="3.5">
</ascii-model-viewer>
```

### Attributes

| Attribute | Type | Default | Notes |
|---|---|---|---|
| `src` | `string` | — | `.glb`, `.gltf`, or `.obj` URL. GLB/Gltf uses `GLTFLoader` + `DRACOLoader` (Draco decoder from `gstatic`). |
| `mode` | `octant` \| `braille` \| `text` | `octant` | Rendering style (see above). |
| `ramp` | `simple` \| `detailed` \| `blocks` | `detailed` | Only for `mode="text"`. |
| `cols` | `number` | `110` | Character columns in normal layout. In fullscreen the component keeps glyph size fixed and *adds* columns to use the extra width. |
| `invert` | `boolean` | off | Flip fg/bg tone (octant's per-cell gray also flips; density stays correct). |
| `fg` / `bg` | CSS color | `#d8d8d8` / `#0b0b0b` | Base colors before `invert` is applied. |
| `distance` | `number` | `6` | Initial camera distance (also the zoom-reset value). |
| `auto-rotate` | `boolean attr` | on | `auto-rotate="false"` disables. Pauses on drag/zoom, resumes after ~2.5 s idle. |
| `disable-zoom` / `disable-pan` / `disable-rotate` | `boolean` | off | Fine-grained interaction locks. |

### Interactions

* **Drag** → rotate, **Shift+drag** → pan, **scroll/pinch** → zoom
* **One finger** rotates, **two fingers** pinch-zoom + pan (touch)
* **Expand button** (top-right) toggles native `requestFullscreen`; in fullscreen the character grid grows rather than stretching

### Methods

```ts
document.querySelector("ascii-model-viewer")!.resetView();
```

---

## `ascii-render.html` — standalone demo

A full-viewport page that embeds the *same* octant/braille/ramp pipeline without the custom-element wrapper. Controls sit in a bottom panel:

* **cols** slider (40–220), **style** / **ramp** selects, **invert**, **auto-rotate**, **reset view**
* **Load `.obj`** button + **drag-and-drop** anywhere on the page
* **HUD** (fps + `cols×rows`) top-right; **drop hint** center until a model is loaded
* Defaults to a `TorusKnotGeometry` torus knot round-tripped through `OBJLoader` so the OBJ path is exercised before any file is picked

```
# from the repo root
bun build ./ascii-model-viewer/ascii-render.ts \
  --outfile ./ascii-model-viewer/ascii-render.js \
  --target browser --external three --external "three/addons/*"

# then open
open ascii-model-viewer/ascii-render.html
# or serve via the site's live server — experiments/ascii-render.html redirects here
```

The HTML shell is intentionally CDN-based (`esm.sh/three@0.179.1` via `<script type="importmap">`) so the demo works without `node_modules` — the bundled `ascii-render.js` is just transpiled TS (types stripped) that still resolves `three` through the importmap. If you prefer a fully bundled file, drop the `--external` flags.

---

## Building

The site's normal build picks up the component automatically:

```bash
make -C assets_src build-other
# or the full site build:
./generate          # builds styles + model-viewer + out/ + experiments asset rewrite
```

Directly:

```bash
# component (used on the site)
bun build ./ascii-model-viewer/ascii-model-viewer.ts --outfile ./out/.assets/ascii-model-viewer.js --bundle --minify

# demo page (transpile only, keep CDN importmap)
bun build ./ascii-model-viewer/ascii-render.ts --outfile ./ascii-model-viewer/ascii-render.js --target browser --external three --external "three/addons/*"

# fully bundled demo (no CDN needed)
bun build ./ascii-model-viewer/ascii-render.ts --outfile ./ascii-model-viewer/ascii-render.bundle.js --target browser --bundle --minify
```

Type-check without emitting:

```bash
bunx tsc --noEmit --skipLibCheck ascii-model-viewer/ascii-model-viewer.ts ascii-model-viewer/ascii-render.ts
```

---

## Glyph details

* **Ramp text** — luminance → index into a character ramp (`simple` / `detailed` / `blocks`). One sample per character cell.
* **Braille** — each cell is a `U+2800` braille character encoding an 8-dot `2×4` mask; thresholded per-dot against the Bayer matrix. `2×4` samples per cell.
* **Octant** — same `2×4` mask as braille, but each glyph is a *filled block* from the Unicode 16 octant range (`U+1CD00–U+1CDE5`, `U+1FB00–U+1FBFF`, plus legacy quarter/half/full blocks). Shape comes from the dithered mask; **tone** comes from a real per-cell grayscale `fillStyle` averaged over the 8 sub-samples, quantized (`GRAY_STEP=4`) so adjacent cells with similar tone merge into one `fillText` run. Six of the 256 possible masks have no Unicode glyph and snap to blank/full.

Codepoint table is generated straight from `UnicodeData.txt` — blank (`U+0020`) and full block (`U+2588`) at the expected indices, with the six missing patterns snapped accordingly.

---

## File map

```
ascii-model-viewer/
├── README.md               # this file
├── ascii-model-viewer.ts   # <ascii-model-viewer> custom element (three.js + shadow DOM)
├── ascii-render.ts         # standalone full-page demo — TypeScript, CDN importmap
├── ascii-render.html       # shell for the demo (imports ascii-render.js)
└── ascii-render.js         # transpiled demo (generated — not checked in, build it)
```

Legacy paths (`assets_src/other/ascii-model-viewer.ts` and `experiments/ascii-render.html`) remain as thin shims that re-export / redirect to this directory so old links and the site build keep working.

---

## License

Same as the parent repo — see `LICENSE` at the repo root.
