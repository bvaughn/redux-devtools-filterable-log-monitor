/** @flow */
import faker from 'faker'
import Immutable from 'immutable'

export const State = () => Immutable.Map({
  array: [],
  basicTypes: {
    array: ['a', 1],
    boolean: true,
    function: function abc () {
      console.log('message')
    },
    null: null,
    number: 1.2,
    string: 'I like strings',
    undefined: undefined
  },
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

export const UPDATE_ARRAY = 'UPDATE_ARRAY'
export const UPDATE_LIST = 'UPDATE_LIST'
export const UPDATE_MAP = 'UPDATE_MAP'
export const UPDATE_OBJECT = 'UPDATE_OBJECT'

export const actions = {
  udpateArray () {
    return {
      type: UPDATE_ARRAY,
      payload: createRandomCards()
    }
  },
  udpateList () {
    return {
      type: UPDATE_LIST,
      payload: createRandomCards()
    }
  },
  udpateMap () {
    return {
      type: UPDATE_MAP,
      payload: createRandomCards()
    }
  },
  udpateObject () {
    return {
      type: UPDATE_OBJECT,
      payload: createRandomCards()
    }
  }
}

export const actionHandlers = {
  [UPDATE_ARRAY] (state, { payload }): State {
    return state.updateIn(['array'], array => {
      Array.prototype.push.apply(array, payload)
      return array
    })
  },
  [UPDATE_LIST] (state, { payload }): State {
    return state.updateIn(['list'], list => list.push(...payload))
  },
  [UPDATE_MAP] (state, { payload }): State {
    return state.mergeIn(['map'], { ...payload })
  },
  [UPDATE_OBJECT] (state, { payload }): State {
    return state.mergeIn(['object'], { ...payload })
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
