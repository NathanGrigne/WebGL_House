import './styles/main.styl'
import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Camera } from 'three'

/*
    Sizes
*/

const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight


/*
    Scene
*/

const scene = new THREE.Scene()

/*
    Camera
*/

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 20)
camera.position.z = 8
scene.add(camera)

/*
    House
*/

const houseGroup = new THREE.Group()
scene.add(houseGroup)

/*
    Walls
*/

const walls = new THREE.Mesh(
    new THREE.BoxGeometry(5, 2.5, 5),
    new THREE.MeshBasicMaterial({ color: 0xffcc99 })
)
houseGroup.add(walls)

/*
    Door
*/

const door = new THREE.Mesh(
    new THREE.BoxGeometry(1, 2, 0.2),
    new THREE.MeshBasicMaterial({ color: 0x6e3300 })
)
houseGroup.add(door)
door.position.z = 2.5
door.position.y = -0.25

/*
    Ground
*/

const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20, 0.1),
    new THREE.MeshBasicMaterial({ color: 0x7EC850 })
)
houseGroup.add(ground)
ground.rotation.x = - 1.57
ground.position.y = - 1.1

/*
    Roof
*/

const roof = new THREE.Mesh(
    new THREE.ConeGeometry(4, 3, 4),
    new THREE.MeshBasicMaterial({ color: 0xdc5539 })
)
houseGroup.add(roof)
roof.position.y = 2.8
roof.rotation.y = 0.8
/*
    Renderer
*/

const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

/*
    Camera Controls
*/

const cameraControls = new OrbitControls(camera, renderer.domElement)
cameraControls.zoomSpeed = 0.3
cameraControls.enableDamping = true


/*
    Resize
*/

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
})

/*
    Animation
*/

const animate = () => {
    requestAnimationFrame(animate)

    renderer.render(scene, camera)

    /*
        Camera Controls
    */
   
    cameraControls.update()

    camera.lookAt(scene.position)
}

animate()