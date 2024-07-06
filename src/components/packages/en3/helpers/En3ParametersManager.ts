import {
  Store,
  StoreManagers,
  StoreNumberManager,
  StoreSelectManager,
} from '@packages/store'
import * as THREE from 'three'
import { en3 } from '../core/en3'
import { traverseMaterials } from '../utils'

const blendingEquations = [
  'AddEquation',
  'SubtractEquation',
  'ReverseSubtractEquation',
  'MinEquation',
  'MaxEquation',
]

const sourceFactors = [
  'ZeroFactor',
  'OneFactor',
  'SrcColorFactor',
  'OneMinusSrcColorFactor',
  'SrcAlphaFactor',
  'OneMinusSrcAlphaFactor',
  'DstAlphaFactor',
  'OneMinusDstAlphaFactor',
  'DstColorFactor',
  'OneMinusDstColorFactor',
  'SrcAlphaSaturateFactor',
  'ConstantColorFactor',
  'OneMinusConstantColorFactor',
  'ConstantAlphaFactor',
  'OneMinusConstantAlphaFactor',
]

const destinationFactors = [...sourceFactors, 'SrcAlphaSaturateFactor']

const blendingModes = [
  'NoBlending',
  'NormalBlending',
  'AdditiveBlending',
  'SubtractiveBlending',
  'MultiplyBlending',
  'CustomBlending',
]

const depthModes = [
  'NeverDepth',
  'AlwaysDepth',
  'EqualDepth',
  'LessDepth',
  'LessEqualDepth ',
  'GreaterEqualDepth ',
  'GreaterDepth',
  'NotEqualDepth',
]

const stencilFunctions = [
  'NeverStencilFunc',
  'LessStencilFunc',
  'EqualStencilFunc',
  'LessEqualStencilFunc ',
  'GreaterStencilFunc',
  'NotEqualStencilFunc ',
  'GreaterEqualStencilFunc',
  'AlwaysStencilFunc',
]

const stencilOperations = [
  'ZeroStencilOp',
  'KeepStencilOp',
  'ReplaceStencilOp',
  'IncrementStencilOp',
  'DecrementStencilOp',
  'IncrementWrapStencilOp',
  'DecrementWrapStencilOp',
  'InvertStencilOp',
]

const sides = ['FrontSide', 'BackSide', 'DoubleSide']

const normalmapTypes = ['TangentSpaceNormalMap', 'ObjectSpaceNormalMap']

const wireframeLinejoinTypes = ['round', 'bevel', 'miter']

const toneMappingTypes = [
  'NoToneMapping',
  'LinearToneMapping',
  'ReinhardToneMapping',
  'CineonToneMapping',
  'ACESFilmicToneMapping',
  'AgXToneMapping',
  'NeutralToneMapping',
  'CustomToneMapping',
]

const shadowMapTypes = [
  'BasicShadowMap',
  'PCFShadowMap',
  'PCFSoftShadowMap',
  'VSMShadowMap',
]

