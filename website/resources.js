/** @flow */
import faker from 'faker'
import Immutable from 'immutable'

export const State = () => Immutable.Map({
  array: [],
  list: Immutable.List(),
  map: Immutable.Map(),
  object: {}
})

function createRandomCards () {
  const results = []
  for (var i = 0; i < Math.random() * 10; i++) {
    results.push({
      ...faker.helpers.createCard(),
      uuid: faker.random.uuid()
    })
  }
  return results
}

export const UPDATE_STATE = 'UPDATE_STATE'

export const actions = {
  udpateState () {
    return {
      type: UPDATE_STATE,
      arrayCards: createRandomCards(),
      listCards: createRandomCards(),
      mapCards: createRandomCards(),
      objectCards: createRandomCards()
    }
  }
}

export const actionHandlers = {
  [UPDATE_STATE] (state, { arrayCards, listCards, mapCards, objectCards }): State {
    return state
      .updateIn(['array'], array => {
        Array.prototype.push.apply(array, arrayCards)
        return array
      })
      .updateIn(['list'], list => list.push(...listCards))
      .mergeIn(['map'], { ...mapCards })
      .mergeIn(['object'], { ...objectCards })
  }
}

export function reducer (state = new State(), action: Object): State {
  const { type } = action
  if (type in actionHandlers) {
    return actionHandlers[type](state, action)
  } else {
    return state
  }
}
