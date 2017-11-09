/*
 *
 * ToolsUsed
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import { Link } from 'preact-router/match'

import './style.css'

export default class ToolsUsed extends Component {
  render() {
    return (
      <div className="tools-used">
        <div className="tools-used__name">Tools used:</div>
        <div className="tools-used__list">
          <Link href="#" className="tools-used__list__link">
            Sketch
          </Link>
          <Link href="#" className="tools-used__list__link">
            Principle
          </Link>
          <Link href="#" className="tools-used__list__link">
            Framer
          </Link>
          <Link href="#" className="tools-used__list__link">
            Zeplin
          </Link>
        </div>
      </div>
    )
  }
}
