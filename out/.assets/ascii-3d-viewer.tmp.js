import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

export class GlbModelViewer extends HTMLElement {
  container;
  hud;
  scene;
  camera;
  renderer;
  model;
  pivotGroup;
  animationId;
  isDragging = false;
  prevX = 0;
  prevY = 0;
  rotation;
  targetRotation;
  scaleFactor;
  targetScale;
  position;
  targetPosition;
  _wireframeOverlays;
  wireframeColor;
  wireframe = false;
  disableZoom = false;
  disablePan = false;
  disableRotate = false;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.container = document.createElement("div");
    this.container.style.position = "relative";
    this.shadowRoot.appendChild(this.container);
    this.hud = document.createElement("div");
    this.hud.style.position = "absolute";
    this.hud.style.top = "5px";
    this.hud.style.left = "5px";
    this.hud.style.padding = "4px 8px";
    this.hud.style.background = "rgba(0,0,0,0.6)";
    this.hud.style.color = "white";
    this.hud.style.font = "12px monospace";
    this.hud.style.borderRadius = "4px";
    this.container.appendChild(this.hud);
    this.rotation = new THREE.Quaternion;
    this.targetRotation = new THREE.Quaternion;
    this.scaleFactor = 1;
    this.targetScale = 1;
    this.position = new THREE.Vector3(0, 0, 0);
    this.targetPosition = new THREE.Vector3(0, 0, 0);
    this._wireframeOverlays = new Map;
    this.wireframeColor = new THREE.Color(16777215);
  }
  static get observedAttributes() {
    return [
      "scale",
      "pos",
      "rot",
      "disable-zoom",
      "disable-pan",
      "disable-rotate",
      "wireframe",
      "wireframe-color"
    ];
  }
  parseAttributes() {
    this.scaleFactor = parseFloat(this.getAttribute("scale") ?? "1") || 1;
    this.targetScale = this.scaleFactor;
    const posAttr = this.getAttribute("pos");
    if (posAttr) {
      const [x, y, z] = posAttr.split(",").map(Number);
      this.position.set(x || 0, y || 0, z || 0);
      this.targetPosition.copy(this.position);
    } else {
      this.position.set(0, 0, 0);
      this.targetPosition.set(0, 0, 0);
    }
    const rotAttr = this.getAttribute("rot");
    if (rotAttr) {
      const [rx, ry, rz] = rotAttr.split(",").map(Number);
      this.rotation.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(rx || 0), THREE.MathUtils.degToRad(ry || 0), THREE.MathUtils.degToRad(rz || 0), "XYZ"));
      this.targetRotation.copy(this.rotation);
    } else {
      this.rotation.identity();
      this.targetRotation.identity();
    }
    this.disableZoom = this.hasAttribute("disable-zoom");
    this.disablePan = this.hasAttribute("disable-pan");
    this.disableRotate = this.hasAttribute("disable-rotate");
    this.wireframe = this.hasAttribute("wireframe");
    const wfColorAttr = this.getAttribute("wireframe-color");
    if (wfColorAttr) {
      try {
        this.wireframeColor.set(wfColorAttr);
      } catch {}
    }
  }
  attributeChangedCallback(name, _oldValue, newValue) {
    if ((name === "wireframe" || name === "wireframe-color") && this.pivotGroup) {
      this.wireframe = this.hasAttribute("wireframe");
      if (name === "wireframe-color" && newValue) {
        try {
          this.wireframeColor.set(newValue || 16777215);
        } catch {}
      }
      this.updateWireframe();
    }
  }
  updateWireframe() {
    if (!this.pivotGroup)
      return;
    const color = this.wireframeColor;
    this.pivotGroup.traverse((obj) => {
      const mesh = obj;
      if (!mesh.isMesh)
        return;
      const existing = this._wireframeOverlays.get(mesh);
      if (this.wireframe) {
        if (!existing) {
          const wfGeo = new THREE.WireframeGeometry(mesh.geometry);
          const wfMat = new THREE.LineBasicMaterial({
            color: color.getHex(),
            depthTest: false
          });
          const wire = new THREE.LineSegments(wfGeo, wfMat);
          wire.renderOrder = (mesh.renderOrder || 0) + 1;
          wire.frustumCulled = false;
          mesh.add(wire);
          this._wireframeOverlays.set(mesh, { wire, geo: wfGeo, mat: wfMat });
        } else {
          existing.mat.color.copy(color);
          existing.wire.visible = true;
        }
      } else if (existing) {
        if (existing.wire.parent)
          existing.wire.parent.remove(existing.wire);
        existing.geo.dispose();
        existing.mat.dispose();
        this._wireframeOverlays.delete(mesh);
      }
    });
  }
  _disposeAllWireframes() {
    this._wireframeOverlays.forEach((ov) => {
      if (ov.wire.parent)
        ov.wire.parent.remove(ov.wire);
      ov.geo.dispose();
      ov.mat.dispose();
    });
    this._wireframeOverlays.clear();
  }
  connectedCallback() {
    this.parseAttributes();
    this.initScene();
    this.loadModel();
    this.addInteractions();
    this._animate();
  }
  disconnectedCallback() {
    if (this.animationId)
      cancelAnimationFrame(this.animationId);
    this._disposeAllWireframes();
    this.renderer.dispose();
  }
  initScene() {
    const width = this.clientWidth || 600;
    const height = this.clientHeight || 400;
    this.scene = new THREE.Scene;
    this.scene.background = new THREE.Color(1118481);
    const aspect = width / height;
    const zoom = 2;
    this.camera = new THREE.OrthographicCamera(-aspect * zoom, aspect * zoom, zoom, -zoom, 0.1, 100);
    this.camera.position.set(0, 0, 10);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(1118481, 1);
    this.container.appendChild(this.renderer.domElement);
    this.scene.add(new THREE.AmbientLight(16777215, 0.8));
    const dirLight = new THREE.DirectionalLight(16777215, 0.6);
    dirLight.position.set(5, 10, 7.5);
    this.scene.add(dirLight);
  }
  loadModel() {
    const src = this.getAttribute("src");
    if (!src)
      return;
    const loader = new GLTFLoader;
    const dracoLoader = new DRACOLoader;
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(dracoLoader);
    loader.load(src, (gltf) => {
      this.model = gltf.scene;
      const box = new THREE.Box3().setFromObject(this.model);
      const center = box.getCenter(new THREE.Vector3);
      this.model.position.sub(center);
      this.pivotGroup = new THREE.Group;
      this.pivotGroup.add(this.model);
      this.scene.add(this.pivotGroup);
      this.pivotGroup.setRotationFromQuaternion(this.rotation);
      this.pivotGroup.scale.setScalar(this.scaleFactor);
      this.pivotGroup.position.copy(this.position);
      this.updateWireframe();
    }, undefined, (error) => {
      console.error("Error loading GLB model:", error);
    });
  }
  addInteractions() {
    const canvas = this.renderer.domElement;
    canvas.addEventListener("mousedown", (e) => {
      this.isDragging = true;
      this.prevX = e.clientX;
      this.prevY = e.clientY;
      canvas.style.cursor = "grabbing";
    });
    window.addEventListener("mouseup", () => {
      this.isDragging = false;
      canvas.style.cursor = "grab";
    });
    canvas.addEventListener("mouseenter", () => {
      canvas.style.cursor = "grab";
    });
    canvas.addEventListener("mouseleave", () => {
      canvas.style.cursor = "default";
    });
    window.addEventListener("mousemove", (e) => {
      if (!this.isDragging || !this.pivotGroup)
        return;
      const dx = e.clientX - this.prevX;
      const dy = e.clientY - this.prevY;
      this.prevX = e.clientX;
      this.prevY = e.clientY;
      if (!this.disablePan && e.shiftKey) {
        const panSpeed = 0.003;
        this.targetPosition.x += dx * panSpeed;
        this.targetPosition.y -= dy * panSpeed;
      } else if (!this.disableRotate) {
        const rotateSpeed = 0.008;
        const deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(dy * rotateSpeed, dx * rotateSpeed, 0, "XYZ"));
        this.targetRotation.multiplyQuaternions(deltaRotationQuaternion, this.targetRotation);
      }
    });
    canvas.addEventListener("wheel", (e) => {
      if (this.disableZoom)
        return;
      e.preventDefault();
      const zoomSpeed = 0.1;
      const zoomDelta = e.deltaY > 0 ? -zoomSpeed : zoomSpeed;
      this.targetScale = Math.max(0.1, Math.min(5, this.targetScale * (1 + zoomDelta)));
    });
  }
  _animate() {
    this.animationId = requestAnimationFrame(() => this._animate());
    if (this.pivotGroup) {
      const lerpFactor = 0.1;
      this.rotation.slerp(this.targetRotation, lerpFactor);
      this.pivotGroup.setRotationFromQuaternion(this.rotation);
      this.scaleFactor = THREE.MathUtils.lerp(this.scaleFactor, this.targetScale, lerpFactor);
      this.pivotGroup.scale.setScalar(this.scaleFactor);
      this.position.lerp(this.targetPosition, lerpFactor);
      this.pivotGroup.position.copy(this.position);
    }
    this.renderer.render(this.scene, this.camera);
  }
  resetView() {
    this.parseAttributes();
    if (this.pivotGroup) {
      this.pivotGroup.setRotationFromQuaternion(this.rotation);
      this.pivotGroup.scale.setScalar(this.scaleFactor);
      this.pivotGroup.position.copy(this.position);
    }
  }
}
customElements.define("glb-model-viewer", GlbModelViewer);
