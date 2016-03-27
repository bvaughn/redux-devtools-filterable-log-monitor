
import React, { Component, PropTypes } from 'react';
import debounce from 'lodash.debounce';
import { setActionFilterText } from '../actions';

var DEBOUNCE_TIME = 250;

var ActionFilter = function (_Component) {
  babelHelpers.inherits(ActionFilter, _Component);

  function ActionFilter(props) {
    babelHelpers.classCallCheck(this, ActionFilter);

    var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(ActionFilter).call(this, props));

    _this._debouncedOnActionFilterTextChange = debounce(_this._onActionFilterTextChange.bind(_this), DEBOUNCE_TIME);
    return _this;
  }

  babelHelpers.createClass(ActionFilter, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var actionFilterText = _props.actionFilterText;
      var theme = _props.theme;


      return React.createElement(
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


      dispatch(setActionFilterText({
        actionFilterText: actionFilterText
      }));
    }
  }]);
  return ActionFilter;
}(Component);

ActionFilter.propTypes = {
  actionFilterText: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};
export default ActionFilter;