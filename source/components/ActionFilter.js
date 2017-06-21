/** @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'
import { setActionFilterText } from '../actions'

const DEBOUNCE_TIME = 250

export default class ActionFilter extends Component {
  static propTypes = {
    actionFilterText: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this._debouncedOnActionFilterTextChange = debounce(
      this._onActionFilterTextChange.bind(this),
      DEBOUNCE_TIME
    )
  }

  render () {
    const {
      actionFilterText,
      theme
    } = this.props

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
          placeholder='Filter actions by type..'
          defaultValue={actionFilterText}
          onChange={this._debouncedOnActionFilterTextChange}
        />
      </div>
    )
  }

  _onActionFilterTextChange () {
    const actionFilterText = this.refs.input.value
    const { dispatch } = this.props

    dispatch(setActionFilterText({
      actionFilterText
    }))
  }
}
