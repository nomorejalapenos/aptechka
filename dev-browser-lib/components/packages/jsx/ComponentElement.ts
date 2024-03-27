import { ElementConstructor } from '@packages/element-constructor'

export interface ComponentElementParameters {
  tag: Function
  attributes: null | { [key: string]: any }
  children: any[]
}

export type ComponentCreateCallback<T = void> = (e: ComponentElement) => T
export type ComponentConnectCallback = (
  e: ComponentElement
) => void | (() => void)
export type ComponentDisconnectCallback = (e: ComponentElement) => void

export let currentComponentElement: ComponentElement = null!

export const nextComponentAttributes: { value: { [key: string]: any } | null } =
  {
    value: null,
  }

export let contextStack: Array<Map<string, any>> = []

export class ComponentElement extends HTMLElement {
  #connectCallbacks: Set<ComponentConnectCallback> = new Set()
  #disconnectCallbacks: Set<ComponentDisconnectCallback> = new Set()
  #contextMap: Map<string, any> = new Map()

  constructor(parameters?: ComponentElementParameters) {
    super()

    currentComponentElement = this

    contextStack.push(this.#contextMap)

    const res = parameters?.tag({
      ...parameters.attributes,
      children: parameters.children,
    })

    new ElementConstructor(this, {
      children: res,
      ...nextComponentAttributes.value,
    })

    currentComponentElement = null!
    nextComponentAttributes.value = null

    contextStack = contextStack.filter((cs) => cs !== this.#contextMap)

    this.addEventListener('beforeChildrenChange', (e) => {
      contextStack.push(this.#contextMap)
    })

    this.addEventListener('afterChildrenChange', (e) => {
      contextStack = contextStack.filter((cs) => cs !== this.#contextMap)
    })
  }

  public addConnectCallback(callback: ComponentConnectCallback) {
    this.#connectCallbacks.add(callback)
  }

  public addDisconnectCallback(callback: ComponentConnectCallback) {
    this.#disconnectCallbacks.add(callback)
  }

  public createContext(name: string, value: any) {
    this.#contextMap.set(name, value)
  }

  protected connectedCallback() {
    currentComponentElement = this

    this.#connectCallbacks.forEach((callback) => {
      const disconnectCallback = callback(this)

      if (disconnectCallback) {
        this.#disconnectCallbacks.add(disconnectCallback)
      }
    })

    currentComponentElement = null!
  }

  protected disconnectedCallback() {
    this.#disconnectCallbacks.forEach((callback) => {
      callback(this)
    })
  }
}
