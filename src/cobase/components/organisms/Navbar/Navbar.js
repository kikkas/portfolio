/*
 *
 * Navbar
 *
 */

import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import './style.css'

const Navbar = props => (
  <div className="navbar-cobase">
    <div className="navbar-cobase__logo">Martin Kikkas</div>
    <div className="navbar-cobase__content">
      <Link className="navbar-cobase__content__link" href={props.link}>
        {props.title}
      </Link>
    </div>
  </div>
)

export default Navbar
