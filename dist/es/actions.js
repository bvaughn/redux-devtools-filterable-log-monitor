export var ADD_ACTION_METADATA = '@@redux-devtools-filterable-log-monitor/ADD_ACTION_METADATA';
export var SET_ACTION_FILTER_BY_TEXT = '@@redux-devtools-filterable-log-monitor/SET_ACTION_FILTER_BY_TEXT';
export var SET_FILTER_BY_KEYS = '@@redux-devtools-filterable-log-monitor/SET_FILTER_BY_KEYS';
export var SET_FILTER_BY_VALUES = '@@redux-devtools-filterable-log-monitor/SET_FILTER_BY_VALUES';
export var SET_FILTER_TEXT = '@@redux-devtools-filterable-log-monitor/SET_FILTER_TEXT';
export var TOGGLE_EXPANDED = '@@redux-devtools-filterable-log-monitor/TOGGLE_EXPANDED';

export function addActionMetadata(_ref) {
  var action = _ref.action;
  var actionId = _ref.actionId;
  var appState = _ref.appState;

  return {
    type: ADD_ACTION_METADATA,
    action: action,
    actionId: actionId,
    appState: appState,
    time: new Date()
  };
}

export function setActionFilterText(_ref2) {
  var actionFilterText = _ref2.actionFilterText;

  return {
    type: SET_ACTION_FILTER_BY_TEXT,
    actionFilterText: actionFilterText
  };
}

export function setFilterByKeys(_ref3) {
  var actionId = _ref3.actionId;
  var filterByKeys = _ref3.filterByKeys;

  return {
    type: SET_FILTER_BY_KEYS,
    actionId: actionId,
    filterByKeys: filterByKeys
  };
}

export function setFilterByValues(_ref4) {
  var actionId = _ref4.actionId;
  var filterByValues = _ref4.filterByValues;

  return {
    type: SET_FILTER_BY_VALUES,
    actionId: actionId,
    filterByValues: filterByValues
  };
}

export function setFilterText(_ref5) {
  var actionId = _ref5.actionId;
  var filterText = _ref5.filterText;

  return {
    type: SET_FILTER_TEXT,
    actionId: actionId,
    filterText: filterText
  };
}

export function setExpanded(_ref6) {
  var actionId = _ref6.actionId;
  var expanded = _ref6.expanded;

  return {
    type: TOGGLE_EXPANDED,
    actionId: actionId,
    expanded: expanded
  };
}