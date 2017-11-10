/*
 *
 * Building
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import { Link } from 'preact-router/match'

import './style.css'

export default class Building extends Component {
  render() {
    return (
      <div className="building">
        <div className="building__project">Featured project</div>
        <div className="building__caption">Building a building 2.0</div>
        <div className="building__info">
          Design of a platform that brings construction into today.
        </div>
        <Link href="#" className="building__link">
          See it here
        </Link>
      </div>
    )
  }
}
