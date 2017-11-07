/*
 *
 * TopBlock
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import './style.css'

export default class TopBlock extends Component {
  render() {
    return (
      <div className="cobase-top-block">
        <div className="cobase-top-block__header">
          Cobase - building on steroids
        </div>
        <div className="cobase-top-block__platform">Web, iOS, Android</div>
      </div>
    )
  }
}
