import * as THREE from "three";
console.log(THREE)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearAlpha(0)
const scene = new THREE.Scene()
const mesh = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(mesh, material)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
scene.add(cube)
let p = 0

requestAnimationFrame(tick)
function tick() {
    console.log(p)
    p += 0.01
    cube.position.x = Math.sin(p)
    cube.position.y = Math.cos(p)
    cube.rotation.x = Math.sin(p)
    cube.rotation.y = Math.cos(p)
    renderer.render(scene, camera)
    requestAnimationFrame(tick)


}
