import { Store, StoreOptions } from './Store'

export type DerivedCallback<SourceType, Type> = (value: SourceType) => Type

export class Derived<Type, SourceType> extends Store<Type> {
  #unsubscriber: Function

  constructor(
    store: Store<SourceType, any>,
    callback: DerivedCallback<SourceType, Type>,
    parameters?: StoreOptions<Type>
  ) {
    super(null!, parameters)

    this.#unsubscriber = store.subscribe((e) => {
      this.current = callback(e.current)
    })
  }

  public override close() {
    super.close()
    this.#unsubscriber()
  }
}
