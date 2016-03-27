'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.createRegExpFromFilterText = createRegExpFromFilterText;
exports.getFilteredNodes = getFilteredNodes;
exports.formatDateAsTime = formatDateAsTime;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function isImmutable(data) {
  return data && data.toJS instanceof Function;
}

function searchKeys(key, node, regExp) {
  if (key.match(regExp)) {
    return true;
  } else if (node && (typeof node === 'undefined' ? 'undefined' : _typeof(node)) === 'object') {
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
  } else if (node && (typeof node === 'undefined' ? 'undefined' : _typeof(node)) === 'object') {
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
  var trimmed = void 0;

  if (isImmutable(node)) {
    trimmed = node.toJS();
  } else {
    trimmed = node instanceof Array ? [].concat(_toConsumableArray(node)) : _extends({}, node);
  }

  if (filterText) {
    for (var key in trimmed) {
      if (!searchFunction(key, trimmed[key], filterText)) {
        delete trimmed[key];
      } else if (_typeof(trimmed[key]) === 'object') {
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

function formatDateAsTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? 'pm' : 'am';

  var formattedHours = hours % 12 ? hours % 12 : 12;
  var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  var formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds + ' ' + ampm;
}