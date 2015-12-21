/** @flow */
import { actions } from './resources'
import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import styles from './Application.css'

class Application extends Component {
  static propTypes = {
    udpateState: PropTypes.func.isRequired
  }

  componentDidMount () {
    const { udpateState } = this.props

    udpateState()
  }

  render () {
    const { udpateState } = this.props

    return (
      <div className={styles.Application}>
        <h1>
          redux-devtools-filterable-log-monitor
          &nbsp;
          <small>
            <a href='https://github.com/bvaughn/redux-devtools-filterable-log-monitor'>view in Github</a>
          </small>
        </h1>

        <p>
          Use the log monitor to the side to filter the Redux store.
          (You can filter using strings or regular expressions!)
          Use the button below to trigger a store update (adding more random data).
        </p>

        <button
          className={styles.Button}
          onClick={udpateState}
        >
          Update State
        </button>

        <p>
          Apologies for the basic demo; I hope to add more soon!
          In the meanwhile check out the <a href='https://github.com/bvaughn/redux-devtools-filterable-log-monitor'>documentation</a> to learn more.
        </p>
      </div>
    )
  }
}

const selectors = () => ({})

export default connect(selectors, actions)(Application)
