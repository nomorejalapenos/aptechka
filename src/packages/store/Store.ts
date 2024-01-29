import { storeRegistry } from './StoreRegistry'

export interface StoreEntry<StoreType> {
  current: StoreType
  previous: StoreType | undefined
}

export type StoreCallback<Entry extends StoreEntry<any>> = (entry: Entry) => void

export type StoreEqualityCheckCallback<StoreType> = (
  currentValue: StoreType,
  newValue: StoreType
) => boolean
export type StoreValidateCallback<StoreType> = (value: StoreType) => StoreType

export interface StorePassport {
  name: string
  description?: string
}

export interface StoreOptions<StoreType> {
  equalityCheck?: StoreEqualityCheckCallback<StoreType>
  passport?: StorePassport
  validate?: StoreValidateCallback<StoreType>
}

export class Store<
  StoreType = unknown,
  Entry extends StoreEntry<StoreType> = StoreEntry<StoreType>
> {
  #passport: StorePassport | undefined
  #initial: StoreType
  #previous: StoreType | undefined
  #current: StoreType
  #equalityCheck: StoreEqualityCheckCallback<StoreType>
  #callbacks = new Set<StoreCallback<Entry>>()
  #validate: StoreValidateCallback<StoreType>

  constructor(value: StoreType, options?: StoreOptions<StoreType>) {
    this.#passport = options?.passport
    this.#initial = value
    this.#previous = undefined

    this.#current = value

    this.#equalityCheck =
      options?.equalityCheck || ((currentValue, newValue) => currentValue === newValue)

    this.#validate = options?.validate || ((value) => value)

    if (this.#passport) {
      storeRegistry.updateStore(this)
    }
  }

  public get passport() {
    return this.#passport
  }

  public get initial() {
    return this.#initial
  }

  public get previous() {
    return this.#previous
  }

  public get current() {
    return this.#current
  }

  public set current(value: StoreType) {
    if (!this.#equalityCheck(this.#current, value)) {
      this.#previous = this.#current
      this.#current = this.#validate(value)
      this.#notify()
    }
  }

  public get subscribers() {
    return this.#callbacks
  }

  public get entry() {
    return {
      current: this.#current,
      previous: this.#previous,
    } as Entry
  }

  public subscribe(callback: StoreCallback<Entry>) {
    if (this.#passport && !this.#callbacks.size) {
      shareStore(this)
    }

    this.#callbacks.add(callback)

    callback(this.entry)

    return () => {
      this.unsubscribe(callback)
    }
  }

  public unsubscribe(callback: StoreCallback<Entry>) {
    this.#callbacks.delete(callback)

    if (this.#passport && !this.#callbacks.size) {
      unshareStore(this)
    }
  }

  public reset() {
    this.current = this.initial
  }

  public close() {
    this.#callbacks.clear()

    if (this.#passport) {
      unshareStore(this)
    }
  }

  #notify() {
    for (const callback of this.#callbacks) {
      callback(this.entry)
    }
  }
}

export const activeStores = new Store<Array<Store<any, any>>>([])

function shareStore(store: Store<any, any>) {
  if (!activeStores.current.find((s) => s.passport!.name === store.passport!.name)) {
    activeStores.current = [...activeStores.current, store]
  }
}

function unshareStore(store: Store<any, any>) {
  if (activeStores.current.includes(store)) {
    activeStores.current = activeStores.current.filter((s) => s !== store)
  }
}
