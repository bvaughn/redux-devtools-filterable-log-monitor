import {
  ADD_ACTION_METADATA,
  SET_ACTION_FILTER_BY_TEXT,
  SET_FILTER_BY_KEYS,
  SET_FILTER_BY_VALUES,
  SET_FILTER_TEXT,
  TOGGLE_EXPANDED
} from './actions'
import { getFilteredNodes } from './utils'

const State = () => ({
  actions: {}
})

const reducers = {
  [ADD_ACTION_METADATA] (state, action) {
    const { actionId, appState, time } = action
    return updateAction(state, actionId, { appState, time })
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
  },

  [TOGGLE_EXPANDED] (state, action) {
    const { actionId, expanded } = action
    return updateAction(state, actionId, { expanded }, false)
  }
}

export default function reducer (props, state = new State(), action) {
  return action.type in reducers
    ? reducers[action.type](state, action, props)
    : state
}

function updateAction (state, actionId, props, updateFilter = true) {
  if (!state.actions[actionId]) {
    state.actions[actionId] = {
      appState: {},
      expanded: false,
      filterByKeys: true,
      filterByValues: true,
      filteredState: {},
      filterText: '',
      time: null
    }
  }

  state.actions[actionId] = {
    ...state.actions[actionId],
    ...props
  }

  if (updateFilter) {
    state.actions[actionId].filteredState = getFilteredNodes(state.actions[actionId])
  }

  return state
}
