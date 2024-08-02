import { Cached, CachedSource } from '@packages/store'
import { _createStore } from '../basic/_createStore'

export function createCached<
  Type,
  SourceType extends Array<CachedSource> = Array<CachedSource>
>(...parameters: ConstructorParameters<typeof Cached<Type, SourceType>>) {
  return _createStore(new Cached<Type, SourceType>(...parameters))
}
