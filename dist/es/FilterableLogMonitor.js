
import React, { Component, PropTypes } from 'react';
import reducer from './reducers';
import * as themes from 'redux-devtools-themes';
import { addActionMetadata } from './actions';
import ActionFilter from './components/ActionFilter';
import FilterableState from './components/FilterableState';
import { createRegExpFromFilterText } from './utils';

var FilterableLogMonitor = function (_Component) {
  babelHelpers.inherits(FilterableLogMonitor, _Component);

  function FilterableLogMonitor() {
    babelHelpers.classCallCheck(this, FilterableLogMonitor);
    return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(FilterableLogMonitor).apply(this, arguments));
  }

  babelHelpers.createClass(FilterableLogMonitor, [{
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

          dispatch(addActionMetadata({ action: action, actionId: actionId, appState: appState }));
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

        return monitorStateAction && (!actionFilterText || actionMetadata.action.type.match(createRegExpFromFilterText(actionFilterText)));
      }).map(function (actionId) {
        var actionMetadata = actionsById[actionId];
        var monitorStateAction = actionIdToDatumMap[actionId];

        return React.createElement(FilterableState, {
          key: actionId,
          action: actionMetadata.action,
          actionId: actionId,
          dispatch: dispatch,
          monitorStateAction: monitorStateAction,
          theme: theme
        });
      });

      return React.createElement(
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
        React.createElement(ActionFilter, {
          actionFilterText: actionFilterText,
          dispatch: dispatch,
          theme: theme
        }),
        React.createElement(
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
}(Component);

FilterableLogMonitor.update = reducer;
FilterableLogMonitor.propTypes = {
  actionsById: PropTypes.object,
  computedStates: PropTypes.array,
  dispatch: PropTypes.func,
  monitorState: PropTypes.shape({
    actionIdToDatumMap: PropTypes.object,
    actionFilterText: PropTypes.string
  }),
  stagedActionIds: PropTypes.array,
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
FilterableLogMonitor.defaultProps = {
  theme: 'nicinabox'
};
export default FilterableLogMonitor;