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
  actionIdToDatumMap: {}
})

const reducers = {
  [ADD_ACTION_METADATA] (state, datum) {
    const { action, actionId, appState, time } = datum
    return updateAction(state, actionId, { action, appState, time })
  },

  [SET_ACTION_FILTER_BY_TEXT] (state, datum) {
    const { actionFilterText } = datum
    return {
      ...state,
      actionFilterText
    }
  },

  [SET_FILTER_BY_KEYS] (state, datum) {
    const { actionId, filterByKeys } = datum
    return updateAction(state, actionId, { filterByKeys })
  },

  [SET_FILTER_BY_VALUES] (state, datum) {
    const { actionId, filterByValues } = datum
    return updateAction(state, actionId, { filterByValues })
  },

  [SET_FILTER_TEXT] (state, datum) {
    const { actionId, filterText } = datum
    return updateAction(state, actionId, { filterText })
  },

  [TOGGLE_EXPANDED] (state, datum) {
    const { actionId, expanded } = datum
    return updateAction(state, actionId, { expanded }, false)
  }
}

export default function reducer (props, state = new State(), datum) {
  return datum.type in reducers
    ? reducers[datum.type](state, datum, props)
    : state
}

function updateAction (state, actionId, props, updateFilter = true) {
  if (!state.actionIdToDatumMap[actionId]) {
    state.actionIdToDatumMap[actionId] = {
      action: {},
      appState: {},
      expanded: false,
      filterByKeys: true,
      filterByValues: true,
      filteredActions: {},
      filteredState: {},
      filterText: '',
      time: null
    }
  }

  state.actionIdToDatumMap[actionId] = {
    ...state.actionIdToDatumMap[actionId],
    ...props
  }

  const datum = state.actionIdToDatumMap[actionId]

  if (updateFilter) {
    datum.filteredActions = getFilteredNodes({
      data: datum.action,
      ...datum
    })
    datum.filteredState = getFilteredNodes({
      data: datum.appState,
      ...datum
    })
  }

  return state
}
