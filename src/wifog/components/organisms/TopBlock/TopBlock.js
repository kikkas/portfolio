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
      <div className="wifog-top-block wow fadeIn">
        <div className="wifog-top-block__header">
          Wifog - consume smartly on internet
        </div>
        <div className="wifog-top-block__platform">iOS, Android</div>
      </div>
    )
  }
}
