/** @flow */
import React from 'react'
import PropTypes from 'prop-types'
import JSONTree from 'react-json-tree'
import FilterHeader from './FilterHeader'
import Highlighter from 'react-highlighter'
import { createRegExpFromFilterText } from '../utils'

function highlightMatches (filterText, value) {
  return (
    <Highlighter
      matchStyle={{
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
    filteredActions,
    filteredState,
    filterText
  } = monitorStateAction

  const labelRenderer = filterByKeys && filterText
    ? value => highlightMatches(filterText, value[0])
    : value => value[0]

  const valueRenderer = filterByValues && filterText
    ? (value, nodeType) => highlightMatches(filterText, value)
    : value => value

  const data = [
    { title: 'Action', source: filteredActions },
    { title: 'State', source: filteredState }
  ]

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
      {expanded && data.map((data, index) => (
        <div key={index}>
          <div
            style={{
              color: theme.base02,
              fontWeight: 'bold',
              margin: '.5rem 1rem 0',
              fontSize: 10,
              textTransform: 'uppercase'
            }}
          >
            {data.title}
          </div>
          <JSONTree
            data={data.source}
            isLightTheme={false}
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
        </div>
      ))}
    </div>
  )
}
