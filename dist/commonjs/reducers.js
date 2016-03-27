'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _actions = require('./actions');

var _utils = require('./utils');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var State = function State() {
  return {
    actionIdToDatumMap: {}
  };
};

var reducers = (_reducers = {}, _defineProperty(_reducers, _actions.ADD_ACTION_METADATA, function (state, datum) {
  var action = datum.action;
  var actionId = datum.actionId;
  var appState = datum.appState;
  var time = datum.time;

  return updateAction(state, actionId, { action: action, appState: appState, time: time });
}), _defineProperty(_reducers, _actions.SET_ACTION_FILTER_BY_TEXT, function (state, datum) {
  var actionFilterText = datum.actionFilterText;

  return _extends({}, state, {
    actionFilterText: actionFilterText
  });
}), _defineProperty(_reducers, _actions.SET_FILTER_BY_KEYS, function (state, datum) {
  var actionId = datum.actionId;
  var filterByKeys = datum.filterByKeys;

  return updateAction(state, actionId, { filterByKeys: filterByKeys });
}), _defineProperty(_reducers, _actions.SET_FILTER_BY_VALUES, function (state, datum) {
  var actionId = datum.actionId;
  var filterByValues = datum.filterByValues;

  return updateAction(state, actionId, { filterByValues: filterByValues });
}), _defineProperty(_reducers, _actions.SET_FILTER_TEXT, function (state, datum) {
  var actionId = datum.actionId;
  var filterText = datum.filterText;

  return updateAction(state, actionId, { filterText: filterText });
}), _defineProperty(_reducers, _actions.TOGGLE_EXPANDED, function (state, datum) {
  var actionId = datum.actionId;
  var expanded = datum.expanded;

  return updateAction(state, actionId, { expanded: expanded }, false);
}), _reducers);

function reducer(props) {
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

  state.actionIdToDatumMap[actionId] = _extends({}, state.actionIdToDatumMap[actionId], props);

  var datum = state.actionIdToDatumMap[actionId];

  if (updateFilter) {
    datum.filteredActions = (0, _utils.getFilteredNodes)(_extends({
      data: datum.action
    }, datum));
    datum.filteredState = (0, _utils.getFilteredNodes)(_extends({
      data: datum.appState
    }, datum));
  }

  return state;
}