/** @flow */
import React, { Component, PropTypes } from 'react'
import {
  setFilterByKeys,
  setFilterByValues,
  setFilterText,
  setExpanded
} from '../actions'
import debounce from 'lodash.debounce'
import 'date-format-lite'
import MediaQuery from 'react-responsive'

const DEBOUNCE_TIME = 250

export default class FilterHeader extends Component {
  static propTypes = {
    action: PropTypes.object.isRequired,
    actionId: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired,
    monitorStateAction: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this._onFilterByKeysChange = this._onFilterByKeysChange.bind(this)
    this._onFilterByValuesChange = this._onFilterByValuesChange.bind(this)
    this._onFilterTextChange = this._onFilterTextChange.bind(this)
    this._toggleExpanded = this._toggleExpanded.bind(this)

    this._debouncedOnFilterTextChange = debounce(
      this._onFilterTextChange,
      DEBOUNCE_TIME
    )
  }

  render () {
    const {
      action,
      monitorStateAction,
      theme
    } = this.props

    const {
      expanded,
      filterByKeys,
      filterByValues,
      filterText,
      time
    } = monitorStateAction

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
            onClick={this._toggleExpanded}
          />

          <div
            title={action.type}
            onClick={this._toggleExpanded}
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
                onChange={this._onFilterByKeysChange}
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
                onChange={this._onFilterByValuesChange}
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
              ref='input'
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
              onChange={this._debouncedOnFilterTextChange}
            />
          </div>
        }
      </div>
    )
  }

  _onFilterByKeysChange (event) {
    const filterByKeys = event.target.checked
    const {
      actionId,
      dispatch
    } = this.props

    dispatch(setFilterByKeys({
      actionId,
      filterByKeys
    }))
  }

  _onFilterByValuesChange (event) {
    const filterByValues = event.target.checked
    const {
      actionId,
      dispatch
    } = this.props

    dispatch(setFilterByValues({
      actionId,
      filterByValues
    }))
  }

  _onFilterTextChange (event) {
    const filterText = this.refs.input.value
    const {
      actionId,
      dispatch
    } = this.props

    dispatch(setFilterText({
      actionId,
      filterText
    }))
  }

  _toggleExpanded () {
    const {
      actionId,
      dispatch,
      monitorStateAction
    } = this.props

    const { expanded } = monitorStateAction

    dispatch(setExpanded({
      actionId,
      expanded: !expanded
    }))
  }
}
