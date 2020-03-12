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

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 60)
camera.position.z = 12
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
    new THREE.BoxGeometry(1, 2, 0.1),
    new THREE.MeshBasicMaterial({ color: 0x6e3300 })
)
houseGroup.add(door)
door.position.z = 2.55
door.position.y = -0.25

/*
    Ground
*/

const ground = new THREE.Mesh(
    new THREE.SphereGeometry(25, 80, 80, 0, Math.PI),
    new THREE.MeshBasicMaterial({ color: 0x7EC850 })
)

houseGroup.add(ground)
ground.rotation.x = - 1.57
ground.position.y = - 26

/*
    Roof
*/

const roof = new THREE.Mesh(
    new THREE.ConeGeometry(4, 3, 4),
    new THREE.MeshBasicMaterial({ color: 0xdc5539 })
)
houseGroup.add(roof)
roof.position.y = 2.75
roof.rotation.y = 0.8

/*
    FirePlace
*/

const firePlaceGroup = new THREE.Group()

const firePlace = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 1, 0.5),
    new THREE.MeshBasicMaterial({ color: 0xffc99d })
)

const smoke = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 6, 6),
    new THREE.MeshBasicMaterial({ color: 0x9C9C9C })
)
firePlaceGroup.add(smoke)
smoke.position.y = 1

/*
    Smoke
*/

const smoke2 = new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.17, 1),
    new THREE.MeshBasicMaterial({ color: 0xC4C4C4 })
)
firePlaceGroup.add(smoke2)
smoke2.position.y = 1.5
smoke2.position.z = -0.25
smoke2.position.x = -0.3

const smoke3 = new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.15, 1),
    new THREE.MeshBasicMaterial({ color: 0xCECECE })
)
firePlaceGroup.add(smoke3)
smoke3.position.y = 2
smoke3.position.z = -0.4
smoke3.position.x = -0.45

firePlaceGroup.add(firePlace)
firePlaceGroup.position.x = - 1.8
firePlaceGroup.position.y = 2.55
firePlaceGroup.position.z = 1

houseGroup.add(firePlaceGroup)

/*
    bush
*/

const bush = new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.4, 1),
    new THREE.MeshBasicMaterial({ color: 0x6C8958 })
)
houseGroup.add(bush)
bush.position.z = 3
bush.position.y = -1
bush.position.x = 1

const bush2 = new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.4, 1),
    new THREE.MeshBasicMaterial({ color: 0x6C8958 })
)
houseGroup.add(bush2)
bush2.position.z = 3
bush2.position.y = -1
bush2.position.x = -1

/*
    Tree
*/

const treeGroup = new THREE.Group()

const trunk = new THREE.Mesh(
    new THREE.ConeGeometry(0.5, 1.5, 20),
    new THREE.MeshBasicMaterial({ color: 0x6e3300 })
)
treeGroup.add(trunk)

const leaves = new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.6, 1),
    new THREE.MeshBasicMaterial({ color: 0x6C8958 })
)
treeGroup.add(leaves)
leaves.position.y = 0.8

houseGroup.add(treeGroup)
treeGroup.position.z = 2.7
treeGroup.position.y = - 0.8
treeGroup.position.x = 3.7
treeGroup.rotation.z = - 0.12
treeGroup.rotation.x = 0.12

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