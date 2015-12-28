export const BUILD_SEARCH_INDEX = '@@redux-devtools-filterable-log-monitor/BUILD_SEARCH_INDEX'
export const SET_ACTION_FILTER_BY_TEXT = '@@redux-devtools-filterable-log-monitor/SET_ACTION_FILTER_BY_TEXT'
export const SET_FILTER_BY_KEYS = '@@redux-devtools-filterable-log-monitor/SET_FILTER_BY_KEYS'
export const SET_FILTER_BY_VALUES = '@@redux-devtools-filterable-log-monitor/SET_FILTER_BY_VALUES'
export const SET_FILTER_TEXT = '@@redux-devtools-filterable-log-monitor/SET_FILTER_TEXT'

export function buildSearchIndex ({ actionId, appState }) {
  return {
    type: BUILD_SEARCH_INDEX,
    actionId,
    appState
  }
}

export function setActionFilterText ({ actionFilterText }) {
  return {
    type: SET_ACTION_FILTER_BY_TEXT,
    actionFilterText
  }
}

export function setFilterByKeys ({ actionId, filterByKeys }) {
  return {
    type: SET_FILTER_BY_KEYS,
    actionId,
    filterByKeys
  }
}

export function setFilterByValues ({ actionId, filterByValues }) {
  return {
    type: SET_FILTER_BY_VALUES,
    actionId,
    filterByValues
  }
}

export function setFilterText ({ actionId, filterText }) {
  return {
    type: SET_FILTER_TEXT,
    actionId,
    filterText
  }
}
