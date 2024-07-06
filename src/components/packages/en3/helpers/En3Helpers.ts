import { en3 } from '../core/en3'
import { En3Object3dManager } from './En3Object3dManager'
import { En3OrbitControls } from './En3OrbitControls'
import { En3GridHelper } from './En3GridHelper'
import { En3TransformControls } from './En3TransformControls'
import { En3ParametersManager } from './En3ParametersManager'

export class En3Helpers {
  #rendererManager: En3ParametersManager
  #gridHelper: En3GridHelper
  #cameraManager: En3Object3dManager
  #orbitControls: En3OrbitControls
  #transformControls: En3TransformControls

  constructor() {
    this.#rendererManager = new En3ParametersManager(en3.webglRenderer)
    this.#gridHelper = new En3GridHelper()
    this.#cameraManager = new En3Object3dManager(en3.camera)

    this.#orbitControls = new En3OrbitControls()

    this.#orbitControls.controls.addEventListener('change', () => {
      this.#cameraManager.save()
    })

    this.#transformControls = new En3TransformControls()

    this.#transformControls.controls.addEventListener(
      'dragging-changed',
      (e) => {
        this.#orbitControls.controls.enabled = !e.value
      }
    )
  }

  public destroy() {
    this.#rendererManager.destroy()
    this.#gridHelper.destroy()
    this.#cameraManager.destroy()
    this.#orbitControls.destroy()
    this.#transformControls.destroy()
  }
}
