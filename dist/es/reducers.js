var _reducers;

import { ADD_ACTION_METADATA, SET_ACTION_FILTER_BY_TEXT, SET_FILTER_BY_KEYS, SET_FILTER_BY_VALUES, SET_FILTER_TEXT, TOGGLE_EXPANDED } from './actions';
import { getFilteredNodes } from './utils';

var State = function State() {
  return {
    actionIdToDatumMap: {}
  };
};

var reducers = (_reducers = {}, babelHelpers.defineProperty(_reducers, ADD_ACTION_METADATA, function (state, datum) {
  var action = datum.action;
  var actionId = datum.actionId;
  var appState = datum.appState;
  var time = datum.time;

  return updateAction(state, actionId, { action: action, appState: appState, time: time });
}), babelHelpers.defineProperty(_reducers, SET_ACTION_FILTER_BY_TEXT, function (state, datum) {
  var actionFilterText = datum.actionFilterText;

  return babelHelpers.extends({}, state, {
    actionFilterText: actionFilterText
  });
}), babelHelpers.defineProperty(_reducers, SET_FILTER_BY_KEYS, function (state, datum) {
  var actionId = datum.actionId;
  var filterByKeys = datum.filterByKeys;

  return updateAction(state, actionId, { filterByKeys: filterByKeys });
}), babelHelpers.defineProperty(_reducers, SET_FILTER_BY_VALUES, function (state, datum) {
  var actionId = datum.actionId;
  var filterByValues = datum.filterByValues;

  return updateAction(state, actionId, { filterByValues: filterByValues });
}), babelHelpers.defineProperty(_reducers, SET_FILTER_TEXT, function (state, datum) {
  var actionId = datum.actionId;
  var filterText = datum.filterText;

  return updateAction(state, actionId, { filterText: filterText });
}), babelHelpers.defineProperty(_reducers, TOGGLE_EXPANDED, function (state, datum) {
  var actionId = datum.actionId;
  var expanded = datum.expanded;

  return updateAction(state, actionId, { expanded: expanded }, false);
}), _reducers);

export default function reducer(props) {
  var state = arguments.length <= 1 || arguments[1] === undefined ? new State() : arguments[1];
  var datum = arguments[2];

  return datum.type in reducers ? reducers[datum.type](state, datum, props) : state;
}

function updateAction(state, actionId, props) {
  var updateFilter = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

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
    };
  }

  state.actionIdToDatumMap[actionId] = babelHelpers.extends({}, state.actionIdToDatumMap[actionId], props);

  var datum = state.actionIdToDatumMap[actionId];

  if (updateFilter) {
    datum.filteredActions = getFilteredNodes(babelHelpers.extends({
      data: datum.action
    }, datum));
    datum.filteredState = getFilteredNodes(babelHelpers.extends({
      data: datum.appState
    }, datum));
  }

  return state;
}