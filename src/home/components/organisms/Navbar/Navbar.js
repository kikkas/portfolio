/*
 *
 * Navbar
 *
 */

import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import './style.css'

const Navbar = props => (
  <div className="navbar-home">
    <div className="navbar-home__logo">Martin Kikkas</div>
    <div className="navbar-home__content">
      <Link className="navbar-home__content__link" href={props.link}>
        {props.title}
      </Link>
    </div>
  </div>
)

export default Navbar
