// Importuri ES Modules cu URL complet (browser-friendly)
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.158/examples/jsm/loaders/GLTFLoader.js';

// Scena și camera
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeef);

const camera = new THREE.PerspectiveCamera(75, 800/600, 0.1, 1000);
camera.position.set(0, 1.5, 5);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(800, 600);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Lumini
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Loader GLB
const loader = new GLTFLoader();
loader.load(
  './small_house.glb', // Referință relativă corectă cu ./
  function(gltf) {
    const model = gltf.scene;
    model.scale.set(1, 1, 1);
    scene.add(model);

    function animate() {
      requestAnimationFrame(animate);
      model.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  },
  undefined,
  function(error) {
    console.error('Eroare la încărcare GLB:', error);
  }
);