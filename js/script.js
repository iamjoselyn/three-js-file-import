// var scene, camera, renderer;

// scene = new THREE.Scene();
// scene.background = new THREE.Color(0x5f5f0f);

// camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight);
// camera.position.set(0,100,1000);

// renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth/window.innerHeight);
// document.body.appendChild(renderer.domElement);

// function animate(){
//     requestAnimationFrame(animate);
//     renderer.render(scene,camera);
// }

// animate()


import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { OrbitControls } from "./OrbitControls";
import { GLTFLoader } from "./GLTFLoader";

var scene, camera, renderer;
var boy;
var gltf_loader = new GLTFLoader();

var model = "scene.gltf";

init();

function init() {
    const container = document.createElement("div");
    document.body.appendChild(container);

    camera = camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight);
    camera.position.set(0,100,1000);
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x5f5f0f);

    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;

    container.appendChild(renderer.domElement);

    //Load Model
    gltf_loader.load(model, function (gltf) {
        scene.add( gltf.scene )
    }) 


}

const scene = new THREE.Scene();