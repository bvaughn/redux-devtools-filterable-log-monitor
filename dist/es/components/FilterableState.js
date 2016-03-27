
import React, { PropTypes } from 'react';
import JSONTree from 'react-json-tree';
import FilterHeader from './FilterHeader';
import Highlighter from 'react-highlighter';
import { createRegExpFromFilterText } from '../utils';

function highlightMatches(filterText, value) {
  return React.createElement(
    Highlighter,
    {
      matchStyle: {
        display: 'inline-block',
        padding: '3px 0',
        margin: '-3px 0',
        backgroundColor: 'rgba(255, 255, 255, .1)'
      },
      search: createRegExpFromFilterText(filterText)
    },
    value
  );
}

FilterableState.propTypes = {
  action: PropTypes.object.isRequired,
  actionId: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired,
  monitorStateAction: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default function FilterableState(_ref) {
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

  return React.createElement(
    'div',
    {
      style: {
        borderBottom: '1px solid ' + theme.base00
      }
    },
    React.createElement(FilterHeader, {
      action: action,
      actionId: actionId,
      dispatch: dispatch,
      monitorStateAction: monitorStateAction,
      theme: theme
    }),
    expanded && data.map(function (data, index) {
      return React.createElement(
        'div',
        { key: index },
        React.createElement(
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
        React.createElement(JSONTree, {
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