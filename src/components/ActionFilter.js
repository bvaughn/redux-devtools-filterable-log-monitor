/** @flow */
import React, { PropTypes } from 'react'
import debounce from 'lodash.debounce'
import { setActionFilterText } from '../actions'

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
      style={{
        flex: '0 0 auto',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.base01,
        padding: '.75em',
        fontSize: '.65em',
        textTransform: 'uppercase',
        fontWeight: 'bold'
      }}
    >
      <input
        style={{
          flex: '0 0 100%',
          borderRadius: '.25em',
          lineHeight: '3em',
          padding: '0 .75em',
          border: 'none',
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
