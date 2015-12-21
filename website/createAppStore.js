/** @flow */
import { compose, createStore } from 'redux'
import { reducer } from './resources'
import DevTools from './DevTools'

export default function createAppStore (): Object {
  const finalCreateStore = compose(
    DevTools.instrument()
  )(createStore)

  return finalCreateStore(reducer)
}
