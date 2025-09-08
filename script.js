import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.158/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, 600);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Lumină
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5,5,5).normalize();
scene.add(light);

// Încarcă modelul GLB
const loader = new GLTFLoader();
loader.load('small_house.glb', function(gltf){
    const model = gltf.scene;
    model.scale.set(1,1,1); // ajustează dimensiunea dacă e nevoie
    model.position.set(0,0,0);
    scene.add(model);
}, undefined, function(error){
    console.error(error);
});

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();