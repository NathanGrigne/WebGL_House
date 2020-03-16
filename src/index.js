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
scene.background = new THREE.Color(0xFFAA88)

/*
    Camera
*/

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 60)
camera.position.z = 20
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
    new THREE.BoxGeometry(1, 2, 0.05),
    new THREE.MeshBasicMaterial({ color: 0x6e3300 })
)
houseGroup.add(door)
door.position.z = 2.5
door.position.y = -0.25

/*
    Garage
*/

const garageGroup = new THREE.Group()
houseGroup.add(garageGroup)
garageGroup.position.x = - 3.8
garageGroup.position.y = - 0.5
garageGroup.rotation.z = 0.15

const garage = new THREE.Mesh(
    new THREE.BoxGeometry(3, 2.5, 4),
    new THREE.MeshBasicMaterial({ color: 0xffcc99 })
)
garageGroup.add(garage)

const roofGarage = new THREE.Mesh(
    new THREE.ConeGeometry(3.3, 2.5, 4),
    new THREE.MeshBasicMaterial({ color: 0xdc5539 })
)
garageGroup.add(roofGarage)
roofGarage.rotation.y = Math.PI * 0.25
roofGarage.position.y = 2.5
roofGarage.position.x = 0.6

const doorGarage = new THREE.Mesh(
    new THREE.BoxGeometry(2.3, 2, 0.05),
    new THREE.MeshBasicMaterial({ color: 0x9C9C9C })
)
garageGroup.add(doorGarage)
doorGarage.position.z = 2

/*
    Ground
*/
const ground = new THREE.Mesh(
    new THREE.SphereGeometry(25, 80, 80, 0, Math.PI * 2, 0, 0.6),
    new THREE.MeshBasicMaterial({ color: 0x7EC850 })
)

houseGroup.add(ground)
ground.rotation.x = Math.PI * 2
ground.position.y = - 26

/*
    Path to House
*/

const path = new THREE.Mesh(
    new THREE.SphereGeometry(25, 7, 32, 0, 0.3, 0, 0.6),
    new THREE.MeshBasicMaterial({ color: 0xbbacac })
)

houseGroup.add(path)
path.position.y = - 25.99
path.rotation.y = Math.PI * 0.45

/*
    Roof
*/

const roof = new THREE.Mesh(
    new THREE.ConeGeometry(4, 3, 4),
    new THREE.MeshBasicMaterial({ color: 0xdc5539 })
)
houseGroup.add(roof)
roof.position.y = 2.75
roof.rotation.y = Math.PI * 0.25

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

/*
    Smoke
*/

const smoke2 = new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.17, 1),
    new THREE.MeshBasicMaterial({ color: 0xC4C4C4 })
)
firePlaceGroup.add(smoke2)
smoke2.position.z = -0.25
smoke2.position.x = -0.3

const smoke3 = new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.15, 1),
    new THREE.MeshBasicMaterial({ color: 0xCECECE })
)
firePlaceGroup.add(smoke3)
smoke3.position.z = -0.4
smoke3.position.x = -0.45

firePlaceGroup.add(firePlace)
firePlaceGroup.position.x = - 1.8
firePlaceGroup.position.y = 2.55
firePlaceGroup.position.z = 1

houseGroup.add(firePlaceGroup)

/*
    Animate smoke
*/

const animateSmoke = () => {
    requestAnimationFrame(animateSmoke)
    smoke.position.y = Math.abs(Math.sin(Date.now() * 0.001)) + 0.3
    smoke2.position.y = Math.abs(Math.sin(Date.now() * 0.001)) + 0.8
    smoke3.position.y = Math.abs(Math.sin(Date.now() * 0.001)) + 1.3
}

animateSmoke()

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
    Fence
*/

const fence = new THREE.Group()

const fencePole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 0.8, 20, 1),
    new THREE.MeshBasicMaterial({ color: 0x582900})
)
scene.add(fence)
fence.position.x = 14
fence.position.y = - 4.9
fence.rotation.z = - Math.PI * 0.1
fence.add(fencePole)
fencePole.position.z = - 1

