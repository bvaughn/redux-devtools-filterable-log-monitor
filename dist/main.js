(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["redux-devtools-filterable-log-monitor"] = factory(require("react"));
	else
		root["redux-devtools-filterable-log-monitor"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _FilterableLogMonitor = __webpack_require__(2);
	
	var _FilterableLogMonitor2 = _interopRequireDefault(_FilterableLogMonitor);

	exports['default'] = _FilterableLogMonitor2['default'];
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reducers = __webpack_require__(4);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _reactPureRenderFunction = __webpack_require__(7);
	
	var _reactPureRenderFunction2 = _interopRequireDefault(_reactPureRenderFunction);
	
	var _reduxDevtoolsThemes = __webpack_require__(9);
	
	var themes = _interopRequireWildcard(_reduxDevtoolsThemes);
	
	var _actions = __webpack_require__(5);
	
	var _componentsActionFilter = __webpack_require__(49);
	
	var _componentsActionFilter2 = _interopRequireDefault(_componentsActionFilter);
	
	var _componentsFilterableState = __webpack_require__(52);
	
	var _componentsFilterableState2 = _interopRequireDefault(_componentsFilterableState);
	
	var _utils = __webpack_require__(6);
	
	var FilterableLogMonitor = (function (_Component) {
	  _inherits(FilterableLogMonitor, _Component);
	
	  function FilterableLogMonitor() {
	    _classCallCheck(this, FilterableLogMonitor);
	
	    _get(Object.getPrototypeOf(FilterableLogMonitor.prototype), 'constructor', this).apply(this, arguments);
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
	
	        return _react2['default'].createElement(_componentsFilterableState2['default'], {
	          key: actionId,
	          action: actionMetadata.action,
	          actionId: actionId,
	          dispatch: dispatch,
	          monitorStateAction: monitorStateAction,
	          theme: theme
	        });
	      });
	
	      return _react2['default'].createElement(
	        'div',
	        {
	          style: {
	            position: 'absolute',
	            right: '0',
	            top: '0',
	            bottom: '0',
	            width: '100%',
	            height: '100%',
	            display: 'flex',
	            flexDirection: 'column',
	            backgroundColor: theme.base00,
	            color: theme.base07,
	            fontSize: '14px',
	            minWidth: '200px'
	          }
	        },
	        _react2['default'].createElement(_componentsActionFilter2['default'], {
	          actionFilterText: actionFilterText,
	          dispatch: dispatch,
	          theme: theme
	        }),
	        _react2['default'].createElement(
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
	  }], [{
	    key: 'shouldComponentUpdate',
	    value: _reactPureRenderFunction2['default'],
	    enumerable: true
	  }, {
	    key: 'update',
	    value: _reducers2['default'],
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      actionsById: _react.PropTypes.object,
	      computedStates: _react.PropTypes.array,
	      dispatch: _react.PropTypes.func,
	      monitorState: _react.PropTypes.shape({
	        actionIdToDatumMap: _react.PropTypes.object,
	        actionFilterText: _react.PropTypes.string
	      }),
	      stagedActionIds: _react.PropTypes.array,
	      theme: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string])
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      theme: 'nicinabox'
	    },
	    enumerable: true
	  }]);
	
	  return FilterableLogMonitor;
	})(_react.Component);
	
	exports['default'] = FilterableLogMonitor;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _reducers;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = reducer;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _actions = __webpack_require__(5);
	
	var _utils = __webpack_require__(6);
	
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
	
	function reducer(props, state, datum) {
	  if (state === undefined) state = new State();
	
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
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.addActionMetadata = addActionMetadata;
	exports.setActionFilterText = setActionFilterText;
	exports.setFilterByKeys = setFilterByKeys;
	exports.setFilterByValues = setFilterByValues;
	exports.setFilterText = setFilterText;
	exports.setExpanded = setExpanded;
	var ADD_ACTION_METADATA = '@@redux-devtools-filterable-log-monitor/ADD_ACTION_METADATA';
	exports.ADD_ACTION_METADATA = ADD_ACTION_METADATA;
	var SET_ACTION_FILTER_BY_TEXT = '@@redux-devtools-filterable-log-monitor/SET_ACTION_FILTER_BY_TEXT';
	exports.SET_ACTION_FILTER_BY_TEXT = SET_ACTION_FILTER_BY_TEXT;
	var SET_FILTER_BY_KEYS = '@@redux-devtools-filterable-log-monitor/SET_FILTER_BY_KEYS';
	exports.SET_FILTER_BY_KEYS = SET_FILTER_BY_KEYS;
	var SET_FILTER_BY_VALUES = '@@redux-devtools-filterable-log-monitor/SET_FILTER_BY_VALUES';
	exports.SET_FILTER_BY_VALUES = SET_FILTER_BY_VALUES;
	var SET_FILTER_TEXT = '@@redux-devtools-filterable-log-monitor/SET_FILTER_TEXT';
	exports.SET_FILTER_TEXT = SET_FILTER_TEXT;
	var TOGGLE_EXPANDED = '@@redux-devtools-filterable-log-monitor/TOGGLE_EXPANDED';
	
	exports.TOGGLE_EXPANDED = TOGGLE_EXPANDED;
	
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

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.createRegExpFromFilterText = createRegExpFromFilterText;
	exports.getFilteredNodes = getFilteredNodes;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	function isImmutable(data) {
	  return data && data.toJS instanceof Function;
	}
	
	function searchKeys(key, node, regExp) {
	  if (key.match(regExp)) {
	    return true;
	  } else if (node && typeof node === 'object') {
	    if (isImmutable(node)) {
	      node = node.toJS();
	    }
	
	    return Object.keys(node).some(function (nestedKey) {
	      return searchKeys(nestedKey, node[nestedKey], regExp);
	    });
	  }
	}
	
	function searchValues(node, regExp) {
	  if (typeof node === 'string' && node.match(regExp)) {
	    return true;
	  } else if (node && typeof node === 'object') {
	    if (isImmutable(node)) {
	      node = node.toJS();
	    }
	
	    for (var key in node) {
	      if (searchValues(node[key], regExp)) {
	        return true;
	      }
	    }
	
	    return false;
	  }
	}
	
	function trimTree(node, filterText, searchFunction) {
	  var trimmed = undefined;
	
	  if (isImmutable(node)) {
	    trimmed = node.toJS();
	  } else {
	    trimmed = node instanceof Array ? [].concat(_toConsumableArray(node)) : _extends({}, node);
	  }
	
	  if (filterText) {
	    for (var key in trimmed) {
	      if (!searchFunction(key, trimmed[key], filterText)) {
	        delete trimmed[key];
	      } else if (typeof trimmed[key] === 'object') {
	        trimmed[key] = trimTree(trimmed[key], filterText, searchFunction);
	      }
	    }
	  }
	
	  return trimmed;
	}
	
	function createRegExpFromFilterText(filterText) {
	  if (filterText.match(/^\/.+\/[a-z]*$/)) {
	    var pieces = filterText.split('/');
	    pieces.shift(); // First item is always empty
	    var flags = pieces.pop(); // Last item contains optional) flags
	    try {
	      return new RegExp(pieces.join('/'), flags);
	    } catch (error) {
	      console.error(error);
	      return new RegExp();
	    }
	  } else {
	    return new RegExp(filterText);
	  }
	}
	
	function getFilteredNodes(_ref) {
	  var _ref$data = _ref.data;
	  var data = _ref$data === undefined ? {} : _ref$data;
	  var filterByKeys = _ref.filterByKeys;
	  var filterByValues = _ref.filterByValues;
	  var _ref$filterText = _ref.filterText;
	  var filterText = _ref$filterText === undefined ? '' : _ref$filterText;
	
	  if (!filterByKeys && !filterByValues || !filterText) {
	    return data;
	  }
	
	  var regExp = createRegExpFromFilterText(filterText);
	  var keySearcher = filterByKeys ? searchKeys : function () {
	    return false;
	  };
	  var valueSearcher = filterByValues ? searchValues : function () {
	    return false;
	  };
	  var searchFunction = function searchFunction(key, value, regExp) {
	    return keySearcher(key, value, regExp) || valueSearcher(value, regExp);
	  };
	
	  return trimTree(data, regExp, searchFunction);
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shouldPureComponentUpdate;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _shallowEqual = __webpack_require__(8);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	function shouldPureComponentUpdate(nextProps, nextState) {
	  return !(0, _shallowEqual2['default'])(this.props, nextProps) || !(0, _shallowEqual2['default'])(this.state, nextState);
	}
	
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shallowEqual;
	
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	var _base16 = __webpack_require__(10);
	
	_defaults(exports, _interopExportWildcard(_base16, _defaults));
	
	var _nicinabox = __webpack_require__(48);
	
	exports.nicinabox = _interopRequire(_nicinabox);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _threezerotwofour = __webpack_require__(11);
	
	exports.threezerotwofour = _interopRequire(_threezerotwofour);
	
	var _apathy = __webpack_require__(12);
	
	exports.apathy = _interopRequire(_apathy);
	
	var _ashes = __webpack_require__(13);
	
	exports.ashes = _interopRequire(_ashes);
	
	var _atelierDune = __webpack_require__(14);
	
	exports.atelierDune = _interopRequire(_atelierDune);
	
	var _atelierForest = __webpack_require__(15);
	
	exports.atelierForest = _interopRequire(_atelierForest);
	
	var _atelierHeath = __webpack_require__(16);
	
	exports.atelierHeath = _interopRequire(_atelierHeath);
	
	var _atelierLakeside = __webpack_require__(17);
	
	exports.atelierLakeside = _interopRequire(_atelierLakeside);
	
	var _atelierSeaside = __webpack_require__(18);
	
	exports.atelierSeaside = _interopRequire(_atelierSeaside);
	
	var _bespin = __webpack_require__(19);
	
	exports.bespin = _interopRequire(_bespin);
	
	var _brewer = __webpack_require__(20);
	
	exports.brewer = _interopRequire(_brewer);
	
	var _bright = __webpack_require__(21);
	
	exports.bright = _interopRequire(_bright);
	
	var _chalk = __webpack_require__(22);
	
	exports.chalk = _interopRequire(_chalk);
	
	var _codeschool = __webpack_require__(23);
	
	exports.codeschool = _interopRequire(_codeschool);
	
	var _colors = __webpack_require__(24);
	
	exports.colors = _interopRequire(_colors);
	
	var _default = __webpack_require__(25);
	
	exports['default'] = _interopRequire(_default);
	
	var _eighties = __webpack_require__(26);
	
	exports.eighties = _interopRequire(_eighties);
	
	var _embers = __webpack_require__(27);
	
	exports.embers = _interopRequire(_embers);
	
	var _flat = __webpack_require__(28);
	
	exports.flat = _interopRequire(_flat);
	
	var _google = __webpack_require__(29);
	
	exports.google = _interopRequire(_google);
	
	var _grayscale = __webpack_require__(30);
	
	exports.grayscale = _interopRequire(_grayscale);
	
	var _greenscreen = __webpack_require__(31);
	
	exports.greenscreen = _interopRequire(_greenscreen);
	
	var _harmonic = __webpack_require__(32);
	
	exports.harmonic = _interopRequire(_harmonic);
	
	var _hopscotch = __webpack_require__(33);
	
	exports.hopscotch = _interopRequire(_hopscotch);
	
	var _isotope = __webpack_require__(34);
	
	exports.isotope = _interopRequire(_isotope);
	
	var _marrakesh = __webpack_require__(35);
	
	exports.marrakesh = _interopRequire(_marrakesh);
	
	var _mocha = __webpack_require__(36);
	
	exports.mocha = _interopRequire(_mocha);
	
	var _monokai = __webpack_require__(37);
	
	exports.monokai = _interopRequire(_monokai);
	
	var _ocean = __webpack_require__(38);
	
	exports.ocean = _interopRequire(_ocean);
	
	var _paraiso = __webpack_require__(39);
	
	exports.paraiso = _interopRequire(_paraiso);
	
	var _pop = __webpack_require__(40);
	
	exports.pop = _interopRequire(_pop);
	
	var _railscasts = __webpack_require__(41);
	
	exports.railscasts = _interopRequire(_railscasts);
	
	var _shapeshifter = __webpack_require__(42);
	
	exports.shapeshifter = _interopRequire(_shapeshifter);
	
	var _solarized = __webpack_require__(43);
	
	exports.solarized = _interopRequire(_solarized);
	
	var _summerfruit = __webpack_require__(44);
	
	exports.summerfruit = _interopRequire(_summerfruit);
	
	var _tomorrow = __webpack_require__(45);
	
	exports.tomorrow = _interopRequire(_tomorrow);
	
	var _tube = __webpack_require__(46);
	
	exports.tube = _interopRequire(_tube);
	
	var _twilight = __webpack_require__(47);
	
	exports.twilight = _interopRequire(_twilight);

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'threezerotwofour',
	  author: 'jan t. sott (http://github.com/idleberg)',
	  base00: '#090300',
	  base01: '#3a3432',
	  base02: '#4a4543',
	  base03: '#5c5855',
	  base04: '#807d7c',
	  base05: '#a5a2a2',
	  base06: '#d6d5d4',
	  base07: '#f7f7f7',
	  base08: '#db2d20',
	  base09: '#e8bbd0',
	  base0A: '#fded02',
	  base0B: '#01a252',
	  base0C: '#b5e4f4',
	  base0D: '#01a0e4',
	  base0E: '#a16a94',
	  base0F: '#cdab53'
	};
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'apathy',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#031A16',
	  base01: '#0B342D',
	  base02: '#184E45',
	  base03: '#2B685E',
	  base04: '#5F9C92',
	  base05: '#81B5AC',
	  base06: '#A7CEC8',
	  base07: '#D2E7E4',
	  base08: '#3E9688',
	  base09: '#3E7996',
	  base0A: '#3E4C96',
	  base0B: '#883E96',
	  base0C: '#963E4C',
	  base0D: '#96883E',
	  base0E: '#4C963E',
	  base0F: '#3E965B'
	};
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'ashes',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#1C2023',
	  base01: '#393F45',
	  base02: '#565E65',
	  base03: '#747C84',
	  base04: '#ADB3BA',
	  base05: '#C7CCD1',
	  base06: '#DFE2E5',
	  base07: '#F3F4F5',
	  base08: '#C7AE95',
	  base09: '#C7C795',
	  base0A: '#AEC795',
	  base0B: '#95C7AE',
	  base0C: '#95AEC7',
	  base0D: '#AE95C7',
	  base0E: '#C795AE',
	  base0F: '#C79595'
	};
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier dune',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)',
	  base00: '#20201d',
	  base01: '#292824',
	  base02: '#6e6b5e',
	  base03: '#7d7a68',
	  base04: '#999580',
	  base05: '#a6a28c',
	  base06: '#e8e4cf',
	  base07: '#fefbec',
	  base08: '#d73737',
	  base09: '#b65611',
	  base0A: '#cfb017',
	  base0B: '#60ac39',
	  base0C: '#1fad83',
	  base0D: '#6684e1',
	  base0E: '#b854d4',
	  base0F: '#d43552'
	};
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier forest',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)',
	  base00: '#1b1918',
	  base01: '#2c2421',
	  base02: '#68615e',
	  base03: '#766e6b',
	  base04: '#9c9491',
	  base05: '#a8a19f',
	  base06: '#e6e2e0',
	  base07: '#f1efee',
	  base08: '#f22c40',
	  base09: '#df5320',
	  base0A: '#d5911a',
	  base0B: '#5ab738',
	  base0C: '#00ad9c',
	  base0D: '#407ee7',
	  base0E: '#6666ea',
	  base0F: '#c33ff3'
	};
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier heath',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)',
	  base00: '#1b181b',
	  base01: '#292329',
	  base02: '#695d69',
	  base03: '#776977',
	  base04: '#9e8f9e',
	  base05: '#ab9bab',
	  base06: '#d8cad8',
	  base07: '#f7f3f7',
	  base08: '#ca402b',
	  base09: '#a65926',
	  base0A: '#bb8a35',
	  base0B: '#379a37',
	  base0C: '#159393',
	  base0D: '#516aec',
	  base0E: '#7b59c0',
	  base0F: '#cc33cc'
	};
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier lakeside',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)',
	  base00: '#161b1d',
	  base01: '#1f292e',
	  base02: '#516d7b',
	  base03: '#5a7b8c',
	  base04: '#7195a8',
	  base05: '#7ea2b4',
	  base06: '#c1e4f6',
	  base07: '#ebf8ff',
	  base08: '#d22d72',
	  base09: '#935c25',
	  base0A: '#8a8a0f',
	  base0B: '#568c3b',
	  base0C: '#2d8f6f',
	  base0D: '#257fad',
	  base0E: '#5d5db1',
	  base0F: '#b72dd2'
	};
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier seaside',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)',
	  base00: '#131513',
	  base01: '#242924',
	  base02: '#5e6e5e',
	  base03: '#687d68',
	  base04: '#809980',
	  base05: '#8ca68c',
	  base06: '#cfe8cf',
	  base07: '#f0fff0',
	  base08: '#e6193c',
	  base09: '#87711d',
	  base0A: '#c3c322',
	  base0B: '#29a329',
	  base0C: '#1999b3',
	  base0D: '#3d62f5',
	  base0E: '#ad2bee',
	  base0F: '#e619c3'
	};
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'bespin',
	  author: 'jan t. sott',
	  base00: '#28211c',
	  base01: '#36312e',
	  base02: '#5e5d5c',
	  base03: '#666666',
	  base04: '#797977',
	  base05: '#8a8986',
	  base06: '#9d9b97',
	  base07: '#baae9e',
	  base08: '#cf6a4c',
	  base09: '#cf7d34',
	  base0A: '#f9ee98',
	  base0B: '#54be0d',
	  base0C: '#afc4db',
	  base0D: '#5ea6ea',
	  base0E: '#9b859d',
	  base0F: '#937121'
	};
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'brewer',
	  author: 'timothée poisot (http://github.com/tpoisot)',
	  base00: '#0c0d0e',
	  base01: '#2e2f30',
	  base02: '#515253',
	  base03: '#737475',
	  base04: '#959697',
	  base05: '#b7b8b9',
	  base06: '#dadbdc',
	  base07: '#fcfdfe',
	  base08: '#e31a1c',
	  base09: '#e6550d',
	  base0A: '#dca060',
	  base0B: '#31a354',
	  base0C: '#80b1d3',
	  base0D: '#3182bd',
	  base0E: '#756bb1',
	  base0F: '#b15928'
	};
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'bright',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#000000',
	  base01: '#303030',
	  base02: '#505050',
	  base03: '#b0b0b0',
	  base04: '#d0d0d0',
	  base05: '#e0e0e0',
	  base06: '#f5f5f5',
	  base07: '#ffffff',
	  base08: '#fb0120',
	  base09: '#fc6d24',
	  base0A: '#fda331',
	  base0B: '#a1c659',
	  base0C: '#76c7b7',
	  base0D: '#6fb3d2',
	  base0E: '#d381c3',
	  base0F: '#be643c'
	};
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'chalk',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#151515',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#b0b0b0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#f5f5f5',
	  base08: '#fb9fb1',
	  base09: '#eda987',
	  base0A: '#ddb26f',
	  base0B: '#acc267',
	  base0C: '#12cfc0',
	  base0D: '#6fc2ef',
	  base0E: '#e1a3ee',
	  base0F: '#deaf8f'
	};
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'codeschool',
	  author: 'brettof86',
	  base00: '#232c31',
	  base01: '#1c3657',
	  base02: '#2a343a',
	  base03: '#3f4944',
	  base04: '#84898c',
	  base05: '#9ea7a6',
	  base06: '#a7cfa3',
	  base07: '#b5d8f6',
	  base08: '#2a5491',
	  base09: '#43820d',
	  base0A: '#a03b1e',
	  base0B: '#237986',
	  base0C: '#b02f30',
	  base0D: '#484d79',
	  base0E: '#c59820',
	  base0F: '#c98344'
	};
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'colors',
	  author: 'mrmrs (http://clrs.cc)',
	  base00: '#111111',
	  base01: '#333333',
	  base02: '#555555',
	  base03: '#777777',
	  base04: '#999999',
	  base05: '#bbbbbb',
	  base06: '#dddddd',
	  base07: '#ffffff',
	  base08: '#ff4136',
	  base09: '#ff851b',
	  base0A: '#ffdc00',
	  base0B: '#2ecc40',
	  base0C: '#7fdbff',
	  base0D: '#0074d9',
	  base0E: '#b10dc9',
	  base0F: '#85144b'
	};
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'default',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#181818',
	  base01: '#282828',
	  base02: '#383838',
	  base03: '#585858',
	  base04: '#b8b8b8',
	  base05: '#d8d8d8',
	  base06: '#e8e8e8',
	  base07: '#f8f8f8',
	  base08: '#ab4642',
	  base09: '#dc9656',
	  base0A: '#f7ca88',
	  base0B: '#a1b56c',
	  base0C: '#86c1b9',
	  base0D: '#7cafc2',
	  base0E: '#ba8baf',
	  base0F: '#a16946'
	};
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'eighties',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2d2d2d',
	  base01: '#393939',
	  base02: '#515151',
	  base03: '#747369',
	  base04: '#a09f93',
	  base05: '#d3d0c8',
	  base06: '#e8e6df',
	  base07: '#f2f0ec',
	  base08: '#f2777a',
	  base09: '#f99157',
	  base0A: '#ffcc66',
	  base0B: '#99cc99',
	  base0C: '#66cccc',
	  base0D: '#6699cc',
	  base0E: '#cc99cc',
	  base0F: '#d27b53'
	};
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'embers',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#16130F',
	  base01: '#2C2620',
	  base02: '#433B32',
	  base03: '#5A5047',
	  base04: '#8A8075',
	  base05: '#A39A90',
	  base06: '#BEB6AE',
	  base07: '#DBD6D1',
	  base08: '#826D57',
	  base09: '#828257',
	  base0A: '#6D8257',
	  base0B: '#57826D',
	  base0C: '#576D82',
	  base0D: '#6D5782',
	  base0E: '#82576D',
	  base0F: '#825757'
	};
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'flat',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2C3E50',
	  base01: '#34495E',
	  base02: '#7F8C8D',
	  base03: '#95A5A6',
	  base04: '#BDC3C7',
	  base05: '#e0e0e0',
	  base06: '#f5f5f5',
	  base07: '#ECF0F1',
	  base08: '#E74C3C',
	  base09: '#E67E22',
	  base0A: '#F1C40F',
	  base0B: '#2ECC71',
	  base0C: '#1ABC9C',
	  base0D: '#3498DB',
	  base0E: '#9B59B6',
	  base0F: '#be643c'
	};
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'google',
	  author: 'seth wright (http://sethawright.com)',
	  base00: '#1d1f21',
	  base01: '#282a2e',
	  base02: '#373b41',
	  base03: '#969896',
	  base04: '#b4b7b4',
	  base05: '#c5c8c6',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#CC342B',
	  base09: '#F96A38',
	  base0A: '#FBA922',
	  base0B: '#198844',
	  base0C: '#3971ED',
	  base0D: '#3971ED',
	  base0E: '#A36AC7',
	  base0F: '#3971ED'
	};
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'grayscale',
	  author: 'alexandre gavioli (https://github.com/alexx2/)',
	  base00: '#101010',
	  base01: '#252525',
	  base02: '#464646',
	  base03: '#525252',
	  base04: '#ababab',
	  base05: '#b9b9b9',
	  base06: '#e3e3e3',
	  base07: '#f7f7f7',
	  base08: '#7c7c7c',
	  base09: '#999999',
	  base0A: '#a0a0a0',
	  base0B: '#8e8e8e',
	  base0C: '#868686',
	  base0D: '#686868',
	  base0E: '#747474',
	  base0F: '#5e5e5e'
	};
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'green screen',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#001100',
	  base01: '#003300',
	  base02: '#005500',
	  base03: '#007700',
	  base04: '#009900',
	  base05: '#00bb00',
	  base06: '#00dd00',
	  base07: '#00ff00',
	  base08: '#007700',
	  base09: '#009900',
	  base0A: '#007700',
	  base0B: '#00bb00',
	  base0C: '#005500',
	  base0D: '#009900',
	  base0E: '#00bb00',
	  base0F: '#005500'
	};
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'harmonic16',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#0b1c2c',
	  base01: '#223b54',
	  base02: '#405c79',
	  base03: '#627e99',
	  base04: '#aabcce',
	  base05: '#cbd6e2',
	  base06: '#e5ebf1',
	  base07: '#f7f9fb',
	  base08: '#bf8b56',
	  base09: '#bfbf56',
	  base0A: '#8bbf56',
	  base0B: '#56bf8b',
	  base0C: '#568bbf',
	  base0D: '#8b56bf',
	  base0E: '#bf568b',
	  base0F: '#bf5656'
	};
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'hopscotch',
	  author: 'jan t. sott',
	  base00: '#322931',
	  base01: '#433b42',
	  base02: '#5c545b',
	  base03: '#797379',
	  base04: '#989498',
	  base05: '#b9b5b8',
	  base06: '#d5d3d5',
	  base07: '#ffffff',
	  base08: '#dd464c',
	  base09: '#fd8b19',
	  base0A: '#fdcc59',
	  base0B: '#8fc13e',
	  base0C: '#149b93',
	  base0D: '#1290bf',
	  base0E: '#c85e7c',
	  base0F: '#b33508'
	};
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'isotope',
	  author: 'jan t. sott',
	  base00: '#000000',
	  base01: '#404040',
	  base02: '#606060',
	  base03: '#808080',
	  base04: '#c0c0c0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#ff0000',
	  base09: '#ff9900',
	  base0A: '#ff0099',
	  base0B: '#33ff00',
	  base0C: '#00ffff',
	  base0D: '#0066ff',
	  base0E: '#cc00ff',
	  base0F: '#3300ff'
	};
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'marrakesh',
	  author: 'alexandre gavioli (http://github.com/alexx2/)',
	  base00: '#201602',
	  base01: '#302e00',
	  base02: '#5f5b17',
	  base03: '#6c6823',
	  base04: '#86813b',
	  base05: '#948e48',
	  base06: '#ccc37a',
	  base07: '#faf0a5',
	  base08: '#c35359',
	  base09: '#b36144',
	  base0A: '#a88339',
	  base0B: '#18974e',
	  base0C: '#75a738',
	  base0D: '#477ca1',
	  base0E: '#8868b3',
	  base0F: '#b3588e'
	};
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'mocha',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#3B3228',
	  base01: '#534636',
	  base02: '#645240',
	  base03: '#7e705a',
	  base04: '#b8afad',
	  base05: '#d0c8c6',
	  base06: '#e9e1dd',
	  base07: '#f5eeeb',
	  base08: '#cb6077',
	  base09: '#d28b71',
	  base0A: '#f4bc87',
	  base0B: '#beb55b',
	  base0C: '#7bbda4',
	  base0D: '#8ab3b5',
	  base0E: '#a89bb9',
	  base0F: '#bb9584'
	};
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'monokai',
	  author: 'wimer hazenberg (http://www.monokai.nl)',
	  base00: '#272822',
	  base01: '#383830',
	  base02: '#49483e',
	  base03: '#75715e',
	  base04: '#a59f85',
	  base05: '#f8f8f2',
	  base06: '#f5f4f1',
	  base07: '#f9f8f5',
	  base08: '#f92672',
	  base09: '#fd971f',
	  base0A: '#f4bf75',
	  base0B: '#a6e22e',
	  base0C: '#a1efe4',
	  base0D: '#66d9ef',
	  base0E: '#ae81ff',
	  base0F: '#cc6633'
	};
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'ocean',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2b303b',
	  base01: '#343d46',
	  base02: '#4f5b66',
	  base03: '#65737e',
	  base04: '#a7adba',
	  base05: '#c0c5ce',
	  base06: '#dfe1e8',
	  base07: '#eff1f5',
	  base08: '#bf616a',
	  base09: '#d08770',
	  base0A: '#ebcb8b',
	  base0B: '#a3be8c',
	  base0C: '#96b5b4',
	  base0D: '#8fa1b3',
	  base0E: '#b48ead',
	  base0F: '#ab7967'
	};
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'paraiso',
	  author: 'jan t. sott',
	  base00: '#2f1e2e',
	  base01: '#41323f',
	  base02: '#4f424c',
	  base03: '#776e71',
	  base04: '#8d8687',
	  base05: '#a39e9b',
	  base06: '#b9b6b0',
	  base07: '#e7e9db',
	  base08: '#ef6155',
	  base09: '#f99b15',
	  base0A: '#fec418',
	  base0B: '#48b685',
	  base0C: '#5bc4bf',
	  base0D: '#06b6ef',
	  base0E: '#815ba4',
	  base0F: '#e96ba8'
	};
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'pop',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#000000',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#b0b0b0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#eb008a',
	  base09: '#f29333',
	  base0A: '#f8ca12',
	  base0B: '#37b349',
	  base0C: '#00aabb',
	  base0D: '#0e5a94',
	  base0E: '#b31e8d',
	  base0F: '#7a2d00'
	};
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'railscasts',
	  author: 'ryan bates (http://railscasts.com)',
	  base00: '#2b2b2b',
	  base01: '#272935',
	  base02: '#3a4055',
	  base03: '#5a647e',
	  base04: '#d4cfc9',
	  base05: '#e6e1dc',
	  base06: '#f4f1ed',
	  base07: '#f9f7f3',
	  base08: '#da4939',
	  base09: '#cc7833',
	  base0A: '#ffc66d',
	  base0B: '#a5c261',
	  base0C: '#519f50',
	  base0D: '#6d9cbe',
	  base0E: '#b6b3eb',
	  base0F: '#bc9458'
	};
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'shapeshifter',
	  author: 'tyler benziger (http://tybenz.com)',
	  base00: '#000000',
	  base01: '#040404',
	  base02: '#102015',
	  base03: '#343434',
	  base04: '#555555',
	  base05: '#ababab',
	  base06: '#e0e0e0',
	  base07: '#f9f9f9',
	  base08: '#e92f2f',
	  base09: '#e09448',
	  base0A: '#dddd13',
	  base0B: '#0ed839',
	  base0C: '#23edda',
	  base0D: '#3b48e3',
	  base0E: '#f996e2',
	  base0F: '#69542d'
	};
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'solarized',
	  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
	  base00: '#002b36',
	  base01: '#073642',
	  base02: '#586e75',
	  base03: '#657b83',
	  base04: '#839496',
	  base05: '#93a1a1',
	  base06: '#eee8d5',
	  base07: '#fdf6e3',
	  base08: '#dc322f',
	  base09: '#cb4b16',
	  base0A: '#b58900',
	  base0B: '#859900',
	  base0C: '#2aa198',
	  base0D: '#268bd2',
	  base0E: '#6c71c4',
	  base0F: '#d33682'
	};
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'summerfruit',
	  author: 'christopher corley (http://cscorley.github.io/)',
	  base00: '#151515',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#B0B0B0',
	  base05: '#D0D0D0',
	  base06: '#E0E0E0',
	  base07: '#FFFFFF',
	  base08: '#FF0086',
	  base09: '#FD8900',
	  base0A: '#ABA800',
	  base0B: '#00C918',
	  base0C: '#1faaaa',
	  base0D: '#3777E6',
	  base0E: '#AD00A1',
	  base0F: '#cc6633'
	};
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'tomorrow',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#1d1f21',
	  base01: '#282a2e',
	  base02: '#373b41',
	  base03: '#969896',
	  base04: '#b4b7b4',
	  base05: '#c5c8c6',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#cc6666',
	  base09: '#de935f',
	  base0A: '#f0c674',
	  base0B: '#b5bd68',
	  base0C: '#8abeb7',
	  base0D: '#81a2be',
	  base0E: '#b294bb',
	  base0F: '#a3685a'
	};
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'london tube',
	  author: 'jan t. sott',
	  base00: '#231f20',
	  base01: '#1c3f95',
	  base02: '#5a5758',
	  base03: '#737171',
	  base04: '#959ca1',
	  base05: '#d9d8d8',
	  base06: '#e7e7e8',
	  base07: '#ffffff',
	  base08: '#ee2e24',
	  base09: '#f386a1',
	  base0A: '#ffd204',
	  base0B: '#00853e',
	  base0C: '#85cebc',
	  base0D: '#009ddc',
	  base0E: '#98005d',
	  base0F: '#b06110'
	};
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'twilight',
	  author: 'david hart (http://hart-dev.com)',
	  base00: '#1e1e1e',
	  base01: '#323537',
	  base02: '#464b50',
	  base03: '#5f5a60',
	  base04: '#838184',
	  base05: '#a7a7a7',
	  base06: '#c3c3c3',
	  base07: '#ffffff',
	  base08: '#cf6a4c',
	  base09: '#cda869',
	  base0A: '#f9ee98',
	  base0B: '#8f9d6a',
	  base0C: '#afc4db',
	  base0D: '#7587a6',
	  base0E: '#9b859d',
	  base0F: '#9b703f'
	};
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'nicinabox',
	  author: 'nicinabox (http://github.com/nicinabox)',
	  base00: '#2A2F3A',
	  base01: '#3C444F',
	  base02: '#4F5A65',
	  base03: '#BEBEBE',
	  base04: '#b0b0b0', // based on ocean theme
	  base05: '#d0d0d0', // based on ocean theme
	  base06: '#FFFFFF',
	  base07: '#f5f5f5', // based on ocean theme
	  base08: '#fb9fb1', // based on ocean theme
	  base09: '#FC6D24',
	  base0A: '#ddb26f', // based on ocean theme
	  base0B: '#A1C659',
	  base0C: '#12cfc0', // based on ocean theme
	  base0D: '#6FB3D2',
	  base0E: '#D381C3',
	  base0F: '#deaf8f' // based on ocean theme
	};
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodashDebounce = __webpack_require__(50);
	
	var _lodashDebounce2 = _interopRequireDefault(_lodashDebounce);
	
	var _actions = __webpack_require__(5);
	
	var DEBOUNCE_TIME = 250;
	
	var ActionFilter = (function (_Component) {
	  _inherits(ActionFilter, _Component);
	
	  _createClass(ActionFilter, null, [{
	    key: 'propTypes',
	    value: {
	      actionFilterText: _react.PropTypes.string,
	      dispatch: _react.PropTypes.func.isRequired,
	      theme: _react.PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);
	
	  function ActionFilter(props) {
	    _classCallCheck(this, ActionFilter);
	
	    _get(Object.getPrototypeOf(ActionFilter.prototype), 'constructor', this).call(this, props);
	
	    this._debouncedOnActionFilterTextChange = (0, _lodashDebounce2['default'])(this._onActionFilterTextChange.bind(this), DEBOUNCE_TIME);
	  }
	
	  _createClass(ActionFilter, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var actionFilterText = _props.actionFilterText;
	      var theme = _props.theme;
	
	      return _react2['default'].createElement(
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
	        _react2['default'].createElement('input', {
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
	})(_react.Component);
	
	exports['default'] = ActionFilter;
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(51);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeNow = getNative(Date, 'now');
	
	/**
	 * Gets the number of milliseconds that have elapsed since the Unix epoch
	 * (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @category Date
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = nativeNow || function() {
	  return new Date().getTime();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed invocations. Provide an options object to indicate that `func`
	 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	 * Subsequent calls to the debounced function return the result of the last
	 * `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	 *  delayed before it is invoked.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // avoid costly calculations while the window size is in flux
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // ensure `batchLog` is invoked once after 1 second of debounced calls
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', _.debounce(batchLog, 250, {
	 *   'maxWait': 1000
	 * }));
	 *
	 * // cancel a debounced call
	 * var todoChanges = _.debounce(batchLog, 1000);
	 * Object.observe(models.todo, todoChanges);
	 *
	 * Object.observe(models, function(changes) {
	 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	 *     todoChanges.cancel();
	 *   }
	 * }, ['delete']);
	 *
	 * // ...at some point `models.todo` is changed
	 * models.todo.completed = true;
	 *
	 * // ...before 1 second has passed `models.todo` is deleted
	 * // which cancels the debounced `todoChanges` call
	 * delete models.todo;
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      maxWait = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = wait < 0 ? 0 : (+wait || 0);
	  if (options === true) {
	    var leading = true;
	    trailing = false;
	  } else if (isObject(options)) {
	    leading = !!options.leading;
	    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    lastCalled = 0;
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	  }
	
	  function complete(isCalled, id) {
	    if (id) {
	      clearTimeout(id);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (isCalled) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = undefined;
	      }
	    }
	  }
	
	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      complete(trailingCall, maxTimeoutId);
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }
	
	  function maxDelayed() {
	    complete(trailing, timeoutId);
	  }
	
	  function debounced() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);
	
	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled),
	          isCalled = remaining <= 0 || remaining > maxWait;
	
	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      }
	      else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    }
	    else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = undefined;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  return debounced;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = debounce;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = getNative;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = FilterableState;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactJsonTree = __webpack_require__(53);
	
	var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);
	
	var _FilterHeader = __webpack_require__(70);
	
	var _FilterHeader2 = _interopRequireDefault(_FilterHeader);
	
	var _reactHighlighter = __webpack_require__(79);
	
	var _reactHighlighter2 = _interopRequireDefault(_reactHighlighter);
	
	var _utils = __webpack_require__(6);
	
	function highlightMatches(filterText, value) {
	  return _react2['default'].createElement(
	    _reactHighlighter2['default'],
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
	
	  return _react2['default'].createElement(
	    'div',
	    {
	      style: {
	        borderBottom: '1px solid ' + theme.base00
	      }
	    },
	    _react2['default'].createElement(_FilterHeader2['default'], {
	      action: action,
	      actionId: actionId,
	      dispatch: dispatch,
	      monitorStateAction: monitorStateAction,
	      theme: theme
	    }),
	    expanded && data.map(function (data, index) {
	      return _react2['default'].createElement(
	        'div',
	        { key: index },
	        _react2['default'].createElement(
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
	        _react2['default'].createElement(_reactJsonTree2['default'], {
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
	
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _class, _temp; // ES6 + inline style port of JSONViewer https://bitbucket.org/davevedder/react-json-viewer/
	// all credits and original code to the author
	// Dave Vedder <veddermatic@gmail.com> http://www.eskimospy.com/
	// port by Daniele Zannotti http://www.github.com/dzannotti <dzannotti@me.com>
	
	exports.__esModule = true;
	exports.default = undefined;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _grabNode = __webpack_require__(54);
	
	var _grabNode2 = _interopRequireDefault(_grabNode);
	
	var _solarized = __webpack_require__(69);
	
	var _solarized2 = _interopRequireDefault(_solarized);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  tree: {
	    border: 0,
	    padding: 0,
	    marginTop: 8,
	    marginBottom: 8,
	    marginLeft: 2,
	    marginRight: 0,
	    fontSize: '0.90em',
	    listStyle: 'none',
	    MozUserSelect: 'none',
	    WebkitUserSelect: 'none'
	  }
	};
	
	var getEmptyStyle = function getEmptyStyle() {
	  return {};
	};
	var identity = function identity(value) {
	  return value;
	};
	
	var JSONTree = (_temp = _class = function (_React$Component) {
	  _inherits(JSONTree, _React$Component);
	
	  function JSONTree(props) {
	    _classCallCheck(this, JSONTree);
	
	    return _possibleConstructorReturn(this, _React$Component.call(this, props));
	  }
	
	  JSONTree.prototype.render = function render() {
	    var getStyles = {
	      getArrowStyle: this.props.getArrowStyle,
	      getListStyle: this.props.getListStyle,
	      getItemStringStyle: this.props.getItemStringStyle,
	      getLabelStyle: this.props.getLabelStyle,
	      getValueStyle: this.props.getValueStyle
	    };
	
	    var _props = this.props;
	    var value = _props.data;
	    var initialExpanded = _props.expandRoot;
	    var allExpanded = _props.expandAll;
	    var getItemString = _props.getItemString;
	    var labelRenderer = _props.labelRenderer;
	    var valueRenderer = _props.valueRenderer;
	    var key = _props.keyName;
	    var previousData = _props.previousData;
	    var theme = _props.theme;
	
	    var rootNode = (0, _grabNode2.default)({
	      getItemString: getItemString,
	      initialExpanded: initialExpanded,
	      allExpanded: allExpanded,
	      key: key,
	      previousData: previousData,
	      styles: getStyles,
	      theme: theme,
	      labelRenderer: labelRenderer,
	      value: value,
	      valueRenderer: valueRenderer
	    });
	
	    return _react2.default.createElement(
	      'ul',
	      { style: _extends({}, styles.tree, this.props.style) },
	      rootNode
	    );
	  };
	
	  return JSONTree;
	}(_react2.default.Component), _class.propTypes = {
	  data: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.object]).isRequired
	}, _class.defaultProps = {
	  expandRoot: true,
	  expandAll: false,
	  keyName: 'root',
	  theme: _solarized2.default,
	  getArrowStyle: getEmptyStyle,
	  getListStyle: getEmptyStyle,
	  getItemStringStyle: getEmptyStyle,
	  getLabelStyle: getEmptyStyle,
	  getValueStyle: getEmptyStyle,
	  getItemString: function getItemString(type, data, itemType, itemString) {
	    return _react2.default.createElement(
	      'span',
	      null,
	      itemType,
	      ' ',
	      itemString
	    );
	  },
	  labelRenderer: identity,
	  valueRenderer: identity
	}, _temp);
	exports.default = JSONTree;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	exports.default = function (_ref) {
	  var getItemString = _ref.getItemString;
	  var _ref$initialExpanded = _ref.initialExpanded;
	  var initialExpanded = _ref$initialExpanded === undefined ? false : _ref$initialExpanded;
	  var allExpanded = _ref.allExpanded;
	  var key = _ref.key;
	  var labelRenderer = _ref.labelRenderer;
	  var previousData = _ref.previousData;
	  var styles = _ref.styles;
	  var theme = _ref.theme;
	  var value = _ref.value;
	  var valueRenderer = _ref.valueRenderer;
	
	  var nodeType = (0, _objType2.default)(value);
	
	  var simpleNodeProps = {
	    getItemString: getItemString,
	    initialExpanded: initialExpanded,
	    key: key,
	    keyName: key,
	    labelRenderer: labelRenderer,
	    nodeType: nodeType,
	    previousData: previousData,
	    styles: styles,
	    theme: theme,
	    value: value,
	    valueRenderer: valueRenderer
	  };
	
	  var nestedNodeProps = _extends({}, simpleNodeProps, {
	    data: value,
	    initialExpanded: initialExpanded,
	    allExpanded: allExpanded,
	    keyName: key
	  });
	
	  switch (nodeType) {
	    case 'Object':
	      return _react2.default.createElement(_JSONObjectNode2.default, nestedNodeProps);
	    case 'Array':
	      return _react2.default.createElement(_JSONArrayNode2.default, nestedNodeProps);
	    case 'Iterable':
	      return _react2.default.createElement(_JSONIterableNode2.default, nestedNodeProps);
	    case 'String':
	      return _react2.default.createElement(_JSONValueNode2.default, _extends({}, simpleNodeProps, { valueColor: theme.base0B, valueGetter: function valueGetter(raw) {
	          return '"' + raw + '"';
	        } }));
	    case 'Number':
	      return _react2.default.createElement(_JSONValueNode2.default, _extends({}, simpleNodeProps, { valueColor: theme.base09 }));
	    case 'Boolean':
	      return _react2.default.createElement(_JSONValueNode2.default, _extends({}, simpleNodeProps, { valueColor: theme.base09, valueGetter: function valueGetter(raw) {
	          return raw ? 'true' : 'false';
	        } }));
	    case 'Date':
	      return _react2.default.createElement(_JSONValueNode2.default, _extends({}, simpleNodeProps, { valueColor: theme.base0B, valueGetter: function valueGetter(raw) {
	          return raw.toISOString();
	        } }));
	    case 'Null':
	      return _react2.default.createElement(_JSONValueNode2.default, _extends({}, simpleNodeProps, { valueColor: theme.base08, valueGetter: function valueGetter() {
	          return 'null';
	        } }));
	    case 'Undefined':
	      return _react2.default.createElement(_JSONValueNode2.default, _extends({}, simpleNodeProps, { valueColor: theme.base08, valueGetter: function valueGetter() {
	          return 'undefined';
	        } }));
	    case 'Function':
	      return _react2.default.createElement(_JSONValueNode2.default, _extends({}, simpleNodeProps, { valueColor: theme.base08, valueGetter: function valueGetter(raw) {
	          return raw.toString();
	        } }));
	    default:
	      return false;
	  }
	};
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objType = __webpack_require__(55);
	
	var _objType2 = _interopRequireDefault(_objType);
	
	var _JSONObjectNode = __webpack_require__(56);
	
	var _JSONObjectNode2 = _interopRequireDefault(_JSONObjectNode);
	
	var _JSONArrayNode = __webpack_require__(65);
	
	var _JSONArrayNode2 = _interopRequireDefault(_JSONArrayNode);
	
	var _JSONIterableNode = __webpack_require__(66);
	
	var _JSONIterableNode2 = _interopRequireDefault(_JSONIterableNode);
	
	var _JSONValueNode = __webpack_require__(67);
	
	var _JSONValueNode2 = _interopRequireDefault(_JSONValueNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.__esModule = true;
	
	exports.default = function (obj) {
	  if (obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !Array.isArray(obj) && typeof obj[Symbol.iterator] === 'function') {
	    return 'Iterable';
	  }
	  return Object.prototype.toString.call(obj).slice(8, -1);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	exports.default = function (_ref3) {
	  var props = _objectWithoutProperties(_ref3, []);
	
	  return _react2.default.createElement(_JSONNestedNode2.default, _extends({}, props, {
	    getChildNodes: getChildNodes,
	    nodeType: 'Object',
	    nodeTypeIndicator: '{}',
	    renderItemString: renderItemString
	  }));
	};
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _JSONNestedNode = __webpack_require__(57);
	
	var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);
	
	var _grabNode = __webpack_require__(54);
	
	var _grabNode2 = _interopRequireDefault(_grabNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	// Returns the "n Items" string for this node, generating and caching it if it hasn't been created yet.
	function renderItemString(_ref) {
	  var data = _ref.data;
	  var getItemString = _ref.getItemString;
	  var itemString = _ref.itemString;
	  var itemType = _ref.itemType;
	
	  if (!itemString) {
	    var len = Object.keys(data).length;
	    itemString = len + ' key' + (len !== 1 ? 's' : '');
	  }
	  return getItemString('Object', data, itemType, itemString);
	}
	
	// Returns the child nodes for each entry in iterable.
	// If we have generated them previously we return from cache; otherwise we create them.
	function getChildNodes(_ref2) {
	  var data = _ref2.data;
	  var getItemString = _ref2.getItemString;
	  var labelRenderer = _ref2.labelRenderer;
	  var previousData = _ref2.previousData;
	  var styles = _ref2.styles;
	  var theme = _ref2.theme;
	  var valueRenderer = _ref2.valueRenderer;
	  var allExpanded = _ref2.allExpanded;
	
	  var childNodes = [];
	  for (var key in data) {
	    if (Object.getPrototypeOf(data) === null || data.hasOwnProperty(key)) {
	      var previousDataValue = undefined;
	      if (typeof previousData !== 'undefined' && previousData !== null) {
	        previousDataValue = previousData[key];
	      }
	
	      var node = (0, _grabNode2.default)({
	        getItemString: getItemString,
	        key: key,
	        labelRenderer: labelRenderer,
	        previousData: previousDataValue,
	        renderItemString: renderItemString,
	        styles: styles,
	        theme: theme,
	        value: data[key],
	        valueRenderer: valueRenderer,
	        allExpanded: allExpanded
	      });
	
	      if (node !== false) {
	        childNodes.push(node);
	      }
	    }
	  }
	
	  return childNodes;
	}
	
	// Configures <JSONNestedNode> to render an Object

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _dec, _class;
	
	exports.__esModule = true;
	exports.default = undefined;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(58);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(61);
	
	var _JSONArrow = __webpack_require__(64);
	
	var _JSONArrow2 = _interopRequireDefault(_JSONArrow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Renders nested values (eg. objects, arrays, lists, etc.)
	 */
	
	var styles = {
	  base: {
	    position: 'relative',
	    paddingTop: 3,
	    paddingBottom: 3,
	    marginLeft: 14
	  },
	  label: {
	    margin: 0,
	    padding: 0,
	    display: 'inline-block'
	  },
	  span: {
	    cursor: 'default'
	  },
	  spanType: {
	    marginLeft: 5,
	    marginRight: 5
	  }
	};
	
	var JSONNestedNode = (_dec = _reactMixin2.default.decorate(_mixins.ExpandedStateHandlerMixin), _dec(_class = function (_React$Component) {
	  _inherits(JSONNestedNode, _React$Component);
	
	  // flag to see if we still need to render our child nodes
	
	  function JSONNestedNode(props) {
	    _classCallCheck(this, JSONNestedNode);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.defaultProps = {
	      data: [],
	      initialExpanded: false,
	      allExpanded: false
	    };
	    _this.itemString = false;
	    _this.needsChildNodes = true;
	    _this.renderedChildren = [];
	
	    _this.state = {
	      expanded: _this.props.initialExpanded || _this.props.allExpanded,
	      createdChildNodes: false
	    };
	    return _this;
	  }
	
	  // cache store for our child nodes
	
	  // cache store for the number of items string we display
	
	  JSONNestedNode.prototype.render = function render() {
	    var childListStyle = {
	      padding: 0,
	      margin: 0,
	      listStyle: 'none',
	      display: this.state.expanded ? 'block' : 'none'
	    };
	    var containerStyle = undefined;
	    var spanStyle = _extends({}, styles.span, {
	      color: this.props.theme.base0B
	    });
	    containerStyle = _extends({}, styles.base);
	    if (this.state.expanded) {
	      spanStyle = _extends({}, spanStyle, {
	        color: this.props.theme.base03
	      });
	    }
	
	    if (this.state.expanded && this.needsChildNodes) {
	      this.needsChildNodes = false;
	      this.renderedChildren = this.props.getChildNodes(_extends({}, this.props));
	    }
	
	    var itemType = _react2.default.createElement(
	      'span',
	      { style: styles.spanType },
	      this.props.nodeTypeIndicator
	    );
	    var renderedItemString = this.props.renderItemString({
	      data: this.props.data,
	      getItemString: this.props.getItemString,
	      itemString: this.itemString,
	      itemType: itemType
	    });
	
	    return _react2.default.createElement(
	      'li',
	      { style: containerStyle },
	      _react2.default.createElement(_JSONArrow2.default, { theme: this.props.theme, open: this.state.expanded, onClick: this.handleClick.bind(this), style: this.props.styles.getArrowStyle(this.state.expanded) }),
	      _react2.default.createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle(this.props.nodeType, this.state.expanded)), onClick: this.handleClick.bind(this) },
	        this.props.labelRenderer(this.props.keyName),
	        ':'
	      ),
	      _react2.default.createElement(
	        'span',
	        { style: _extends({}, spanStyle, this.props.styles.getItemStringStyle(this.props.nodeType, this.state.expanded)), onClick: this.handleClick.bind(this) },
	        renderedItemString
	      ),
	      _react2.default.createElement(
	        'ul',
	        { style: _extends({}, childListStyle, this.props.styles.getListStyle(this.props.nodeType, this.state.expanded)) },
	        this.renderedChildren
	      )
	    );
	  };
	
	  return JSONNestedNode;
	}(_react2.default.Component)) || _class);
	exports.default = JSONNestedNode;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var mixin = __webpack_require__(59);
	var assign = __webpack_require__(60);
	
	var mixinProto = mixin({
	  // lifecycle stuff is as you'd expect
	  componentDidMount: mixin.MANY,
	  componentWillMount: mixin.MANY,
	  componentWillReceiveProps: mixin.MANY,
	  shouldComponentUpdate: mixin.ONCE,
	  componentWillUpdate: mixin.MANY,
	  componentDidUpdate: mixin.MANY,
	  componentWillUnmount: mixin.MANY,
	  getChildContext: mixin.MANY_MERGED
	});
	
	function setDefaultProps(reactMixin) {
	  var getDefaultProps = reactMixin.getDefaultProps;
	
	  if (getDefaultProps) {
	    reactMixin.defaultProps = getDefaultProps();
	
	    delete reactMixin.getDefaultProps;
	  }
	}
	
	function setInitialState(reactMixin) {
	  var getInitialState = reactMixin.getInitialState;
	  var componentWillMount = reactMixin.componentWillMount;
	
	  function applyInitialState(instance) {
	    var state = instance.state || {};
	    assign(state, getInitialState.call(instance));
	    instance.state = state;
	  }
	
	  if (getInitialState) {
	    if (!componentWillMount) {
	      reactMixin.componentWillMount = function() {
	        applyInitialState(this);
	      };
	    } else {
	      reactMixin.componentWillMount = function() {
	        applyInitialState(this);
	        componentWillMount.call(this);
	      };
	    }
	
	    delete reactMixin.getInitialState;
	  }
	}
	
	function mixinClass(reactClass, reactMixin) {
	  setDefaultProps(reactMixin);
	  setInitialState(reactMixin);
	
	  var prototypeMethods = {};
	  var staticProps = {};
	
	  Object.keys(reactMixin).forEach(function(key) {
	    if (key === 'mixins') {
	      return; // Handled below to ensure proper order regardless of property iteration order
	    }
	    if (key === 'statics') {
	      return; // gets special handling
	    } else if (typeof reactMixin[key] === 'function') {
	      prototypeMethods[key] = reactMixin[key];
	    } else {
	      staticProps[key] = reactMixin[key];
	    }
	  });
	
	  mixinProto(reactClass.prototype, prototypeMethods);
	
	  var mergePropTypes = function(left, right, key) {
	    if (!left) return right;
	    if (!right) return left;
	
	    var result = {};
	    Object.keys(left).forEach(function(leftKey) {
	      if (!right[leftKey]) {
	        result[leftKey] = left[leftKey];
	      }
	    });
	
	    Object.keys(right).forEach(function(rightKey) {
	      if (left[rightKey]) {
	        result[rightKey] = function checkBothContextTypes() {
	          return right[rightKey].apply(this, arguments) && left[rightKey].apply(this, arguments);
	        };
	      } else {
	        result[rightKey] = right[rightKey];
	      }
	    });
	
	    return result;
	  };
	
	  mixin({
	    childContextTypes: mergePropTypes,
	    contextTypes: mergePropTypes,
	    propTypes: mixin.MANY_MERGED_LOOSE,
	    defaultProps: mixin.MANY_MERGED_LOOSE
	  })(reactClass, staticProps);
	
	  // statics is a special case because it merges directly onto the class
	  if (reactMixin.statics) {
	    Object.getOwnPropertyNames(reactMixin.statics).forEach(function(key) {
	      var left = reactClass[key];
	      var right = reactMixin.statics[key];
	
	      if (left !== undefined && right !== undefined) {
	        throw new TypeError('Cannot mixin statics because statics.' + key + ' and Component.' + key + ' are defined.');
	      }
	
	      reactClass[key] = left !== undefined ? left : right;
	    });
	  }
	
	  // If more mixins are defined, they need to run. This emulate's react's behavior.
	  // See behavior in code at:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L468
	  // Note the .reverse(). In React, a fresh constructor is created, then all mixins are mixed in recursively,
	  // then the actual spec is mixed in last.
	  //
	  // With ES6 classes, the properties are already there, so smart-mixin mixes functions (a, b) -> b()a(), which is
	  // the opposite of how React does it. If we reverse this array, we basically do the whole logic in reverse,
	  // which makes the result the same. See the test for more.
	  // See also:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L853
	  if (reactMixin.mixins) {
	    reactMixin.mixins.reverse().forEach(mixinClass.bind(null, reactClass));
	  }
	
	  return reactClass;
	}
	
	module.exports = (function() {
	  var reactMixin = mixinProto;
	
	  reactMixin.onClass = function(reactClass, mixin) {
	    return mixinClass(reactClass, mixin);
	  };
	
	  reactMixin.decorate = function(mixin) {
	    return function(reactClass) {
	      return reactMixin.onClass(reactClass, mixin);
	    };
	  };
	
	  return reactMixin;
	})();


/***/ },
/* 59 */
/***/ function(module, exports) {

	var objToStr = function(x){ return Object.prototype.toString.call(x); };
	
	var thrower = function(error){
	    throw error;
	};
	
	var mixins = module.exports = function makeMixinFunction(rules, _opts){
	    var opts = _opts || {};
	    if (!opts.unknownFunction) {
	        opts.unknownFunction = mixins.ONCE;
	    }
	
	    if (!opts.nonFunctionProperty) {
	        opts.nonFunctionProperty = function(left, right, key){
	            if (left !== undefined && right !== undefined) {
	                var getTypeName = function(obj){
	                    if (obj && obj.constructor && obj.constructor.name) {
	                        return obj.constructor.name;
	                    }
	                    else {
	                        return objToStr(obj).slice(8, -1);
	                    }
	                };
	                throw new TypeError('Cannot mixin key ' + key + ' because it is provided by multiple sources, '
	                        + 'and the types are ' + getTypeName(left) + ' and ' + getTypeName(right));
	            }
	            return left === undefined ? right : left;
	        };
	    }
	
	    function setNonEnumerable(target, key, value){
	        if (key in target){
	            target[key] = value;
	        }
	        else {
	            Object.defineProperty(target, key, {
	                value: value,
	                writable: true,
	                configurable: true
	            });
	        }
	    }
	
	    return function applyMixin(source, mixin){
	        Object.keys(mixin).forEach(function(key){
	            var left = source[key], right = mixin[key], rule = rules[key];
	
	            // this is just a weird case where the key was defined, but there's no value
	            // behave like the key wasn't defined
	            if (left === undefined && right === undefined) return;
	
	            var wrapIfFunction = function(thing){
	                return typeof thing !== "function" ? thing
	                : function(){
	                    return thing.call(this, arguments);
	                };
	            };
	
	            // do we have a rule for this key?
	            if (rule) {
	                // may throw here
	                var fn = rule(left, right, key);
	                setNonEnumerable(source, key, wrapIfFunction(fn));
	                return;
	            }
	
	            var leftIsFn = typeof left === "function";
	            var rightIsFn = typeof right === "function";
	
	            // check to see if they're some combination of functions or undefined
	            // we already know there's no rule, so use the unknown function behavior
	            if (leftIsFn && right === undefined
	             || rightIsFn && left === undefined
	             || leftIsFn && rightIsFn) {
	                // may throw, the default is ONCE so if both are functions
	                // the default is to throw
	                setNonEnumerable(source, key, wrapIfFunction(opts.unknownFunction(left, right, key)));
	                return;
	            }
	
	            // we have no rule for them, one may be a function but one or both aren't
	            // our default is MANY_MERGED_LOOSE which will merge objects, concat arrays
	            // and throw if there's a type mismatch or both are primitives (how do you merge 3, and "foo"?)
	            source[key] = opts.nonFunctionProperty(left, right, key);
	        });
	    };
	};
	
	mixins._mergeObjects = function(obj1, obj2) {
	    var assertObject = function(obj, obj2){
	        var type = objToStr(obj);
	        if (type !== '[object Object]') {
	            var displayType = obj.constructor ? obj.constructor.name : 'Unknown';
	            var displayType2 = obj2.constructor ? obj2.constructor.name : 'Unknown';
	            thrower('cannot merge returned value of type ' + displayType + ' with an ' + displayType2);
	        }
	    };
	
	    if (Array.isArray(obj1) && Array.isArray(obj2)) {
	        return obj1.concat(obj2);
	    }
	
	    assertObject(obj1, obj2);
	    assertObject(obj2, obj1);
	
	    var result = {};
	    Object.keys(obj1).forEach(function(k){
	        if (Object.prototype.hasOwnProperty.call(obj2, k)) {
	            thrower('cannot merge returns because both have the ' + JSON.stringify(k) + ' key');
	        }
	        result[k] = obj1[k];
	    });
	
	    Object.keys(obj2).forEach(function(k){
	        // we can skip the conflict check because all conflicts would already be found
	        result[k] = obj2[k];
	    });
	    return result;
	
	}
	
	// define our built-in mixin types
	mixins.ONCE = function(left, right, key){
	    if (left && right) {
	        throw new TypeError('Cannot mixin ' + key + ' because it has a unique constraint.');
	    }
	
	    var fn = left || right;
	
	    return function(args){
	        return fn.apply(this, args);
	    };
	};
	
	mixins.MANY = function(left, right, key){
	    return function(args){
	        if (right) right.apply(this, args);
	        return left ? left.apply(this, args) : undefined;
	    };
	};
	
	mixins.MANY_MERGED_LOOSE = function(left, right, key) {
	    if(left && right) {
	        return mixins._mergeObjects(left, right);
	    }
	
	    return left || right;
	}
	
	mixins.MANY_MERGED = function(left, right, key){
	    return function(args){
	        var res1 = right && right.apply(this, args);
	        var res2 = left && left.apply(this, args);
	        if (res1 && res2) {
	            return mixins._mergeObjects(res1, res2)
	        }
	        return res2 || res1;
	    };
	};
	
	
	mixins.REDUCE_LEFT = function(_left, _right, key){
	    var left = _left || function(x){ return x };
	    var right = _right || function(x){ return x };
	    return function(args){
	        return right.call(this, left.apply(this, args));
	    };
	};
	
	mixins.REDUCE_RIGHT = function(_left, _right, key){
	    var left = _left || function(x){ return x };
	    var right = _right || function(x){ return x };
	    return function(args){
	        return left.call(this, right.apply(this, args));
	    };
	};
	


/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _squashClickEvent = __webpack_require__(62);
	
	Object.defineProperty(exports, 'SquashClickEventMixin', {
	  enumerable: true,
	  get: function get() {
	    return _squashClickEvent.default;
	  }
	});
	
	var _expandedStateHandler = __webpack_require__(63);
	
	Object.defineProperty(exports, 'ExpandedStateHandlerMixin', {
	  enumerable: true,
	  get: function get() {
	    return _expandedStateHandler.default;
	  }
	});

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = {
	  handleClick: function handleClick(e) {
	    e.stopPropagation();
	  }
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = {
	  handleClick: function handleClick(e) {
	    e.stopPropagation();
	    this.setState({
	      expanded: !this.state.expanded
	    });
	  },
	  componentWillReceiveProps: function componentWillReceiveProps() {
	    // resets our caches and flags we need to build child nodes again
	    this.renderedChildren = [];
	    this.itemString = false;
	    this.needsChildNodes = true;
	  }
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports.default = undefined;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  base: {
	    display: 'inline-block',
	    marginLeft: 0,
	    marginTop: 8,
	    marginRight: 5,
	    'float': 'left',
	    transition: '150ms',
	    WebkitTransition: '150ms',
	    MozTransition: '150ms',
	    borderLeft: '5px solid transparent',
	    borderRight: '5px solid transparent',
	    borderTopWidth: 5,
	    borderTopStyle: 'solid',
	    WebkitTransform: 'rotateZ(-90deg)',
	    MozTransform: 'rotateZ(-90deg)',
	    transform: 'rotateZ(-90deg)'
	  },
	  open: {
	    WebkitTransform: 'rotateZ(0deg)',
	    MozTransform: 'rotateZ(0deg)',
	    transform: 'rotateZ(0deg)'
	  }
	};
	
	var JSONArrow = function (_React$Component) {
	  _inherits(JSONArrow, _React$Component);
	
	  function JSONArrow() {
	    _classCallCheck(this, JSONArrow);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  JSONArrow.prototype.render = function render() {
	    var style = _extends({}, styles.base, {
	      borderTopColor: this.props.theme.base0D
	    });
	    if (this.props.open) {
	      style = _extends({}, style, styles.open);
	    }
	    style = _extends({}, style, this.props.style);
	    return _react2.default.createElement('div', { style: style, onClick: this.props.onClick });
	  };
	
	  return JSONArrow;
	}(_react2.default.Component);
	
	exports.default = JSONArrow;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports.default = JSONArrayNode;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _JSONNestedNode = __webpack_require__(57);
	
	var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);
	
	var _grabNode = __webpack_require__(54);
	
	var _grabNode2 = _interopRequireDefault(_grabNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	// Returns the "n Items" string for this node, generating and caching it if it hasn't been created yet.
	function renderItemString(_ref) {
	  var data = _ref.data;
	  var getItemString = _ref.getItemString;
	  var itemString = _ref.itemString;
	  var itemType = _ref.itemType;
	
	  if (!itemString) {
	    itemString = data.length + ' item' + (data.length !== 1 ? 's' : '');
	  }
	  return getItemString('Array', data, itemType, itemString);
	}
	
	// Returns the child nodes for each entry in iterable.
	// If we have generated them previously we return from cache; otherwise we create them.
	function getChildNodes(_ref2) {
	  var data = _ref2.data;
	  var getItemString = _ref2.getItemString;
	  var labelRenderer = _ref2.labelRenderer;
	  var previousData = _ref2.previousData;
	  var styles = _ref2.styles;
	  var theme = _ref2.theme;
	  var valueRenderer = _ref2.valueRenderer;
	  var allExpanded = _ref2.allExpanded;
	
	  var childNodes = [];
	  data.forEach(function (value, key) {
	    var previousDataValue = undefined;
	    if (typeof previousData !== 'undefined' && previousData !== null) {
	      previousDataValue = previousData[key];
	    }
	
	    var node = (0, _grabNode2.default)({
	      getItemString: getItemString,
	      key: key,
	      labelRenderer: labelRenderer,
	      previousData: previousDataValue,
	      renderItemString: renderItemString,
	      styles: styles,
	      theme: theme,
	      value: value,
	      valueRenderer: valueRenderer,
	      allExpanded: allExpanded
	    });
	
	    if (node !== false) {
	      childNodes.push(node);
	    }
	  });
	
	  return childNodes;
	}
	
	// Configures <JSONNestedNode> to render an Array
	function JSONArrayNode(_ref3) {
	  var props = _objectWithoutProperties(_ref3, []);
	
	  return _react2.default.createElement(_JSONNestedNode2.default, _extends({}, props, {
	    getChildNodes: getChildNodes,
	    nodeType: 'Array',
	    nodeTypeIndicator: '[]',
	    renderItemString: renderItemString
	  }));
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	exports.default = function (_ref5) {
	  var props = _objectWithoutProperties(_ref5, []);
	
	  return _react2.default.createElement(_JSONNestedNode2.default, _extends({}, props, {
	    getChildNodes: getChildNodes,
	    nodeType: 'Iterable',
	    nodeTypeIndicator: '()',
	    renderItemString: renderItemString
	  }));
	};
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _JSONNestedNode = __webpack_require__(57);
	
	var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);
	
	var _grabNode = __webpack_require__(54);
	
	var _grabNode2 = _interopRequireDefault(_grabNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	// Returns the "n Items" string for this node, generating and caching it if it hasn't been created yet.
	function renderItemString(_ref) {
	  var data = _ref.data;
	  var getItemString = _ref.getItemString;
	  var itemString = _ref.itemString;
	  var itemType = _ref.itemType;
	
	  if (!itemString) {
	    var count = 0;
	    if (Number.isSafeInteger(data.size)) {
	      count = data.size;
	    } else {
	      for (var _iterator = data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	        var _ref2;
	
	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref2 = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref2 = _i.value;
	        }
	
	        var entry = _ref2;
	        // eslint-disable-line no-unused-vars
	        count += 1;
	      }
	    }
	    itemString = count + ' entr' + (count !== 1 ? 'ies' : 'y');
	  }
	  return getItemString('Iterable', data, itemType, itemString);
	}
	
	// Returns the child nodes for each entry in iterable.
	// If we have generated them previously we return from cache; otherwise we create them.
	function getChildNodes(_ref3) {
	  var data = _ref3.data;
	  var getItemString = _ref3.getItemString;
	  var labelRenderer = _ref3.labelRenderer;
	  var previousData = _ref3.previousData;
	  var styles = _ref3.styles;
	  var theme = _ref3.theme;
	  var valueRenderer = _ref3.valueRenderer;
	  var allExpanded = _ref3.allExpanded;
	
	  var childNodes = [];
	  for (var _iterator2 = data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	    var _ref4;
	
	    if (_isArray2) {
	      if (_i2 >= _iterator2.length) break;
	      _ref4 = _iterator2[_i2++];
	    } else {
	      _i2 = _iterator2.next();
	      if (_i2.done) break;
	      _ref4 = _i2.value;
	    }
	
	    var entry = _ref4;
	
	    var key = null;
	    var value = null;
	    if (Array.isArray(entry)) {
	      key = entry[0];
	      value = entry[1];
	    } else {
	      key = childNodes.length;
	      value = entry;
	    }
	
	    var previousDataValue = undefined;
	    if (typeof previousData !== 'undefined' && previousData !== null) {
	      previousDataValue = previousData[key];
	    }
	
	    var node = (0, _grabNode2.default)({
	      getItemString: getItemString,
	      key: key,
	      labelRenderer: labelRenderer,
	      previousData: previousDataValue,
	      styles: styles,
	      theme: theme,
	      value: value,
	      valueRenderer: valueRenderer,
	      allExpanded: allExpanded
	    });
	
	    if (node !== false) {
	      childNodes.push(node);
	    }
	  }
	
	  return childNodes;
	}
	
	// Configures <JSONNestedNode> to render an iterable

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _dec, _class, _class2, _temp;
	
	exports.__esModule = true;
	exports.default = undefined;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(58);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _mixins = __webpack_require__(61);
	
	var _hexToRgb = __webpack_require__(68);
	
	var _hexToRgb2 = _interopRequireDefault(_hexToRgb);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Renders simple values (eg. strings, numbers, booleans, etc)
	 */
	
	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14,
	    WebkitUserSelect: 'text',
	    MozUserSelect: 'text'
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};
	
	var JSONValueNode = (_dec = _reactMixin2.default.decorate(_mixins.SquashClickEventMixin), _dec(_class = (_temp = _class2 = function (_React$Component) {
	  _inherits(JSONValueNode, _React$Component);
	
	  function JSONValueNode() {
	    _classCallCheck(this, JSONValueNode);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  JSONValueNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = (0, _hexToRgb2.default)(this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	
	    return _react2.default.createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2.default.createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle(this.props.nodeType, true)) },
	        this.props.labelRenderer(this.props.keyName),
	        ':'
	      ),
	      _react2.default.createElement(
	        'span',
	        { style: _extends({
	            color: this.props.valueColor
	          }, this.props.styles.getValueStyle(this.props.nodeType, true)) },
	        this.props.valueRenderer(this.props.valueGetter(this.props.value))
	      )
	    );
	  };
	
	  return JSONValueNode;
	}(_react2.default.Component), _class2.defaultProps = {
	  valueGetter: function valueGetter(value) {
	    return value;
	  }
	}, _temp)) || _class);
	exports.default = JSONValueNode;

/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (hex) {
	  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	  return result ? {
	    r: parseInt(result[1], 16),
	    g: parseInt(result[2], 16),
	    b: parseInt(result[3], 16)
	  } : null;
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = {
	  scheme: 'solarized',
	  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
	  base00: '#002b36',
	  base01: '#073642',
	  base02: '#586e75',
	  base03: '#657b83',
	  base04: '#839496',
	  base05: '#93a1a1',
	  base06: '#eee8d5',
	  base07: '#fdf6e3',
	  base08: '#dc322f',
	  base09: '#cb4b16',
	  base0A: '#b58900',
	  base0B: '#859900',
	  base0C: '#2aa198',
	  base0D: '#268bd2',
	  base0E: '#6c71c4',
	  base0F: '#d33682'
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _actions = __webpack_require__(5);
	
	var _lodashDebounce = __webpack_require__(50);
	
	var _lodashDebounce2 = _interopRequireDefault(_lodashDebounce);
	
	__webpack_require__(71);
	
	var _reactResponsive = __webpack_require__(72);
	
	var _reactResponsive2 = _interopRequireDefault(_reactResponsive);
	
	var DEBOUNCE_TIME = 250;
	
	var FilterHeader = (function (_Component) {
	  _inherits(FilterHeader, _Component);
	
	  _createClass(FilterHeader, null, [{
	    key: 'propTypes',
	    value: {
	      action: _react.PropTypes.object.isRequired,
	      actionId: _react.PropTypes.any.isRequired,
	      dispatch: _react.PropTypes.func.isRequired,
	      monitorStateAction: _react.PropTypes.object.isRequired,
	      theme: _react.PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);
	
	  function FilterHeader(props) {
	    _classCallCheck(this, FilterHeader);
	
	    _get(Object.getPrototypeOf(FilterHeader.prototype), 'constructor', this).call(this, props);
	
	    this._onFilterByKeysChange = this._onFilterByKeysChange.bind(this);
	    this._onFilterByValuesChange = this._onFilterByValuesChange.bind(this);
	    this._onFilterTextChange = this._onFilterTextChange.bind(this);
	    this._toggleExpanded = this._toggleExpanded.bind(this);
	
	    this._debouncedOnFilterTextChange = (0, _lodashDebounce2['default'])(this._onFilterTextChange, DEBOUNCE_TIME);
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
	
	      return _react2['default'].createElement(
	        'div',
	        {
	          style: {
	            flex: '0 0 auto',
	            alignItems: 'center'
	          }
	        },
	        _react2['default'].createElement(
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
	          _react2['default'].createElement('div', {
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
	          _react2['default'].createElement(
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
	            _react2['default'].createElement(
	              _reactResponsive2['default'],
	              { query: '(min-width: 1024px)' },
	              _react2['default'].createElement(
	                'span',
	                {
	                  style: {
	                    color: theme.base05,
	                    fontSize: '.6em',
	                    marginLeft: '.6em'
	                  }
	                },
	                '(' + time.format('H:mm:ss A') + ')'
	              )
	            )
	          ),
	          _react2['default'].createElement(
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
	            _react2['default'].createElement(
	              _reactResponsive2['default'],
	              { query: '(min-width: 1024px)' },
	              _react2['default'].createElement(
	                'div',
	                {
	                  style: {
	                    flex: '0 0 auto'
	                  }
	                },
	                'Filter by'
	              )
	            ),
	            _react2['default'].createElement(
	              'label',
	              {
	                style: {
	                  flex: '0 0 auto',
	                  marginLeft: '.5em',
	                  fontWeight: 'normal',
	                  color: theme.base0D
	                }
	              },
	              _react2['default'].createElement('input', {
	                type: 'checkbox',
	                checked: filterByKeys,
	                onChange: this._onFilterByKeysChange
	              }),
	              'Keys'
	            ),
	            _react2['default'].createElement(
	              'label',
	              {
	                style: {
	                  flex: '0 0 auto',
	                  marginLeft: '.5em',
	                  fontWeight: 'normal',
	                  color: theme.base0B
	                }
	              },
	              _react2['default'].createElement('input', {
	                type: 'checkbox',
	                checked: filterByValues,
	                onChange: this._onFilterByValuesChange
	              }),
	              'Values'
	            )
	          )
	        ),
	        expanded && _react2['default'].createElement(
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
	          _react2['default'].createElement('input', {
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
	})(_react.Component);
	
	exports['default'] = FilterHeader;
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports) {

	
	
	
	/*
	* @version  0.7.4
	* @author   Lauri Rooden <lauri@rooden.ee>
	* @license  MIT License
	*/
	
	
	
	!function(Date, proto) {
		var maskRe = /("|')((?:\\?.)*?)\1|([YMD])\3\3\3?|([YMDHhmsWSZ])(\4?)|[uUASwoQ]/g
		, dateRe = /(\d+)[-.\/](\d+)[-.\/](\d+)/
		, timeRe = /(\d+):(\d+)(?::(\d+))?(\.\d+)?(?:\s*(?:(a)|(p))\.?m\.?)?(\s*(?:Z|GMT|UTC)?(?:([-+]\d\d):?(\d\d)?)?)?/i
		, unescapeRe = /\\(.)/g
		, map = { D:"Date", h:"Hours", m:"Minutes", s:"Seconds", S:"Milliseconds" }
		//, isoDateRe = /(\d{4})[-.\/]W(\d\d?)[-.\/](\d)/
	
	
		// ISO 8601 specifies numeric representations of date and time.
		//
		// The international standard date notation is
		// YYYY-MM-DD
		//
		// The international standard notation for the time of day is
		// hh:mm:ss
		//
		// Time zone
		//
		// The strings +hh:mm, +hhmm, or +hh (ahead of UTC)
		// -hh:mm, -hhmm, or -hh (time zones west of the zero meridian, which are behind UTC)
		//
		// 12:00Z = 13:00+01:00 = 0700-0500
	
		Date[proto].date = Date[proto].format = function(mask, _zone) {
			mask = Date.masks[mask] || mask || Date.masks["default"]
	
			var undef, zonediff
			, date = this
			, origin = +date
			, get = "get" + (mask.slice(0, 4) == "UTC:" ? (mask = mask.slice(4), "UTC") : "")
			, zone = _zone == undef ? date._z : _zone
	
			if (zone != undef && get == "get") {
				get = "getUTC"
				date.setTime( origin + (36e5 * zone) )
				zonediff = 60 * zone
			}
	
			mask = mask.replace(maskRe, function(match, quote, text, MD, single, pad) {
				text = MD == "Y"  ? date[get + "FullYear"]()
				: MD              ? Date.names[ date[get + (MD == "M" ? "Month" : "Day" ) ]() + ( match == "DDD" ? 24 : MD == "D" ? 31 : match == "MMM" ? 0 : 12 ) ]
				: single == "Y"   ? date[get + "FullYear"]() % 100
				: single == "W"   ? ( quote = new Date(origin + ((4 - (date[get + "Day"]()||7)) * 86400000))
				                    , Math.ceil(((quote.getTime() - quote["s" + get.slice(1) + "Month"](0, 1)) / 86400000 + 1 ) / 7)
						    )
				: single == "M"   ? date[get + "Month"]() + 1
				: single == "H"   ? date[get + "Hours"]() % 12 || 12
				: single == "Z"   ? ( quote = zonediff || get == "get" && -date.getTimezoneOffset() || 0
					, quote ? (quote < 0 ? ((quote=-quote), "-") : "+") + (quote < 600 ? "0" : "") + (0|(quote/60)) + ((quote%=60) ? (pad ? "" : ":") + quote : "") : "Z"
				)
				: single          ? date[get + map[single]]()
				: match == "u"    ? (date/1000)>>>0
				: match == "U"    ? origin
				: match == "Q"    ? ((date[get + "Month"]()/3)|0) + 1
				: match == "A"    ? Date[date[get + "Hours"]() > 11 ? "pm" : "am"]
				: match == "w"    ? date[get + "Day"]() || 7
				: match == "o"    ? new Date(origin + ((4 - (date[get + "Day"]()||7)) * 86400000))[get + "FullYear"]()
				: quote           ? text.replace(unescapeRe, "$1")
				: match
				if (match == "SS" && text < 100) text = "0" + text
				return pad && text < 10 && single != "Z" ? "0" + text : text
			})
			if (zonediff != undef) date.setTime( origin )
			return mask
		}
	
		Date[proto].tz = function(zone) {
			this._z = zone
			return this
		}
	
		Date.am = "AM"
		Date.pm = "PM"
	
		Date.masks = {
			"default": "DDD MMM DD YYYY hh:mm:ss",
			"iso": "UTC:YYYY-MM-DD'T'hh:mm:ss'Z'"
		}
		Date.names = "JanFebMarAprMayJunJulAugSepOctNovDecJanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecemberSunMonTueWedThuFriSatSundayMondayTuesdayWednesdayThursdayFridaySaturday".match(/.[a-z]+/g)
	
		//*/
	
	
		/*
		 * // In Chrome Date.parse("01.02.2001") is Jan
		 * num = +date || Date.parse(date) || ""+date;
		 */
	
		String[proto].date = Number[proto].date = function(format, zoneOut, zoneIn) {
			var undef, match, year, month
			, date = new Date()
			, num = +this || "" + this
	
			if (isNaN(num)) {
				if (match = num.match(dateRe)) {
					// Big endian date, starting with the year, eg. 2011-01-31
					// Middle endian date, starting with the month, eg. 01/31/2011
					// Little endian date, starting with the day, eg. 31.01.2011
					year = match[1] > 99 ? 1 : 3
					month = Date.middleEndian ? 4 - year : 2
					date.setFullYear(match[year], match[month] - 1, match[6 - month - year])
				}
	
				// Time
				match = num.match(timeRe) || [0, 0, 0]
				date.setHours(
					match[6] && match[1] < 12 ? +match[1] + 12 :
					match[5] && match[1] == 12 ? 0 : match[1],
					match[2], match[3]|0, (1000 * match[4])|0
				)
	
				// Timezone
				if (match[7]) {
					zoneIn = (match[8]|0) + ((match[9]|0)/(match[8]<0?-60:60))
				}
			} else date.setTime( num < 4294967296 ? num * 1000 : num )
	
			if (zoneIn != undef) date.setTime(date - (60 * zoneIn + date.getTimezoneOffset()) * 60000)
	
			return format ? date.format(format, zoneOut) : date
		}
	
	}(Date, "prototype")
	
	
	
	


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var matchMedia = __webpack_require__(73);
	var hyphenate = __webpack_require__(75);
	var mediaQuery = __webpack_require__(76);
	var toQuery = __webpack_require__(78);
	var assign = __webpack_require__(77);
	
	var defaultTypes = {
	  component: React.PropTypes.node,
	  query: React.PropTypes.string,
	  values: React.PropTypes.shape(mediaQuery.matchers),
	  children: React.PropTypes.array
	};
	var mediaKeys = Object.keys(mediaQuery.all);
	var excludedQueryKeys = Object.keys(defaultTypes);
	var excludedPropKeys = excludedQueryKeys.concat(mediaKeys);
	
	function omit(object, keys){
	  var newObject = assign({}, object);
	  keys.forEach(function(key){
	    delete newObject[key];
	  });
	  return newObject;
	}
	
	var mq = React.createClass({
	  displayName: 'MediaQuery',
	
	  getDefaultProps: function(){
	    return {
	      values: {}
	    };
	  },
	
	  getInitialState: function(){
	    return {
	      matches: false
	    };
	  },
	
	  componentWillMount: function(){
	    this.updateQuery(this.props);
	  },
	
	  componentWillReceiveProps: function(props){
	    this.updateQuery(props);
	  },
	
	  updateQuery: function(props){
	    var values;
	    if (props.query) {
	      this.query = props.query;
	    } else {
	      this.query = toQuery(omit(props, excludedQueryKeys));
	    }
	
	    if (!this.query) {
	      throw new Error('Invalid or missing MediaQuery!');
	    }
	
	    if (props.values) {
	      values = Object.keys(props.values)
	        .reduce(function(result, key){
	          result[hyphenate(key)] = props.values[key];
	          return result;
	        }, {});
	    }
	
	    if (this._mql) {
	      this._mql.removeListener(this.updateMatches);
	    }
	
	    this._mql = matchMedia(this.query, values);
	    this._mql.addListener(this.updateMatches);
	    this.updateMatches();
	  },
	
	  componentWillUnmount: function(){
	    this._mql.removeListener(this.updateMatches);
	  },
	
	  updateMatches: function(){
	    if (this._mql.matches === this.state.matches) {
	      return;
	    }
	    this.setState({
	      matches: this._mql.matches
	    });
	  },
	
	  render: function(){
	    if (this.state.matches === false) {
	      return null;
	    }
	    var props = omit(this.props, excludedPropKeys);
	    if (this.props.component || this.props.children.length > 1) {
	      return React.createElement(
	        this.props.component || 'div',
	        props,
	        this.props.children
	      );
	    } else if (props) {
	      return React.cloneElement(
	        this.props.children,
	        props
	      );
	    } else {
	      return this.props.children;
	    }
	  }
	});
	
	module.exports = mq;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var staticMatch = __webpack_require__(74).match;
	var dynamicMatch = typeof window !== 'undefined' ? window.matchMedia : null;
	
	// our fake MediaQueryList
	function Mql(query, values){
	  var self = this;
	  if(dynamicMatch){
	    var mql = dynamicMatch.call(window, query);
	    this.matches = mql.matches;
	    this.media = mql.media;
	    // TODO: is there a time it makes sense to remove this listener?
	    mql.addListener(update);
	  } else {
	    this.matches = staticMatch(query, values);
	    this.media = query;
	  }
	
	  this.addListener = addListener;
	  this.removeListener = removeListener;
	
	  function addListener(listener){
	    if(mql){
	      mql.addListener(listener);
	    }
	  }
	
	  function removeListener(listener){
	    if(mql){
	      mql.removeListener(listener);
	    }
	  }
	
	  // update ourselves!
	  function update(evt){
	    self.matches = evt.matches;
	    self.media = evt.media;
	  }
	}
	
	function matchMedia(query, values){
	  return new Mql(query, values);
	}
	
	module.exports = matchMedia;


/***/ },
/* 74 */
/***/ function(module, exports) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	'use strict';
	
	exports.match = matchQuery;
	exports.parse = parseQuery;
	
	// -----------------------------------------------------------------------------
	
	var RE_MEDIA_QUERY     = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
	    RE_MQ_EXPRESSION   = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
	    RE_MQ_FEATURE      = /^(?:(min|max)-)?(.+)/,
	    RE_LENGTH_UNIT     = /(em|rem|px|cm|mm|in|pt|pc)?$/,
	    RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
	
	function matchQuery(mediaQuery, values) {
	    return parseQuery(mediaQuery).some(function (query) {
	        var inverse = query.inverse;
	
	        // Either the parsed or specified `type` is "all", or the types must be
	        // equal for a match.
	        var typeMatch = query.type === 'all' || values.type === query.type;
	
	        // Quit early when `type` doesn't match, but take "not" into account.
	        if ((typeMatch && inverse) || !(typeMatch || inverse)) {
	            return false;
	        }
	
	        var expressionsMatch = query.expressions.every(function (expression) {
	            var feature  = expression.feature,
	                modifier = expression.modifier,
	                expValue = expression.value,
	                value    = values[feature];
	
	            // Missing or falsy values don't match.
	            if (!value) { return false; }
	
	            switch (feature) {
	                case 'orientation':
	                case 'scan':
	                    return value.toLowerCase() === expValue.toLowerCase();
	
	                case 'width':
	                case 'height':
	                case 'device-width':
	                case 'device-height':
	                    expValue = toPx(expValue);
	                    value    = toPx(value);
	                    break;
	
	                case 'resolution':
	                    expValue = toDpi(expValue);
	                    value    = toDpi(value);
	                    break;
	
	                case 'aspect-ratio':
	                case 'device-aspect-ratio':
	                case /* Deprecated */ 'device-pixel-ratio':
	                    expValue = toDecimal(expValue);
	                    value    = toDecimal(value);
	                    break;
	
	                case 'grid':
	                case 'color':
	                case 'color-index':
	                case 'monochrome':
	                    expValue = parseInt(expValue, 10) || 1;
	                    value    = parseInt(value, 10) || 0;
	                    break;
	            }
	
	            switch (modifier) {
	                case 'min': return value >= expValue;
	                case 'max': return value <= expValue;
	                default   : return value === expValue;
	            }
	        });
	
	        return (expressionsMatch && !inverse) || (!expressionsMatch && inverse);
	    });
	}
	
	function parseQuery(mediaQuery) {
	    return mediaQuery.split(',').map(function (query) {
	        query = query.trim();
	
	        var captures    = query.match(RE_MEDIA_QUERY),
	            modifier    = captures[1],
	            type        = captures[2],
	            expressions = captures[3] || '',
	            parsed      = {};
	
	        parsed.inverse = !!modifier && modifier.toLowerCase() === 'not';
	        parsed.type    = type ? type.toLowerCase() : 'all';
	
	        // Split expressions into a list.
	        expressions = expressions.match(/\([^\)]+\)/g) || [];
	
	        parsed.expressions = expressions.map(function (expression) {
	            var captures = expression.match(RE_MQ_EXPRESSION),
	                feature  = captures[1].toLowerCase().match(RE_MQ_FEATURE);
	
	            return {
	                modifier: feature[1],
	                feature : feature[2],
	                value   : captures[2]
	            };
	        });
	
	        return parsed;
	    });
	}
	
	// -- Utilities ----------------------------------------------------------------
	
	function toDecimal(ratio) {
	    var decimal = Number(ratio),
	        numbers;
	
	    if (!decimal) {
	        numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/);
	        decimal = numbers[1] / numbers[2];
	    }
	
	    return decimal;
	}
	
	function toDpi(resolution) {
	    var value = parseFloat(resolution),
	        units = String(resolution).match(RE_RESOLUTION_UNIT)[1];
	
	    switch (units) {
	        case 'dpcm': return value / 2.54;
	        case 'dppx': return value * 96;
	        default    : return value;
	    }
	}
	
	function toPx(length) {
	    var value = parseFloat(length),
	        units = String(length).match(RE_LENGTH_UNIT)[1];
	
	    switch (units) {
	        case 'em' : return value * 16;
	        case 'rem': return value * 16;
	        case 'cm' : return value * 96 / 2.54;
	        case 'mm' : return value * 96 / 2.54 / 10;
	        case 'in' : return value * 96;
	        case 'pt' : return value * 72;
	        case 'pc' : return value * 72 / 12;
	        default   : return value;
	    }
	}


/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';
	
	var uppercasePattern = /([A-Z])/g;
	var msPattern = /^ms-/;
	
	function hyphenateStyleName(string) {
	    return hyphenate(string).replace(msPattern, '-ms-');
	}
	
	function hyphenate(string) {
	    return string.replace(uppercasePattern, '-$1').toLowerCase();
	}
	
	module.exports = hyphenateStyleName;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var PropTypes = __webpack_require__(3).PropTypes;
	var assign = __webpack_require__(77);
	
	var stringOrNumber = PropTypes.oneOfType([
	  PropTypes.string,
	  PropTypes.number
	]);
	
	// properties that match media queries
	var matchers = {
	  orientation: PropTypes.oneOf([
	    'portrait',
	    'landscape'
	  ]),
	
	  scan: PropTypes.oneOf([
	    'progressive',
	    'interlace'
	  ]),
	
	  aspectRatio: PropTypes.string,
	  deviceAspectRatio: PropTypes.string,
	
	  height: stringOrNumber,
	  deviceHeight: stringOrNumber,
	
	  width: stringOrNumber,
	  deviceWidth: stringOrNumber,
	
	  color: PropTypes.bool,
	
	  colorIndex: PropTypes.bool,
	
	  monochrome: PropTypes.bool,
	  resolution: stringOrNumber
	};
	
	// media features
	var features = {
	  minAspectRatio: PropTypes.string,
	  maxAspectRatio: PropTypes.string,
	  minDeviceAspectRatio: PropTypes.string,
	  maxDeviceAspectRatio: PropTypes.string,
	
	  minHeight: stringOrNumber,
	  maxHeight: stringOrNumber,
	  minDeviceHeight: stringOrNumber,
	  maxDeviceHeight: stringOrNumber,
	
	  minWidth: stringOrNumber,
	  maxWidth: stringOrNumber,
	  minDeviceWidth: stringOrNumber,
	  maxDeviceWidth: stringOrNumber,
	
	  minColor: PropTypes.number,
	  maxColor: PropTypes.number,
	
	  minColorIndex: PropTypes.number,
	  maxColorIndex: PropTypes.number,
	
	  minMonochrome: PropTypes.number,
	  maxMonochrome: PropTypes.number,
	
	  minResolution: stringOrNumber,
	  maxResolution: stringOrNumber
	};
	
	assign(features, matchers);
	
	// media types
	var types = {
	  all: PropTypes.bool,
	  grid: PropTypes.bool,
	  aural: PropTypes.bool,
	  braille: PropTypes.bool,
	  handheld: PropTypes.bool,
	  print: PropTypes.bool,
	  projection: PropTypes.bool,
	  screen: PropTypes.bool,
	  tty: PropTypes.bool,
	  tv: PropTypes.bool,
	  embossed: PropTypes.bool
	};
	
	var all = {};
	assign(all, types);
	assign(all, features);
	
	// add the type property
	assign(matchers, { type: Object.keys(types) });
	
	module.exports = {
	  all: all,
	  types: types,
	  matchers: matchers,
	  features: features
	};


/***/ },
/* 77 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var hyphenate = __webpack_require__(75);
	var mq = __webpack_require__(76);
	
	function negate(cond) {
	  return 'not ' + cond;
	}
	
	function keyVal(k, v) {
	  var realKey = hyphenate(k);
	
	  // px shorthand
	  if (typeof v === 'number') {
	    v = v+'px';
	  }
	  if (v === true) {
	    return k;
	  }
	  if (v === false) {
	    return negate(k);
	  }
	  return '('+realKey+': '+v+')';
	}
	
	function join(conds) {
	  return conds.join(' and ');
	}
	
	module.exports = function(obj){
	  var rules = [];
	  Object.keys(mq.all).forEach(function(k){
	    var v = obj[k];
	    if (v != null) {
	      rules.push(keyVal(k, v));
	    }
	  });
	  return join(rules);
	};


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(3);
	var RegExpPropType = __webpack_require__(80);
	var escapeStringRegexp = __webpack_require__(81);
	
	
	var Highlighter = React.createClass({displayName: "Highlighter",
	  count: 0,
	
	  propTypes: {
	    search: React.PropTypes.oneOfType([
	      React.PropTypes.string,
	      React.PropTypes.number,
	      React.PropTypes.bool,
	      RegExpPropType
	    ]).isRequired,
	    caseSensitive: React.PropTypes.bool,
	    matchElement: React.PropTypes.string,
	    matchClass: React.PropTypes.string,
	    matchStyle: React.PropTypes.object
	  },
	
	  getDefaultProps: function() {
	    return {
	      caseSensitive: false,
	      matchElement: 'strong',
	      matchClass: 'highlight',
	      matchStyle: {}
	    }
	  },
	
	  render: function() {
	    return React.DOM.span(React.__spread({}, this.props), this.renderElement(this.props.children));
	  },
	
	  /**
	   * A wrapper to the highlight method to determine when the highlighting
	   * process should occur.
	   *
	   * @param  {string} subject
	   *   The body of text that will be searched for highlighted words.
	   *
	   * @return {Array}
	   *   An array of ReactElements
	   */
	  renderElement: function(subject) {
	    if (this.isScalar() && this.hasSearch()) {
	      var search = this.getSearch();
	      return this.highlightChildren(subject, search);
	    }
	
	    return this.props.children;
	  },
	
	  /**
	   * Determine if props are valid types for processing.
	   *
	   * @return {Boolean}
	   */
	  isScalar: function() {
	    return (/string|number|boolean/).test(typeof this.props.children);
	  },
	
	  /**
	   * Determine if required search prop is defined and valid.
	   *
	   * @return {Boolean}
	   */
	  hasSearch: function() {
	    return (typeof this.props.search !== 'undefined') && this.props.search;
	  },
	
	  /**
	   * Get the search prop, but always in the form of a regular expression. Use
	   * this as a proxy to this.props.search for consistency.
	   *
	   * @return {RegExp}
	   */
	  getSearch: function() {
	    if (this.props.search instanceof RegExp) {
	      return this.props.search;
	    }
	
	    var flags = '';
	    if (!this.props.caseSensitive) {
	      flags +='i';
	    }
	
	    var search = this.props.search;
	    if (typeof this.props.search === 'string') {
	      search = escapeStringRegexp(search);
	    }
	
	    return new RegExp(search, flags);
	  },
	
	  /**
	   * Get the indexes of the first and last characters of the matched string.
	   *
	   * @param  {string} subject
	   *   The string to search against.
	   *
	   * @param  {RegExp} search
	   *   The regex search query.
	   *
	   * @return {Object}
	   *   An object consisting of "first" and "last" properties representing the
	   *   indexes of the first and last characters of a matching string.
	   */
	  getMatchBoundaries: function(subject, search) {
	    var matches = search.exec(subject);
	    if (matches) {
	      return {
	        first: matches.index,
	        last: matches.index + matches[0].length
	      };
	    }
	  },
	
	  /**
	   * Determines which strings of text should be highlighted or not.
	   *
	   * @param  {string} subject
	   *   The body of text that will be searched for highlighted words.
	   *
	   * @return {Array}
	   *   An array of ReactElements
	   */
	  highlightChildren: function(subject, search) {
	    var children = [];
	
	    if (!search.test(subject)) {
	      children.push(this.renderPlain(subject));
	      return children;
	    }
	
	    var boundaries = this.getMatchBoundaries(subject, search);
	
	    // Capture the string that leads up to a match...
	    var nonMatch = subject.slice(0, boundaries.first);
	    if (nonMatch) {
	      children.push(this.renderPlain(nonMatch));
	    }
	
	    // Now, capture the matching string...
	    var match = subject.slice(boundaries.first, boundaries.last);
	    if (match) {
	      children.push(this.renderHighlight(match));
	    }
	
	    // And if there's anything left over, recursively run this method again.
	    var remaining = subject.slice(boundaries.last);
	    if (remaining) {
	      children = Array.prototype.concat(children, this.highlightChildren(remaining, search));
	    }
	
	    return children;
	  },
	
	  /**
	   * Responsible for rending a non-highlighted element.
	   *
	   * @param  {string} string
	   *   A string value to wrap an element around.
	   *
	   * @return {ReactElement}
	   */
	  renderPlain: function(string) {
	    this.count++;
	    return React.DOM.span({'key': this.count}, string);
	  },
	
	  /**
	   * Responsible for rending a highlighted element.
	   *
	   * @param  {string} string
	   *   A string value to wrap an element around.
	   *
	   * @return {ReactElement}
	   */
	  renderHighlight: function(string) {
	    this.count++;
	    return React.DOM[this.props.matchElement]({
	      key: this.count,
	      className: this.props.matchClass,
	      style: this.props.matchStyle
	    }, string);
	  }
	});
	
	module.exports = Highlighter;


/***/ },
/* 80 */
/***/ function(module, exports) {

	var regExpPropType = function (props, propName, componentName, location) {
	  if (!(props[propName] instanceof RegExp)) {
	    var propType = typeof props[propName];
	
	    return new Error(
	      ("Invalid " + location + " `" + propName + "` of type `" + propType + "` ") +
	        ("supplied to `" + componentName + "`, expected `RegExp`.")
	    );
	  }
	};
	
	module.exports = regExpPropType;


/***/ },
/* 81 */
/***/ function(module, exports) {

	'use strict';
	
	var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
	
	module.exports = function (str) {
		if (typeof str !== 'string') {
			throw new TypeError('Expected a string');
		}
	
		return str.replace(matchOperatorsRe, '\\$&');
	};


/***/ }
/******/ ])
});
;
//# sourceMappingURL=main.js.map