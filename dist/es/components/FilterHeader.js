
import React, { Component, PropTypes } from 'react';
import { setFilterByKeys, setFilterByValues, setFilterText, setExpanded } from '../actions';
import { formatDateAsTime } from '../utils';
import debounce from 'lodash.debounce';
import MediaQuery from 'react-responsive';

var DEBOUNCE_TIME = 250;

var FilterHeader = function (_Component) {
  babelHelpers.inherits(FilterHeader, _Component);

  function FilterHeader(props) {
    babelHelpers.classCallCheck(this, FilterHeader);

    var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(FilterHeader).call(this, props));

    _this._onFilterByKeysChange = _this._onFilterByKeysChange.bind(_this);
    _this._onFilterByValuesChange = _this._onFilterByValuesChange.bind(_this);
    _this._onFilterTextChange = _this._onFilterTextChange.bind(_this);
    _this._toggleExpanded = _this._toggleExpanded.bind(_this);

    _this._debouncedOnFilterTextChange = debounce(_this._onFilterTextChange, DEBOUNCE_TIME);
    return _this;
  }

  babelHelpers.createClass(FilterHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var action = _props.action;
      var monitorStateAction = _props.monitorStateAction;
      var theme = _props.theme;
      var expanded = monitorStateAction.expanded;
      var filterByKeys = monitorStateAction.filterByKeys;
      var filterByValues = monitorStateAction.filterByValues;
      var filterText = monitorStateAction.filterText;
      var time = monitorStateAction.time;


      return React.createElement(
        'div',
        {
          style: {
            flex: '0 0 auto',
            alignItems: 'center'
          }
        },
        React.createElement(
          'div',
          {
            style: {
              display: 'flex',
              alignItems: 'center',
              padding: '.5em',
              backgroundColor: theme.base02,
              color: theme.base06
            }
          },
          React.createElement('div', {
            style: {
              display: 'inline-block',
              marginRight: '5px',
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTopWidth: '5px',
              borderTopStyle: 'solid',
              cursor: 'pointer',
              transition: '150ms',
              transform: expanded ? 'rotateZ(0deg)' : 'rotateZ(-90deg)',
              borderTopColor: expanded ? theme.base06 : theme.base05
            },
            onClick: this._toggleExpanded
          }),
          React.createElement(
            'div',
            {
              title: action.type,
              onClick: this._toggleExpanded,
              style: {
                flex: '1 1 auto',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflowX: 'hidden',
                cursor: 'pointer'
              }
            },
            action.type,
            React.createElement(
              MediaQuery,
              { query: '(min-width: 1024px)' },
              React.createElement(
                'span',
                {
                  style: {
                    color: theme.base05,
                    fontSize: '.6em',
                    marginLeft: '.6em'
                  }
                },
                '(' + formatDateAsTime(time) + ')'
              )
            )
          ),
          React.createElement(
            'div',
            {
              style: {
                display: 'flex',
                alignItems: 'center',
                flex: '0 0 auto',
                marginLeft: '.5em',
                fontSize: '.8em'
              }
            },
            React.createElement(
              MediaQuery,
              { query: '(min-width: 1024px)' },
              React.createElement(
                'div',
                {
                  style: {
                    flex: '0 0 auto'
                  }
                },
                'Filter by'
              )
            ),
            React.createElement(
              'label',
              {
                style: {
                  flex: '0 0 auto',
                  marginLeft: '.5em',
                  fontWeight: 'normal',
                  color: theme.base0D
                }
              },
              React.createElement('input', {
                type: 'checkbox',
                checked: filterByKeys,
                onChange: this._onFilterByKeysChange
              }),
              'Keys'
            ),
            React.createElement(
              'label',
              {
                style: {
                  flex: '0 0 auto',
                  marginLeft: '.5em',
                  fontWeight: 'normal',
                  color: theme.base0B
                }
              },
              React.createElement('input', {
                type: 'checkbox',
                checked: filterByValues,
                onChange: this._onFilterByValuesChange
              }),
              'Values'
            )
          )
        ),
        expanded && React.createElement(
          'div',
          {
            style: {
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              backgroundColor: theme.base01,
              color: theme.base06,
              padding: '.75em',
              fontSize: '.65em',
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }
          },
          React.createElement('input', {
            ref: 'input',
            style: {
              flex: '0 0 100%',
              borderRadius: '.25em',
              lineHeight: '3em',
              padding: '0 .75em',
              border: 'none',
              backgroundColor: theme.base06,
              color: theme.base00
            },
            type: 'text',
            placeholder: 'Filter by /regex/i or "string"',
            defaultValue: filterText,
            onChange: this._debouncedOnFilterTextChange
          })
        )
      );
    }
  }, {
    key: '_onFilterByKeysChange',
    value: function _onFilterByKeysChange(event) {
      var filterByKeys = event.target.checked;
      var _props2 = this.props;
      var actionId = _props2.actionId;
      var dispatch = _props2.dispatch;


      dispatch(setFilterByKeys({
        actionId: actionId,
        filterByKeys: filterByKeys
      }));
    }
  }, {
    key: '_onFilterByValuesChange',
    value: function _onFilterByValuesChange(event) {
      var filterByValues = event.target.checked;
      var _props3 = this.props;
      var actionId = _props3.actionId;
      var dispatch = _props3.dispatch;


      dispatch(setFilterByValues({
        actionId: actionId,
        filterByValues: filterByValues
      }));
    }
  }, {
    key: '_onFilterTextChange',
    value: function _onFilterTextChange(event) {
      var filterText = this.refs.input.value;
      var _props4 = this.props;
      var actionId = _props4.actionId;
      var dispatch = _props4.dispatch;


      dispatch(setFilterText({
        actionId: actionId,
        filterText: filterText
      }));
    }
  }, {
    key: '_toggleExpanded',
    value: function _toggleExpanded() {
      var _props5 = this.props;
      var actionId = _props5.actionId;
      var dispatch = _props5.dispatch;
      var monitorStateAction = _props5.monitorStateAction;
      var expanded = monitorStateAction.expanded;


      dispatch(setExpanded({
        actionId: actionId,
        expanded: !expanded
      }));
    }
  }]);
  return FilterHeader;
}(Component);

FilterHeader.propTypes = {
  action: PropTypes.object.isRequired,
  actionId: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired,
  monitorStateAction: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
export default FilterHeader;