const fencePole2 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 0.8, 20, 1),
    new THREE.MeshBasicMaterial({ color: 0x582900})
)
fence.add(fencePole2)
fencePole2.position.z = 1

const fencePoleHorizontal = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 2, 20, 1),
    new THREE.MeshBasicMaterial({ color: 0x582900})
)
fence.add(fencePoleHorizontal)
fencePoleHorizontal.rotation.x = Math.PI * 0.5
fencePoleHorizontal.position.y = 0.2

const fencePoleHorizontal2 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 2, 20, 1),
    new THREE.MeshBasicMaterial({ color: 0x582900})
)

fence.add(fencePoleHorizontal2)
fencePoleHorizontal2.rotation.x = Math.PI * 0.5
fencePoleHorizontal2.position.y = - 0.1

/*
    Fence 2
*/

const fence2 = new THREE.Group()

scene.add(fence2)
fence2.position.x = 13.9
fence2.position.z = 2
fence2.position.y = - 4.9
fence2.rotation.z = - Math.PI * 0.1
fence2.rotation.y = - Math.PI * 0.04

const fencePole4 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 0.8, 20, 1),
    new THREE.MeshBasicMaterial({ color: 0x582900})
)
fence2.add(fencePole4)
fencePole4.position.z = 1

const fencePoleHorizontal3 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 2, 20, 1),
    new THREE.MeshBasicMaterial({ color: 0x582900})
)
fence2.add(fencePoleHorizontal3)
fencePoleHorizontal3.rotation.x = Math.PI * 0.5
fencePoleHorizontal3.position.y = 0.2

const fencePoleHorizontal4 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 2, 20, 1),
    new THREE.MeshBasicMaterial({ color: 0x582900})
)

fence2.add(fencePoleHorizontal4)
fencePoleHorizontal4.rotation.x = Math.PI * 0.5
fencePoleHorizontal4.position.y = - 0.1

/*
    Fence 3
*/

const fence3 = new THREE.Group()

scene.add(fence3)
fence3.position.x = 13.5
fence3.position.z = 4
fence3.position.y = - 4.9
fence3.rotation.z = - Math.PI * 0.1
fence3.rotation.y = - Math.PI * 0.08

const fencePole6 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 0.8, 20, 1),
    new THREE.MeshBasicMaterial({ color: 0x582900})
)
fence3.add(fencePole6)
fencePole6.position.z = 1

const fencePoleHorizontal5 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 2, 20, 1),
    new THREE.MeshBasicMaterial({ color: 0x582900})
)
fence3.add(fencePoleHorizontal5)
fencePoleHorizontal5.rotation.x = Math.PI * 0.5
fencePoleHorizontal5.position.y = 0.2

const fencePoleHorizontal6 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 2, 20, 1),
    new THREE.MeshBasicMaterial({ color: 0x582900})
)

fence3.add(fencePoleHorizontal6)
fencePoleHorizontal6.rotation.x = Math.PI * 0.5
fencePoleHorizontal6.position.y = - 0.1

/*
    Fence 4
*/

const fence4 = new THREE.Group()

scene.add(fence4)
fence4.position.x = 12.8
fence4.position.z = 5.9
fence4.position.y = - 4.9
fence4.rotation.z = - Math.PI * 0.1
fence4.rotation.y = - Math.PI * 0.13

const fencePole8 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 0.8, 20, 1),
    new THREE.MeshBasicMaterial({ color: 0x582900})
)
fence4.add(fencePole8)
fencePole8.position.z = 1

const fencePoleHorizontal7 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 2, 20, 1),
    new THREE.MeshBasicMaterial({ color: 0x582900})
)
fence4.add(fencePoleHorizontal7)
fencePoleHorizontal7.rotation.x = Math.PI * 0.5
fencePoleHorizontal7.position.y = 0.2

const fencePoleHorizontal8 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 2, 20, 1),
    new THREE.MeshBasicMaterial({ color: 0x582900})
)

fence4.add(fencePoleHorizontal8)
fencePoleHorizontal8.rotation.x = Math.PI * 0.5
fencePoleHorizontal8.position.y = - 0.1


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