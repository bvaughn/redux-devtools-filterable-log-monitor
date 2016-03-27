'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addActionMetadata = addActionMetadata;
exports.setActionFilterText = setActionFilterText;
exports.setFilterByKeys = setFilterByKeys;
exports.setFilterByValues = setFilterByValues;
exports.setFilterText = setFilterText;
exports.setExpanded = setExpanded;
var ADD_ACTION_METADATA = exports.ADD_ACTION_METADATA = '@@redux-devtools-filterable-log-monitor/ADD_ACTION_METADATA';
var SET_ACTION_FILTER_BY_TEXT = exports.SET_ACTION_FILTER_BY_TEXT = '@@redux-devtools-filterable-log-monitor/SET_ACTION_FILTER_BY_TEXT';
var SET_FILTER_BY_KEYS = exports.SET_FILTER_BY_KEYS = '@@redux-devtools-filterable-log-monitor/SET_FILTER_BY_KEYS';
var SET_FILTER_BY_VALUES = exports.SET_FILTER_BY_VALUES = '@@redux-devtools-filterable-log-monitor/SET_FILTER_BY_VALUES';
var SET_FILTER_TEXT = exports.SET_FILTER_TEXT = '@@redux-devtools-filterable-log-monitor/SET_FILTER_TEXT';
var TOGGLE_EXPANDED = exports.TOGGLE_EXPANDED = '@@redux-devtools-filterable-log-monitor/TOGGLE_EXPANDED';

function addActionMetadata(_ref) {
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

function setActionFilterText(_ref2) {
  var actionFilterText = _ref2.actionFilterText;

  return {
    type: SET_ACTION_FILTER_BY_TEXT,
    actionFilterText: actionFilterText
  };
}

function setFilterByKeys(_ref3) {
  var actionId = _ref3.actionId;
  var filterByKeys = _ref3.filterByKeys;

  return {
    type: SET_FILTER_BY_KEYS,
    actionId: actionId,
    filterByKeys: filterByKeys
  };
}

function setFilterByValues(_ref4) {
  var actionId = _ref4.actionId;
  var filterByValues = _ref4.filterByValues;

  return {
    type: SET_FILTER_BY_VALUES,
    actionId: actionId,
    filterByValues: filterByValues
  };
}

function setFilterText(_ref5) {
  var actionId = _ref5.actionId;
  var filterText = _ref5.filterText;

  return {
    type: SET_FILTER_TEXT,
    actionId: actionId,
    filterText: filterText
  };
}

function setExpanded(_ref6) {
  var actionId = _ref6.actionId;
  var expanded = _ref6.expanded;

  return {
    type: TOGGLE_EXPANDED,
    actionId: actionId,
    expanded: expanded
  };
}