import '@packages/tweaker'
import { en3 } from '../index'
import {
  ACESFilmicToneMapping,
  BoxGeometry,
  Color,
  DirectionalLight,
  HemisphereLight,
  Mesh,
  MeshStandardMaterial,
  PointLight,
  PointLightHelper,
  SpotLight,
} from 'three'
import { En3Helpers } from '../helpers/En3Helpers'

en3.setup({
  webGLRendererParameters: {},
})

en3.webglRenderer.toneMapping = ACESFilmicToneMapping
en3.webglRenderer.toneMappingExposure = 1.4

new En3Helpers()

const boxes: Array<Mesh<BoxGeometry, MeshStandardMaterial>> = []

for (let index = 0; index < 5; index++) {
  const geo = new BoxGeometry()
  const mat = new MeshStandardMaterial({ color: 'lightblue' })
  const mesh = new Mesh(geo, mat)
  mesh.name = `T.P.Objects.XXX-${index + 1}`
  mesh.scale.setScalar(200)
  mesh.position.z = 250 * index * -1
  mesh.position.x = 60 * index
  boxes.push(mesh)

  en3.view.add(mesh)
}

const hemi = new DirectionalLight()
hemi.name = 'T.P.Lights.Directional'
en3.view.add(hemi)

boxes.forEach((box) => {
  box.addEventListener('pointerEnter', (e) => {
    box.material.color = new Color('tomato')
  })

  box.addEventListener('pointerLeave', (e) => {
    box.material.color = new Color('lightblue')
  })
})
