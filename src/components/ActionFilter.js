/** @flow */
import React, { PropTypes } from 'react'
import debounce from 'lodash.debounce'
import { setActionFilterText } from '../actions'
import styles from './ActionFilter.css'

const DEBOUNCE_TIME = 250

ActionFilter.propTypes = {
  actionFilterText: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
}

export default function ActionFilter ({
  actionFilterText,
  dispatch,
  theme
}) {
  function onActionFilterTextChange (event) {
    const actionFilterText = event.target.value
    dispatch(setActionFilterText({
      actionFilterText
    }))
  }

  // Debounce for better usability
  const debouncedOnActionFilterTextChange = debounce(onActionFilterTextChange, DEBOUNCE_TIME)

  return (
    <div
      className={styles.filterActionsHeader}
      style={{
        backgroundColor: theme.base01
      }}
    >
      <input
        className={styles.input}
        style={{
          backgroundColor: theme.base06,
          color: theme.base00
        }}
        type='text'
        placeholder='Filter actions by type..'
        defaultValue={actionFilterText}
        onChange={debouncedOnActionFilterTextChange}
      />
    </div>
  )
}
