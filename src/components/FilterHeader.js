/** @flow */
import React, { PropTypes } from 'react'
import {
  setFilterByKeys,
  setFilterByValues,
  setFilterText
} from '../actions'
import debounce from 'lodash.debounce'
import styles from './FilterHeader.css'
import 'date-format-lite'

FilterHeader.propTypes = {
  action: PropTypes.object.isRequired,
  actionId: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired,
  monitorStateAction: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

const DEBOUNCE_TIME = 250

export default function FilterHeader ({
  action,
  actionId,
  dispatch,
  monitorStateAction,
  theme
}) {
  const {
    filterByKeys,
    filterByValues,
    filterText,
    time
  } = monitorStateAction

  function onFilterByKeysChange (event) {
    const filterByKeys = event.target.checked
    dispatch(setFilterByKeys({
      actionId,
      filterByKeys
    }))
  }

  function onFilterByValuesChange (event) {
    const filterByValues = event.target.checked
    dispatch(setFilterByValues({
      actionId,
      filterByValues
    }))
  }

  function onFilterTextChange (event) {
    const filterText = event.target.value
    dispatch(setFilterText({
      actionId,
      filterText
    }))
  }

  // Debounce for better usability
  const debouncedOnFilterTextChange = debounce(onFilterTextChange, DEBOUNCE_TIME)

  return (
    <div className={styles.FilterHeader}>
      <div
        className={styles.actionTypeAndFilterByRow}
        style={{
          backgroundColor: theme.base02,
          color: theme.base06
        }}
      >
        <div
          className={styles.actionType}
          title={action.type}
        >
          {action.type}

          <span
            className={styles.actionTime}
            style={{
              color: theme.base05
            }}
          >
            {`(${time.format('H:mm:ss A')})`}
          </span>
        </div>

        <div className={styles.filterByOptions}>
          <div className={styles.filterByLabel}>
            Filter by
          </div>
          <label
            className={styles.label}
            style={{ color: theme.base0D }}
          >
            <input
              type='checkbox'
              checked={filterByKeys}
              onChange={onFilterByKeysChange}
            />
            Keys
          </label>
          <label
            className={styles.label}
            style={{ color: theme.base0B }}
          >
            <input
              type='checkbox'
              checked={filterByValues}
              onChange={onFilterByValuesChange}
            />
            Values
          </label>
        </div>
      </div>

      {(filterByKeys || filterByValues) &&
        <div
          className={styles.filterContainer}
          style={{
            backgroundColor: theme.base01,
            color: theme.base06
          }}
        >
          <input
            className={styles.input}
            style={{
              backgroundColor: theme.base06,
              color: theme.base00
            }}
            type='text'
            placeholder='Filter by /regex/i or "string"'
            defaultValue={filterText}
            onChange={debouncedOnFilterTextChange}
          />
        </div>
      }
    </div>
  )
}
