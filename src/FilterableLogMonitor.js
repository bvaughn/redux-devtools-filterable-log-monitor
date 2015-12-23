/** @flow */
import React, { Component, PropTypes } from 'react'
import reducer from './reducers'
import shouldPureComponentUpdate from 'react-pure-render/function'
import * as themes from 'redux-devtools-themes'
import { buildSearchIndex } from './actions'
import FilterableState from './components/FilterableState'
import styles from './FilterableLogMonitor.css'

export default class FilterableLogMonitor extends Component {
  static shouldComponentUpdate = shouldPureComponentUpdate

  static update = reducer

  static propTypes = {
    actionsById: PropTypes.object,
    computedStates: PropTypes.array,
    dispatch: PropTypes.func,
    monitorState: PropTypes.shape({
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
        actions
      },
      stagedActionIds
    } = this.props

    const theme = this._getTheme()
    const filterableStates = []

    if (actions) {
      stagedActionIds.forEach(actionId => {
        const action = actionsById[actionId]
        const monitorStateAction = actions[actionId]

        if (monitorStateAction) {
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
        {filterableStates.reverse()}
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