const managerOptions: { [key: string]: StoreManagers[keyof StoreManagers] } = {
  intensity: {
    type: 'number',
    min: 0,
    max: 20,
    step: 0.0001,
  },
  renderOrder: {
    type: 'number',
    step: 1,
  },
  alphaTest: {
    type: 'number',
    min: 0,
    max: 1,
    step: 0.001,
  },
  blendAlpha: {
    type: 'number',
    min: 0,
    max: 1,
    step: 0.001,
  },
  blendDst: {
    type: 'select',
    variants: destinationFactors,
  },
  blendDstAlpha: {
    type: 'number',
    min: 0,
    max: 1,
    step: 0.001,
  },
  blendEquation: {
    type: 'select',
    variants: blendingEquations,
  },
  blendEquationAlpha: {
    type: 'number',
    min: 0,
    max: 1,
    step: 0.001,
  },
  blending: {
    type: 'select',
    variants: blendingModes,
  },
  blendSrc: {
    type: 'select',
    variants: sourceFactors,
  },
  blendSrcAlpha: {
    type: 'number',
    min: 0,
    max: 1,
    step: 0.001,
  },
  depthFunc: {
    type: 'select',
    variants: depthModes,
  },
  stencilFunc: {
    type: 'select',
    variants: stencilFunctions,
  },
  stencilRef: {
    type: 'number',
    min: 0,
    step: 1,
  },
  stencilFail: {
    type: 'select',
    variants: stencilOperations,
  },
  stencilZFail: {
    type: 'select',
    variants: stencilOperations,
  },
  stencilZPass: {
    type: 'select',
    variants: stencilOperations,
  },
  opacity: {
    type: 'number',
    min: 0,
    max: 1,
    step: 0.0001,
  },
  side: {
    type: 'select',
    variants: sides,
  },
  roughness: {
    type: 'number',
    min: 0,
    max: 1,
    step: 0.0001,
  },
  metalness: {
    type: 'number',
    min: 0,
    max: 1,
    step: 0.0001,
  },
  lightMapIntensity: {
    type: 'number',
    min: 0,
    max: 20,
    step: 0.0001,
  },
  aoMapIntensity: {
    type: 'number',
    min: 0,
    max: 20,
    step: 0.0001,
  },
  bumpScale: {
    type: 'number',
    min: 0,
    step: 0.0001,
  },
  normalMapType: {
    type: 'select',
    variants: normalmapTypes,
  },
  wireframeLinejoin: {
    type: 'select',
    variants: wireframeLinejoinTypes,
  },
  envMapIntensity: {
    type: 'number',
    min: 0,
    max: 20,
    step: 0.0001,
  },
  emissiveIntensity: {
    type: 'number',
    min: 0,
    max: 20,
    step: 0.0001,
  },
  fov: {
    type: 'number',
    min: 0,
    max: 180,
    step: 1,
  },
  zoom: {
    type: 'number',
    min: 0,
    step: 0.0001,
  },
  near: {
    type: 'number',
    min: 0,
    step: 0.0001,
  },
  far: {
    type: 'number',
    min: 0,
    step: 1,
  },
  filmGauge: {
    type: 'number',
    min: 0,
    step: 0.0001,
  },
  filmOffset: {
    type: 'number',
    min: 0,
    step: 0.0001,
  },
  distance: {
    type: 'number',
    min: 0,
    step: 0.1,
  },
  decay: {
    type: 'number',
    min: 0,
    step: 0.00001,
    ease: 0.001,
  },
  focus: {
    type: 'number',
    min: 0,
    max: 1,
    step: 0.00001,
  },
  bias: {
    type: 'number',
    min: 0,
    max: 0.01,
    step: 0.000001,
    ease: 0.01,
  },
  blurSamples: {
    type: 'number',
    min: 0,
    step: 1,
  },
  normalBias: {
    type: 'number',
    min: 0,
    step: 0.001,
    ease: 0.01,
  },
  radius: {
    type: 'number',
    min: 0,
    step: 0.001,
    ease: 0.01,
  },
  penumbra: {
    type: 'number',
    min: 0,
    max: 1,
    step: 0.000001,
  },
  power: {
    type: 'number',
    min: 0,
    step: 0.001,
    ease: 0.01,
  },
  angle: {
    type: 'number',
    min: 0,
    step: 0.000001,
    ease: 0.001,
  },
  toneMapping: {
    type: 'select',
    variants: toneMappingTypes,
  },
  toneMappingExposure: {
    type: 'number',
    min: 0,
    step: 0.001,
    ease: 0.1,
  },
  mapSize: {
    type: 'number',
    min: 0,
    step: 1,
  },
}

const shadowMapManagerOptions: {
  [key: string]: StoreManagers[keyof StoreManagers]
} = {
  type: {
    type: 'select',
    variants: shadowMapTypes,
  },
}

const skipKeys = new Set([
  'stencilFuncMask',
  'needsUpdate',
  'version',
  'wireframeLinewidth',
  'position',
  'scale',
  'rotation',
  'coordinateSystem',
  'aspect',
  'autoUpdate',
  'up',
])

export class En3ParametersManager {
  #subject: any

  #managers: Array<Store<any, any, any>> = []

