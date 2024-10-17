import * as THREE from '../../three.module.js'
import { OrbitControls } from "https://unpkg.com/three@0.112/examples/jsm/controls/OrbitControls.js"


const SENSITIVITY = 0.3
const ZOOM_ENABLED = false
const MOVEMENT_ENABLED = false
const FIELD_OF_VIEW = 80
const RENDER_DISTANCE = 20
const SPHERE_SIDES = 64


let width = window.innerWidth, height = window.innerHeight

function loadTexture(path) {
    const textureLoader = new THREE.TextureLoader()
    const texture = textureLoader.load(path)

    texture.wrapS = THREE.RepeatWrapping
    texture.repeat.x = -1

    return texture
}

function buildSphere(path) {
    const geometry = new THREE.SphereGeometry(10, SPHERE_SIDES, SPHERE_SIDES)
    const material = new THREE.MeshBasicMaterial({map: loadTexture(path), side: THREE.DoubleSide})
    const sphere = new THREE.Mesh(geometry, material)

    return sphere
}

function getControls(camera, renderer) {
    const controls = new OrbitControls(camera, renderer.domElement)

    controls.rotateSpeed = SENSITIVITY
    controls.enableZoom = ZOOM_ENABLED
    controls.enablePan = MOVEMENT_ENABLED

    camera.position.set(0.000001, 0, 0)
    controls.update()

    return controls
}

function display(path) {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(FIELD_OF_VIEW, width / height, 0.1, RENDER_DISTANCE)

    scene.add(buildSphere(path))

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


display('src/360/img.jpg')
