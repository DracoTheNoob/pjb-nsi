import * as THREE from '../three.module.js'
import { OrbitControls } from "https://unpkg.com/three@0.112/examples/jsm/controls/OrbitControls.js"

let width = window.innerWidth, height = window.innerHeight

function loadTexture(path) {
    const textureLoader = new THREE.TextureLoader()
    const texture = textureLoader.load(path)

    texture.wrapS = THREE.RepeatWrapping
    texture.repeat.x = -1

    return texture
}

function buildSphere(path) {
    const geometry = new THREE.SphereGeometry(10, 32, 32)
    const material = new THREE.MeshBasicMaterial({map: loadTexture(path), side: THREE.DoubleSide})
    const sphere = new THREE.Mesh(geometry, material)

    return sphere
}

function getControls(camera, renderer) {
    const controls = new OrbitControls(camera, renderer.domElement)

    controls.rotateSpeed = 0.3
    controls.enableZoom = false

    camera.position.set(-1, 0, 0)
    controls.update()

    return controls
}

function main() {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(80, width / height, 0.1, 1000)

    scene.add(buildSphere('src/img.jpg'))

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(width, height)
    const controls = getControls(camera, renderer)

    document.body.appendChild(renderer.domElement)

    function animate() {
        requestAnimationFrame(animate)
        controls.update()
        renderer.render(scene, camera)
    }

    function manageResize() {
        width = window.innerWidth
        height = window.innerHeight
    
        renderer.setSize(width, height)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
    }

    animate()
    window.addEventListener('resize', manageResize)
}


main()
