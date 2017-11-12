/*
 *
 * Footer
 *
 */

import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import './style.css'

const Footer = () => (
  <div className="home-footer">
    <Link href="#" className="home-footer__email">
      Email me
    </Link>
    <div className="home-footer__content">
      <Link href="#" className="home-footer__content__col">
        Medium
      </Link>
      <Link href="#" className="home-footer__content__col">
        Dribbble
      </Link>
      <Link href="#" className="home-footer__content__col">
        Linkedin
      </Link>
    </div>
  </div>
)

export default Footer
