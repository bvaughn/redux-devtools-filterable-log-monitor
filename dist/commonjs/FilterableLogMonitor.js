'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxDevtoolsThemes = require('redux-devtools-themes');

var themes = _interopRequireWildcard(_reduxDevtoolsThemes);

var _actions = require('./actions');

var _ActionFilter = require('./components/ActionFilter');

var _ActionFilter2 = _interopRequireDefault(_ActionFilter);

var _FilterableState = require('./components/FilterableState');

var _FilterableState2 = _interopRequireDefault(_FilterableState);

var _utils = require('./utils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterableLogMonitor = function (_Component) {
  _inherits(FilterableLogMonitor, _Component);

  function FilterableLogMonitor() {
    _classCallCheck(this, FilterableLogMonitor);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FilterableLogMonitor).apply(this, arguments));
  }

  _createClass(FilterableLogMonitor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props;
      var actionsById = _props.actionsById;
      var dispatch = _props.dispatch;
      var stagedActionIds = _props.stagedActionIds;


      if (nextProps.stagedActionIds !== stagedActionIds) {
        for (var i = stagedActionIds.length; i < nextProps.stagedActionIds.length; i++) {
          var actionId = nextProps.stagedActionIds[i];
          var action = actionsById[actionId];
          var appState = nextProps.computedStates[i].state;

          dispatch((0, _actions.addActionMetadata)({ action: action, actionId: actionId, appState: appState }));
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var actionsById = _props2.actionsById;
      var dispatch = _props2.dispatch;
      var _props2$monitorState = _props2.monitorState;
      var actionFilterText = _props2$monitorState.actionFilterText;
      var actionIdToDatumMap = _props2$monitorState.actionIdToDatumMap;
      var stagedActionIds = _props2.stagedActionIds;


      var theme = this._getTheme();
      var filterableStates = actionIdToDatumMap && stagedActionIds.filter(function (actionId) {
        var actionMetadata = actionsById[actionId];
        var monitorStateAction = actionIdToDatumMap[actionId];

        return monitorStateAction && (!actionFilterText || actionMetadata.action.type.match((0, _utils.createRegExpFromFilterText)(actionFilterText)));
      }).map(function (actionId) {
        var actionMetadata = actionsById[actionId];
        var monitorStateAction = actionIdToDatumMap[actionId];

        return _react2.default.createElement(_FilterableState2.default, {
          key: actionId,
          action: actionMetadata.action,
          actionId: actionId,
          dispatch: dispatch,
          monitorStateAction: monitorStateAction,
          theme: theme
        });
      });

      return _react2.default.createElement(
        'div',
        {
          style: {
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme.base00,
            color: theme.base07,
            fontSize: 14,
            minWidth: 200
          }
        },
        _react2.default.createElement(_ActionFilter2.default, {
          actionFilterText: actionFilterText,
          dispatch: dispatch,
          theme: theme
        }),
        _react2.default.createElement(
          'div',
          {
            style: {
              flex: '1',
              overflowY: 'scroll'
            }
          },
          filterableStates
        )
      );
    }
  }, {
    key: '_getTheme',
    value: function _getTheme() {
      var theme = this.props.theme;


      if (typeof theme !== 'string') {
        return theme;
      } else if (typeof themes[theme] !== 'undefined') {
        return themes[theme];
      } else {
        console.warn('DevTools theme ' + theme + ' not found, defaulting to nicinabox');
        return themes.nicinabox;
      }
    }
  }]);

  return FilterableLogMonitor;
}(_react.Component);

FilterableLogMonitor.update = _reducers2.default;
FilterableLogMonitor.propTypes = {
  actionsById: _react.PropTypes.object,
  computedStates: _react.PropTypes.array,
  dispatch: _react.PropTypes.func,
  monitorState: _react.PropTypes.shape({
    actionIdToDatumMap: _react.PropTypes.object,
    actionFilterText: _react.PropTypes.string
  }),
  stagedActionIds: _react.PropTypes.array,
  theme: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string])
};
FilterableLogMonitor.defaultProps = {
  theme: 'nicinabox'
};
exports.default = FilterableLogMonitor;