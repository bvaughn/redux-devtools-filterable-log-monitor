/** @flow */
import React, { Component, PropTypes } from 'react'
import reducer from './reducers'
import shouldPureComponentUpdate from 'react-pure-render/function'
import * as themes from 'redux-devtools-themes'
import { buildSearchIndex, setActionFilterText } from './actions'
import FilterableState from './components/FilterableState'
import { createRegExpFromFilterText } from './utils'
import debounce from 'lodash.debounce'
import styles from './FilterableLogMonitor.css'

const DEBOUNCE_TIME = 250

export default class FilterableLogMonitor extends Component {
  static shouldComponentUpdate = shouldPureComponentUpdate

  static update = reducer

  static propTypes = {
    actionsById: PropTypes.object,
    computedStates: PropTypes.array,
    dispatch: PropTypes.func,
    monitorState: PropTypes.shape({
      actionFilterText: PropTypes.string,
      actions: PropTypes.object
    }),
    stagedActionIds: PropTypes.array,
    theme: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ])
  }

  static defaultProps = {
    theme: 'nicinabox'
  }

  componentWillReceiveProps (nextProps) {
    const { dispatch, stagedActionIds } = this.props

    if (nextProps.stagedActionIds !== stagedActionIds) {
      for (var i = stagedActionIds.length; i < nextProps.stagedActionIds.length; i++) {
        let actionId = nextProps.stagedActionIds[i]
        let appState = nextProps.computedStates[i].state

        dispatch(buildSearchIndex({ actionId, appState }))
      }
    }
  }

  render () {
    const {
      actionsById,
      dispatch,
      monitorState: {
        actionFilterText,
        actions
      },
      stagedActionIds
    } = this.props

    function onActionFilterTextChange (event) {
      const actionFilterText = event.target.value
      dispatch(setActionFilterText({
        actionFilterText
      }))
    }

    // Debounce for better usability
    const debouncedOnActionFilterTextChange = debounce(onActionFilterTextChange, DEBOUNCE_TIME)

    const theme = this._getTheme()
    const filterableStates = []

    if (actions) {
      stagedActionIds.forEach(actionId => {
        const action = actionsById[actionId]
        const monitorStateAction = actions[actionId]

        if (
          monitorStateAction &&
          (
            !actionFilterText ||
            action.action.type.match(createRegExpFromFilterText(actionFilterText))
          )
        ) {
          const {
            filterByKeys,
            filterByValues,
            filteredState,
            filterText
          } = monitorStateAction

          filterableStates.push(
            <FilterableState
              key={actionId}
              action={action}
              actionId={actionId}
              dispatch={dispatch}
              filterByKeys={filterByKeys}
              filterByValues={filterByValues}
              filteredState={filteredState}
              filterText={filterText}
              theme={theme}
            />
          )
        }
      })
    }

    return (
      <div
        className={styles.FilterableLogMonitor}
        style={{
          backgroundColor: theme.base00,
          color: theme.base07
        }}
      >
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
        <div className={styles.filterableStates}>
          {filterableStates}
        </div>
      </div>
    )
  }

  _getTheme () {
    const { theme } = this.props

    if (typeof theme !== 'string') {
      return theme
    } else if (typeof themes[theme] !== 'undefined') {
      return themes[theme]
    } else {
      console.warn('DevTools theme ' + theme + ' not found, defaulting to nicinabox')
      return themes.nicinabox
    }
  }
}
