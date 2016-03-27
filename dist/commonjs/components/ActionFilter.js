'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEBOUNCE_TIME = 250;

var ActionFilter = function (_Component) {
  _inherits(ActionFilter, _Component);

  function ActionFilter(props) {
    _classCallCheck(this, ActionFilter);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ActionFilter).call(this, props));

    _this._debouncedOnActionFilterTextChange = (0, _lodash2.default)(_this._onActionFilterTextChange.bind(_this), DEBOUNCE_TIME);
    return _this;
  }

  _createClass(ActionFilter, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var actionFilterText = _props.actionFilterText;
      var theme = _props.theme;


      return _react2.default.createElement(
        'div',
        {
          style: {
            flex: '0 0 auto',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: theme.base01,
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
          placeholder: 'Filter actions by type..',
          defaultValue: actionFilterText,
          onChange: this._debouncedOnActionFilterTextChange
        })
      );
    }
  }, {
    key: '_onActionFilterTextChange',
    value: function _onActionFilterTextChange() {
      var actionFilterText = this.refs.input.value;
      var dispatch = this.props.dispatch;


      dispatch((0, _actions.setActionFilterText)({
        actionFilterText: actionFilterText
      }));
    }
  }]);

  return ActionFilter;
}(_react.Component);

ActionFilter.propTypes = {
  actionFilterText: _react.PropTypes.string,
  dispatch: _react.PropTypes.func.isRequired,
  theme: _react.PropTypes.object.isRequired
};
exports.default = ActionFilter;