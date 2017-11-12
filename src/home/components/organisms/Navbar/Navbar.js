/*
 *
 * Navbar
 *
 */

import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import './style.css'

const Navbar = props => (
  <div className="navbar">
    <div className="navbar__logo">Martin Kikkas</div>
    <div className="navbar__content">
      <Link className="navbar__content__link" href={props.link}>
        {props.title}
      </Link>
    </div>
  </div>
)

export default Navbar
