import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "lil-gui";

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const gui = new dat.GUI();

const canvas = document.querySelector(
  "canvas#webgl-render"
) as HTMLCanvasElement;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(0.25, -0.25, 1);
scene.add(camera);

const textureLoader = new THREE.TextureLoader();

const geometry = new THREE.PlaneGeometry(1, 1, 32, 32);

const material = new THREE.MeshBasicMaterial();

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

window.addEventListener("resize", () => {
  sizes.height = window.innerHeight;
  sizes.width = window.innerWidth;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const tick = () => {
  controls.update();

  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();