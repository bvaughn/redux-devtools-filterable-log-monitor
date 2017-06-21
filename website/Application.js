/** @flow */
import { actions } from './resources'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Application.css'

class Application extends Component {
  static propTypes = {
    udpateArray: PropTypes.func.isRequired,
    udpateList: PropTypes.func.isRequired,
    udpateMap: PropTypes.func.isRequired,
    udpateObject: PropTypes.func.isRequired
  }

  componentDidMount () {
    const { udpateMap } = this.props

    udpateMap()
  }

  render () {
    const { udpateArray, udpateList, udpateMap, udpateObject } = this.props

    return (
      <div className={styles.Application}>
        <a href='https://github.com/bvaughn/redux-devtools-filterable-log-monitor'>
          <img
            width='250'
            height='123'
            src='https://cloud.githubusercontent.com/assets/29597/12027069/779d8f3c-ad8f-11e5-8bac-2f6e8eed7192.png'
            alt='redux devtools filterable log monitor logo'/>
        </a>

        <ul>
          <li>Use the log monitor on the side to filter the Redux store.</li>
          <li>(You can filter using strings or regular expressions!)</li>
          <li>Use the buttons below to trigger a store update (adding more random data).</li>
        </ul>

        <p>
          <UpdateButton
            label='Array'
            labelClass='array'
            onClick={udpateArray}
          />
          <UpdateButton
            label='List'
            labelClass='array'
            onClick={udpateList}
          />
          <UpdateButton
            label='Map'
            labelClass='object'
            onClick={udpateMap}
          />
          <UpdateButton
            label='Object'
            labelClass='object'
            onClick={udpateObject}
          />
        </p>

        <p>
          Apologies for the basic demo.
          I hope to add more soon!
          In the meanwhile check out the <a href='https://github.com/bvaughn/redux-devtools-filterable-log-monitor'>documentation</a> to learn more.
        </p>
      </div>
    )
  }
}

// Import and attach the favicon
document.querySelector('[rel="shortcut icon"]').href = require('file!./favicon.png')

function UpdateButton ({
  label,
  labelClass,
  onClick
}) {
  return (
    <button
      className={styles.Button}
      onClick={onClick}
    >
      <span className={styles.update}>Update</span>
      <span className={styles[labelClass]}>{label}</span>
    </button>
  )
}

const selectors = () => ({})

export default connect(selectors, actions)(Application)
