/** @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import reducer from './reducers'
import * as themes from 'redux-devtools-themes'
import { addActionMetadata } from './actions'
import ActionFilter from './components/ActionFilter'
import FilterableState from './components/FilterableState'
import { createRegExpFromFilterText } from './utils'

export default class FilterableLogMonitor extends Component {
  static update = reducer;

  static propTypes = {
    actionsById: PropTypes.object,
    computedStates: PropTypes.array,
    dispatch: PropTypes.func,
    monitorState: PropTypes.shape({
      actionIdToDatumMap: PropTypes.object,
      actionFilterText: PropTypes.string
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

  constructor (props) {
    super(props)

    this._isAutoScrollEnabled = true

    this._onScroll = this._onScroll.bind(this)
    this._setContainerRef = this._setContainerRef.bind(this)
    this._setWrapperRef = this._setWrapperRef.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    const { actionsById, dispatch, stagedActionIds } = this.props

    if (nextProps.stagedActionIds !== stagedActionIds) {
      for (var i = stagedActionIds.length; i < nextProps.stagedActionIds.length; i++) {
        let actionId = nextProps.stagedActionIds[i]
        let action = actionsById[actionId]
        let appState = nextProps.computedStates[i].state

        dispatch(addActionMetadata({ action, actionId, appState }))
      }
    }
  }

  componentDidMount () {
    this._autoScroll()
  }

  componentDidUpdate () {
    this._autoScroll()
  }

  render () {
    const {
      actionsById,
      dispatch,
      monitorState: {
        actionFilterText,
        actionIdToDatumMap
      },
      stagedActionIds
    } = this.props

    const theme = this._getTheme()
    const filterableStates = actionIdToDatumMap && stagedActionIds
      .filter(actionId => {
        const actionMetadata = actionsById[actionId]
        const monitorStateAction = actionIdToDatumMap[actionId]

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
        const monitorStateAction = actionIdToDatumMap[actionId]

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
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: theme.base00,
          color: theme.base07,
          fontSize: 14,
          minWidth: 200
        }}>
        <ActionFilter
          actionFilterText={actionFilterText}
          dispatch={dispatch}
          theme={theme}
        />
        <div
          ref={this._setWrapperRef}
          style={{
            flex: '1',
            overflowY: 'scroll'
          }}
          onScroll={this._onScroll}>
          <div ref={this._setContainerRef}>
            {filterableStates}
          </div>
        </div>
      </div>
    )
  }

  _autoScroll () {
    if (this._isAutoScrollEnabled) {
      this._wrapperRef.scrollTop = this._containerRef.offsetHeight
    }
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

  _onScroll () {
    this._isAutoScrollEnabled =
      this._wrapperRef.scrollTop + this._wrapperRef.offsetHeight >=
      this._containerRef.offsetHeight
  }

  _setContainerRef (ref) {
    this._containerRef = ref
  }

  _setWrapperRef (ref) {
    this._wrapperRef = ref
  }
}
