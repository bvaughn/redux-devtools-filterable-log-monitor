'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('../actions');

var _utils = require('../utils');

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEBOUNCE_TIME = 250;

var FilterHeader = function (_Component) {
  _inherits(FilterHeader, _Component);

  function FilterHeader(props) {
    _classCallCheck(this, FilterHeader);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FilterHeader).call(this, props));

    _this._onFilterByKeysChange = _this._onFilterByKeysChange.bind(_this);
    _this._onFilterByValuesChange = _this._onFilterByValuesChange.bind(_this);
    _this._onFilterTextChange = _this._onFilterTextChange.bind(_this);
    _this._toggleExpanded = _this._toggleExpanded.bind(_this);

    _this._debouncedOnFilterTextChange = (0, _lodash2.default)(_this._onFilterTextChange, DEBOUNCE_TIME);
    return _this;
  }

  _createClass(FilterHeader, [{
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


      return _react2.default.createElement(
        'div',
        {
          style: {
            flex: '0 0 auto',
            alignItems: 'center'
          }
        },
        _react2.default.createElement(
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
          _react2.default.createElement('div', {
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
          _react2.default.createElement(
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
            _react2.default.createElement(
              _reactResponsive2.default,
              { query: '(min-width: 1024px)' },
              _react2.default.createElement(
                'span',
                {
                  style: {
                    color: theme.base05,
                    fontSize: '.6em',
                    marginLeft: '.6em'
                  }
                },
                '(' + (0, _utils.formatDateAsTime)(time) + ')'
              )
            )
          ),
          _react2.default.createElement(
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
            _react2.default.createElement(
              _reactResponsive2.default,
              { query: '(min-width: 1024px)' },
              _react2.default.createElement(
                'div',
                {
                  style: {
                    flex: '0 0 auto'
                  }
                },
                'Filter by'
              )
            ),
            _react2.default.createElement(
              'label',
              {
                style: {
                  flex: '0 0 auto',
                  marginLeft: '.5em',
                  fontWeight: 'normal',
                  color: theme.base0D
                }
              },
              _react2.default.createElement('input', {
                type: 'checkbox',
                checked: filterByKeys,
                onChange: this._onFilterByKeysChange
              }),
              'Keys'
            ),
            _react2.default.createElement(
              'label',
              {
                style: {
                  flex: '0 0 auto',
                  marginLeft: '.5em',
                  fontWeight: 'normal',
                  color: theme.base0B
                }
              },
              _react2.default.createElement('input', {
                type: 'checkbox',
                checked: filterByValues,
                onChange: this._onFilterByValuesChange
              }),
              'Values'
            )
          )
        ),
        expanded && _react2.default.createElement(
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
          _react2.default.createElement('input', {
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


      dispatch((0, _actions.setFilterByKeys)({
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


      dispatch((0, _actions.setFilterByValues)({
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


      dispatch((0, _actions.setFilterText)({
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


      dispatch((0, _actions.setExpanded)({
        actionId: actionId,
        expanded: !expanded
      }));
    }
  }]);

  return FilterHeader;
}(_react.Component);

FilterHeader.propTypes = {
  action: _react.PropTypes.object.isRequired,
  actionId: _react.PropTypes.any.isRequired,
  dispatch: _react.PropTypes.func.isRequired,
  monitorStateAction: _react.PropTypes.object.isRequired,
  theme: _react.PropTypes.object.isRequired
};
exports.default = FilterHeader;