import {
  BUILD_SEARCH_INDEX,
  SET_ACTION_FILTER_BY_TEXT,
  SET_FILTER_BY_KEYS,
  SET_FILTER_BY_VALUES,
  SET_FILTER_TEXT
} from './actions'
import { getFilteredNodes } from './utils'

const State = () => ({
  actions: {}
})

const reducers = {
  [BUILD_SEARCH_INDEX] (state, action) {
    const { actionId, appState } = action
    return updateAction(state, actionId, { appState })
  },

  [SET_ACTION_FILTER_BY_TEXT] (state, action) {
    const { actionFilterText } = action
    return {
      ...state,
      actionFilterText
    }
  },

  [SET_FILTER_BY_KEYS] (state, action) {
    const { actionId, filterByKeys } = action
    return updateAction(state, actionId, { filterByKeys })
  },

  [SET_FILTER_BY_VALUES] (state, action) {
    const { actionId, filterByValues } = action
    return updateAction(state, actionId, { filterByValues })
  },

  [SET_FILTER_TEXT] (state, action) {
    const { actionId, filterText } = action
    return updateAction(state, actionId, { filterText })
  }
}

export default function reducer (props, state = new State(), action) {
  return action.type in reducers
    ? reducers[action.type](state, action, props)
    : state
}

function updateAction (state, actionId, props) {
  if (!state.actions[actionId]) {
    state.actions[actionId] = {
      appState: {},
      filterByKeys: false,
      filterByValues: false,
      filteredState: {},
      filterText: ''
    }
  }

  state.actions[actionId] = {
    ...state.actions[actionId],
    ...props
  }
  state.actions[actionId].filteredState = getFilteredNodes(state.actions[actionId])

  return state
}
