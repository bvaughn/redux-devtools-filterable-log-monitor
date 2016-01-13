/** @flow */
import React, { PropTypes } from 'react'
import JSONTree from 'react-json-tree'
import FilterHeader from './FilterHeader'
import Highlighter from 'react-highlighter'
import { createRegExpFromFilterText } from '../utils'

function highlightMatches (filterText, value) {
  return (
    <Highlighter
      matchStyle={{
        display: 'inline-block',
        padding: '3px 0',
        margin: '-3px 0',
        backgroundColor: 'rgba(255, 255, 255, .1)'
      }}
      search={createRegExpFromFilterText(filterText)}
    >
      {value}
    </Highlighter>
  )
}

FilterableState.propTypes = {
  action: PropTypes.object.isRequired,
  actionId: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired,
  monitorStateAction: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default function FilterableState ({
  action,
  actionId,
  dispatch,
  monitorStateAction,
  theme
}) {
  const {
    expanded,
    filterByKeys,
    filterByValues,
    filteredState,
    filterText
  } = monitorStateAction

  const labelRenderer = filterByKeys && filterText
    ? value => highlightMatches(filterText, value)
    : value => value

  const valueRenderer = filterByValues && filterText
    ? (value, nodeType) => highlightMatches(filterText, value)
    : value => value

  return (
    <div
      style={{
        borderBottom: `1px solid ${theme.base00}`
      }}
    >
      <FilterHeader
        action={action}
        actionId={actionId}
        dispatch={dispatch}
        monitorStateAction={monitorStateAction}
        theme={theme}
      />
      {expanded &&
        <JSONTree
          data={filteredState}
          labelRenderer={labelRenderer}
          style={{
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0
          }}
          theme={theme}
          valueRenderer={valueRenderer}
        />
      }
    </div>
  )
}
