/*
 *
 * Footer
 *
 */

import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import './style.css'

const Footer = () => (
  <div className="cobase-footer">
    <Link href="#" className="cobase-footer__email">
      Email me
    </Link>
    <div className="cobase-footer__content">
      <Link href="#" className="cobase-footer__content__col">
        Medium
      </Link>
      <Link href="#" className="cobase-footer__content__col">
        Dribbble
      </Link>
      <Link href="#" className="cobase-footer__content__col">
        Linkedin
      </Link>
    </div>
  </div>
)

export default Footer
