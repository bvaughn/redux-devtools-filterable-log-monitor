/** @flow */
import React, { PropTypes } from 'react'
import JSONTree from 'react-json-tree'
import FilterHeader from './FilterHeader'
import Highlighter from 'react-highlighter'
import { createRegExpFromFilterText } from '../utils'
import styles from './FilterableState.css'

function highlightMatches (filterText, value) {
  return (
    <Highlighter
      matchClass={styles.highlight}
      search={createRegExpFromFilterText(filterText)}
    >
      {value.toString()}
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
    filterByKeys,
    filterByValues,
    filteredState,
    filterText
  } = monitorStateAction

  const labelRenderer = filterByKeys && filterText
    ? value => highlightMatches(filterText, value)
    : value => value

  const valueRenderer = filterByValues && filterText
    ? value => highlightMatches(filterText, value)
    : value => value

  return (
    <div>
      <FilterHeader
        action={action}
        actionId={actionId}
        dispatch={dispatch}
        monitorStateAction={monitorStateAction}
        theme={theme}
      />
      <JSONTree
        data={filteredState}
        labelRenderer={labelRenderer}
        theme={theme}
        valueRenderer={valueRenderer}
      />
    </div>
  )
}
