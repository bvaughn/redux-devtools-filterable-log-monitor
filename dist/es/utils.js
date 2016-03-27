function isImmutable(data) {
  return data && data.toJS instanceof Function;
}

function searchKeys(key, node, regExp) {
  if (key.match(regExp)) {
    return true;
  } else if (node && (typeof node === 'undefined' ? 'undefined' : babelHelpers.typeof(node)) === 'object') {
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
  } else if (node && (typeof node === 'undefined' ? 'undefined' : babelHelpers.typeof(node)) === 'object') {
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
    trimmed = node instanceof Array ? [].concat(babelHelpers.toConsumableArray(node)) : babelHelpers.extends({}, node);
  }

  if (filterText) {
    for (var key in trimmed) {
      if (!searchFunction(key, trimmed[key], filterText)) {
        delete trimmed[key];
      } else if (babelHelpers.typeof(trimmed[key]) === 'object') {
        trimmed[key] = trimTree(trimmed[key], filterText, searchFunction);
      }
    }
  }

  return trimmed;
}

export function createRegExpFromFilterText(filterText) {
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

export function getFilteredNodes(_ref) {
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

export function formatDateAsTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? 'pm' : 'am';

  var formattedHours = hours % 12 ? hours % 12 : 12;
  var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  var formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds + ' ' + ampm;
}