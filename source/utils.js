function isImmutable (data) {
  return data && data.toJS instanceof Function
}

function searchKeys (key, node, regExp) {
  if (key.match(regExp)) {
    return true
  } else if (node && typeof node === 'object') {
    if (isImmutable(node)) {
      node = node.toJS()
    }

    return Object.keys(node).some(nestedKey => searchKeys(nestedKey, node[nestedKey], regExp))
  }
}

function searchValues (node, regExp) {
  if (typeof node === 'string' && node.match(regExp)) {
    return true
  } else if (node && typeof node === 'object') {
    if (isImmutable(node)) {
      node = node.toJS()
    }

    for (var key in node) {
      if (searchValues(node[key], regExp)) {
        return true
      }
    }

    return false
  }
}

function trimTree (node, filterText, searchFunction) {
  let trimmed

  if (isImmutable(node)) {
    trimmed = node.toJS()
  } else {
    trimmed = node instanceof Array
      ? [ ...node ]
      : { ...node }
  }

  if (filterText) {
    for (var key in trimmed) {
      if (!searchFunction(key, trimmed[key], filterText)) {
        delete trimmed[key]
      } else if (typeof trimmed[key] === 'object') {
        trimmed[key] = trimTree(trimmed[key], filterText, searchFunction)
      }
    }
  }

  return trimmed
}

export function createRegExpFromFilterText (filterText) {
  if (filterText.match(/^\/.+\/[a-z]*$/)) {
    const pieces = filterText.split('/')
    pieces.shift() // First item is always empty
    const flags = pieces.pop() // Last item contains optional) flags
    try {
      return new RegExp(pieces.join('/'), flags)
    } catch (error) {
      console.error(error)
      return new RegExp()
    }
  } else {
    return new RegExp(filterText)
  }
}

export function getFilteredNodes ({
  data = {},
  filterByKeys,
  filterByValues,
  filterText = ''
}) {
  if (!filterByKeys && !filterByValues || !filterText) {
    return data
  }

  const regExp = createRegExpFromFilterText(filterText)
  const keySearcher = filterByKeys ? searchKeys : () => false
  const valueSearcher = filterByValues ? searchValues : () => false
  const searchFunction = (key, value, regExp) => keySearcher(key, value, regExp) || valueSearcher(value, regExp)

  return trimTree(data, regExp, searchFunction)
}
