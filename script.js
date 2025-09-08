// Import Three.js și GLTFLoader direct din CDN
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.158/examples/jsm/loaders/GLTFLoader.js';

// Scene și cameră
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(800, 600);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Lumină
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5).normalize();
scene.add(light);

// Loader model GLB
const loader = new GLTFLoader();
loader.load('small_house.glb', function(gltf){
    const model = gltf.scene;
    model.scale.set(1,1,1);
    model.position.set(0,0,0);
    scene.add(model);

    // Animatie rotire automata
    function animate() {
        requestAnimationFrame(animate);
        model.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}, undefined, function(error){
    console.error(error);
});

// Camera
camera.position.z = 5;