  constructor(subject: any) {
    this.#subject = subject

    if (this.#subject instanceof THREE.Object3D) {
      this.#manage(
        this.#subject,
        `${this.#subject.name}.Parameters`,
        managerOptions,
        this.#subject instanceof THREE.Camera
          ? () => {
              en3.view.resize()
            }
          : undefined
      )

      if (this.#subject instanceof THREE.Mesh) {
        const material = this.#subject.material

        if (material instanceof THREE.Material) {
          this.#manage(
            material,
            `${this.#subject.name}.Parameters.Material`,
            managerOptions,
            () => {
              material.needsUpdate = true
            }
          )
        }
      } else if (this.#subject instanceof THREE.Light) {
        const shadow = this.#subject.shadow

        if (shadow) {
          this.#manage(
            shadow,
            `${this.#subject.name}.Parameters.Shadow`,
            managerOptions,
            () => {
              shadow.needsUpdate = true
            }
          )

          const camera = shadow.camera

          if (camera) {
            this.#manage(
              camera,
              `${this.#subject.name}.Parameters.Shadow.Camera`,
              managerOptions,
              () => {
                shadow.camera.updateProjectionMatrix()
              }
            )
          }
        }
      }
    } else if (this.#subject instanceof THREE.WebGLRenderer) {
      const renderer = this.#subject

      this.#manage(renderer, `Renderer`, managerOptions)

      this.#manage(
        renderer.shadowMap,
        `Renderer.shadowMap`,
        shadowMapManagerOptions,
        () => {
          renderer.shadowMap.needsUpdate = true

          traverseMaterials(en3.scene, (material) => {
            material.needsUpdate = true
          })
        }
      )
    }
  }

  public destroy() {
    this.#managers.forEach((manager) => {
      manager.close()
    })
  }

  #manage(
    subject: any,
    folderKey: string,
    options: any,
    afterChange?: () => void
  ) {
    for (const key in subject) {
      if (key.startsWith('_') || skipKeys.has(key)) {
        continue
      }

      const value = subject[key]

      const name = `${folderKey}.${key}`

      const foundedManagerOptions = options[key as keyof typeof options]

      if (typeof value === 'number') {
        if (foundedManagerOptions?.type === 'select') {
          this.#createSelectManager(
            name,
            value,
            subject,
            key,
            foundedManagerOptions,
            afterChange
          )
        } else {
          this.#createNumberManager(
            name,
            value,
            subject,
            key,
            foundedManagerOptions,
            afterChange
          )
        }
      } else if (
        value instanceof THREE.Vector2 ||
        value instanceof THREE.Vector3
      ) {
        this.#createVectorManager(
          name,
          value,
          subject,
          key,
          foundedManagerOptions,
          afterChange
        )
      } else if (
        typeof value === 'boolean' &&
        !key.startsWith('is') &&
        !key.startsWith('matrix')
      ) {
        this.#createBooleanManager(name, value, subject, key, afterChange)
      } else if (value instanceof THREE.Color) {
        this.#createColorManager(name, value, subject, key, afterChange)
      } else if (foundedManagerOptions) {
        if (foundedManagerOptions?.type === 'select') {
          this.#createSelectManager(
            name,
            value,
            subject,
            key,
            foundedManagerOptions,
            afterChange
          )
        }
      }
    }
  }

  #createNumberManager(
    name: string,
    initialValue: any,
    subject: any,
    key: string,
    foundedManagerOptions?: (typeof managerOptions)[keyof typeof managerOptions],
    afterChange?: () => void
  ) {
    const manager = new Store(initialValue, {
      passport: {
        name,
        manager: {
          type: 'number',
          ...foundedManagerOptions,
        },
      },
    })

    manager.subscribe((e) => {
      subject[key] = e.current
      afterChange?.()
    })

    this.#managers.push(manager)
  }

  #createVectorManager(
    name: string,
    initialValue: THREE.Vector2 | THREE.Vector3,
    subject: any,
    key: string,
    foundedManagerOptions?: (typeof managerOptions)[keyof typeof managerOptions],
    afterChange?: () => void
  ) {
    const vectorToArray = (value: THREE.Vector2 | THREE.Vector3) => {
      const arr = [value.x, value.y]

      if (value instanceof THREE.Vector3) {
        arr.push(value.z)
      }

      return arr
    }

    const manager = new Store(vectorToArray(initialValue), {
      passport: {
        name,
        manager: {
          type: 'number',
          ...foundedManagerOptions,
        },
      },
    })

    manager.subscribe((e) => {
      ;(subject[key] as any).set(...e.current)
      afterChange?.()
    })

    this.#managers.push(manager)
  }

  #createBooleanManager(
    name: string,
    initialValue: boolean,
    subject: any,
    key: string,
    afterChange?: () => void
  ) {
    const manager = new Store(initialValue, {
      passport: {
        name,
        manager: {
          type: 'boolean',
        },
      },
    })

    manager.subscribe((e) => {
      subject[key] = e.current
      afterChange?.()
    })

    this.#managers.push(manager)
  }

  #createColorManager(
    name: string,
    initialValue: THREE.Color,
    subject: any,
    key: string,
    afterChange?: () => void
  ) {
    const manager = new Store(`#${initialValue.getHexString()}`, {
      passport: {
        name,
        manager: {
          type: 'color',
        },
      },
    })

    manager.subscribe((e) => {
      subject[key] = new THREE.Color(e.current)
      afterChange?.()
    })

    this.#managers.push(manager)
  }

  #createSelectManager(
    name: string,
    initialValue: any,
    subject: any,
    key: string,
    foundedManagerOptions: StoreSelectManager,
    afterChange?: () => void
  ) {
    const variants = foundedManagerOptions.variants

    let initialVariant = null

    for (const key of variants) {
      if (initialValue === THREE[key as keyof typeof THREE]) {
        initialVariant = key
      }
    }

    const manager = new Store(initialVariant || initialValue, {
      passport: {
        name,
        manager: {
          ...foundedManagerOptions,
        },
      },
    })

    manager.subscribe((e) => {
      if (typeof e.current === 'string') {
        if (e.current[0] === e.current[0].toUpperCase()) {
          subject[key] = THREE[e.current as keyof typeof THREE]
        } else {
          subject[key] = e.current
        }
      }
      afterChange?.()
    })

    this.#managers.push(manager)
  }
}