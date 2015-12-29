/** @flow */
import React, { PropTypes } from 'react'
import JSONTree from 'react-json-tree'
import FilterHeader from './FilterHeader'
import Highlighter from 'react-highlight-words'
import styles from './FilterableState.css'

function highlightMatches (filterText, value) {
  return (
    <Highlighter
      highlightClassName={styles.highlight}
      searchWords={filterText.split('\s')}
      textToHighlight={value.toString()}
    />
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

  const highlightLabel = filterByKeys && filterText
    ? value => highlightMatches(filterText, value)
    : value => value

  const highlightValue = filterByValues && filterText
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
        getRenderedLabel={highlightLabel}
        getRenderedValue={highlightValue}
        theme={theme}
      />
    </div>
  )
}
