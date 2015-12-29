/** @flow */
import React, { Component, PropTypes } from 'react'
import reducer from './reducers'
import shouldPureComponentUpdate from 'react-pure-render/function'
import * as themes from 'redux-devtools-themes'
import { addActionMetadata } from './actions'
import ActionFilter from './components/ActionFilter'
import FilterableState from './components/FilterableState'
import { createRegExpFromFilterText } from './utils'
import styles from './FilterableLogMonitor.css'

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

        dispatch(addActionMetadata({ actionId, appState }))
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

    const theme = this._getTheme()
    const filterableStates = actions && stagedActionIds
      .filter(actionId => {
        const actionMetadata = actionsById[actionId]
        const monitorStateAction = actions[actionId]

        return (
          monitorStateAction &&
          (
            !actionFilterText ||
            actionMetadata.action.type.match(
              createRegExpFromFilterText(actionFilterText)
            )
          )
        )
      })
      .map(actionId => {
        const actionMetadata = actionsById[actionId]
        const monitorStateAction = actions[actionId]

        return (
          <FilterableState
            key={actionId}
            action={actionMetadata.action}
            actionId={actionId}
            dispatch={dispatch}
            monitorStateAction={monitorStateAction}
            theme={theme}
          />
        )
      })

    return (
      <div
        className={styles.FilterableLogMonitor}
        style={{
          backgroundColor: theme.base00,
          color: theme.base07
        }}
      >
        <ActionFilter
          actionFilterText={actionFilterText}
          dispatch={dispatch}
          theme={theme}
        />
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
