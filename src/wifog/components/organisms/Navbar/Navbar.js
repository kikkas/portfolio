/*
 *
 * Navbar
 *
 */

import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import PropTypes from 'prop-types'

import './style.css'

export default class Navbar extends Component {
  render() {
    const { title, link } = this.props
    return (
      <div className="navbar-wifog">
        <div className="navbar-wifog__logo">Martin Kikkas</div>
        <div className="navbar-wifog__content">
          <Link className="navbar-wifog__content__link" href={link}>
            {title}
          </Link>
        </div>
      </div>
    )
  }
}
