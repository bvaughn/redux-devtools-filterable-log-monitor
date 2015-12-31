/** @flow */
import React, { PropTypes } from 'react'
import {
  setFilterByKeys,
  setFilterByValues,
  setFilterText,
  setExpanded
} from '../actions'
import debounce from 'lodash.debounce'
import 'date-format-lite'
import MediaQuery from 'react-responsive'

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
    expanded,
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

  function toggleExpanded () {
    dispatch(setExpanded({
      actionId,
      expanded: !expanded
    }))
  }

  // Debounce for better usability
  const debouncedOnFilterTextChange = debounce(onFilterTextChange, DEBOUNCE_TIME)

  return (
    <div
      style={{
        flex: '0 0 auto',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '.5em',
          backgroundColor: theme.base02,
          color: theme.base06
        }}
      >
        <div
          style={{
            display: 'inline-block',
            marginRight: '5px',
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTopWidth: '5px',
            borderTopStyle: 'solid',
            cursor: 'pointer',
            transition: '150ms',
            transform: expanded ? 'rotateZ(0deg)' : 'rotateZ(-90deg)',
            borderTopColor: expanded ? theme.base06 : theme.base05
          }}
          onClick={toggleExpanded}
        />

        <div
          title={action.type}
          onClick={toggleExpanded}
          style={{
            flex: '1 1 auto',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflowX: 'hidden',
            cursor: 'pointer'
          }}
        >
          {action.type}

          <MediaQuery query='(min-width: 1024px)'>
            <span
              style={{
                color: theme.base05,
                fontSize: '.6em',
                marginLeft: '.6em'
              }}
            >
              {`(${time.format('H:mm:ss A')})`}
            </span>
          </MediaQuery>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flex: '0 0 auto',
            marginLeft: '.5em',
            fontSize: '.8em'
          }}
        >
          <MediaQuery query='(min-width: 1024px)'>
            <div
              style={{
                flex: '0 0 auto'
              }}
            >
              Filter by
            </div>
          </MediaQuery>
          <label
            style={{
              flex: '0 0 auto',
              marginLeft: '.5em',
              fontWeight: 'normal',
              color: theme.base0D
            }}
          >
            <input
              type='checkbox'
              checked={filterByKeys}
              onChange={onFilterByKeysChange}
            />
            Keys
          </label>
          <label
            style={{
              flex: '0 0 auto',
              marginLeft: '.5em',
              fontWeight: 'normal',
              color: theme.base0B
            }}
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

      {expanded &&
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            backgroundColor: theme.base01,
            color: theme.base06,
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
            placeholder='Filter by /regex/i or "string"'
            defaultValue={filterText}
            onChange={debouncedOnFilterTextChange}
          />
        </div>
      }
    </div>
  )
}
