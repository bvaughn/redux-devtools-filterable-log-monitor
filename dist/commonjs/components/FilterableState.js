'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FilterableState;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJsonTree = require('react-json-tree');

var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);

var _FilterHeader = require('./FilterHeader');

var _FilterHeader2 = _interopRequireDefault(_FilterHeader);

var _reactHighlighter = require('react-highlighter');

var _reactHighlighter2 = _interopRequireDefault(_reactHighlighter);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function highlightMatches(filterText, value) {
  return _react2.default.createElement(
    _reactHighlighter2.default,
    {
      matchStyle: {
        display: 'inline-block',
        padding: '3px 0',
        margin: '-3px 0',
        backgroundColor: 'rgba(255, 255, 255, .1)'
      },
      search: (0, _utils.createRegExpFromFilterText)(filterText)
    },
    value
  );
}

FilterableState.propTypes = {
  action: _react.PropTypes.object.isRequired,
  actionId: _react.PropTypes.any.isRequired,
  dispatch: _react.PropTypes.func.isRequired,
  monitorStateAction: _react.PropTypes.object.isRequired,
  theme: _react.PropTypes.object.isRequired
};

function FilterableState(_ref) {
  var action = _ref.action;
  var actionId = _ref.actionId;
  var dispatch = _ref.dispatch;
  var monitorStateAction = _ref.monitorStateAction;
  var theme = _ref.theme;
  var expanded = monitorStateAction.expanded;
  var filterByKeys = monitorStateAction.filterByKeys;
  var filterByValues = monitorStateAction.filterByValues;
  var filteredActions = monitorStateAction.filteredActions;
  var filteredState = monitorStateAction.filteredState;
  var filterText = monitorStateAction.filterText;


  var labelRenderer = filterByKeys && filterText ? function (value) {
    return highlightMatches(filterText, value);
  } : function (value) {
    return value;
  };

  var valueRenderer = filterByValues && filterText ? function (value, nodeType) {
    return highlightMatches(filterText, value);
  } : function (value) {
    return value;
  };

  var data = [{ title: 'Action', source: filteredActions }, { title: 'State', source: filteredState }];

  return _react2.default.createElement(
    'div',
    {
      style: {
        borderBottom: '1px solid ' + theme.base00
      }
    },
    _react2.default.createElement(_FilterHeader2.default, {
      action: action,
      actionId: actionId,
      dispatch: dispatch,
      monitorStateAction: monitorStateAction,
      theme: theme
    }),
    expanded && data.map(function (data, index) {
      return _react2.default.createElement(
        'div',
        { key: index },
        _react2.default.createElement(
          'div',
          {
            style: {
              color: theme.base02,
              fontWeight: 'bold',
              margin: '.5rem 1rem 0',
              fontSize: 10,
              textTransform: 'uppercase'
            }
          },
          data.title
        ),
        _react2.default.createElement(_reactJsonTree2.default, {
          data: data.source,
          labelRenderer: labelRenderer,
          style: {
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0
          },
          theme: theme,
          valueRenderer: valueRenderer
        })
      );
    })
  );
}