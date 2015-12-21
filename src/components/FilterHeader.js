/** @flow */
import React, { PropTypes } from 'react'
import {
  setFilterByKeys,
  setFilterByValues,
  setFilterText
} from '../actions'
import styles from './FilterHeader.css'

FilterHeader.propTypes = {
  actionId: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired,
  filterByKeys: PropTypes.bool.isRequired,
  filterByValues: PropTypes.bool.isRequired,
  filterText: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
}

export default function FilterHeader ({
  actionId,
  dispatch,
  filterByKeys,
  filterByValues,
  filterText,
  theme
}) {
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

  return (
    <div
      className={styles.FilterHeader__header}
      style={{ backgroundColor: theme.base02 }}
    >
      <div
        className={styles.FilterHeader__header__titleRow}
        style={{ color: theme.base06 }}
      >
        <div className={styles.FilterHeader__header__title}>
          Filter by
        </div>

        <label
          className={styles.FilterHeader__label}
          style={{ color: theme.base0D }}
        >
          <input
            type='checkbox'
            checked={filterByKeys}
            onChange={onFilterByKeysChange}
          />
          keys
        </label>
        <label
          className={styles.FilterHeader__label}
          style={{ color: theme.base0B }}
        >
          <input
            type='checkbox'
            checked={filterByValues}
            onChange={onFilterByValuesChange}
          />
          values
        </label>
      </div>
      <input
        className={styles.FilterHeader__input}
        style={{
          backgroundColor: theme.base06,
          color: theme.base00
        }}
        type='text'
        placeholder='Filter by /regex/i or "string"'
        value={filterText}
        onChange={onFilterTextChange}
      />
    </div>
  )
}
