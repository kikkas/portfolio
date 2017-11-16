/*
 *
 * Footer
 *
 */

import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import './style.css'

const Footer = () => (
  <div className="footer wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <Link href="#" className="footer__email">
      Email me
    </Link>
    <div className="footer__content">
      <Link href="#" className="footer__content__col">
        Medium
      </Link>
      <Link href="#" className="footer__content__col">
        Dribbble
      </Link>
      <Link href="#" className="footer__content__col">
        Linkedin
      </Link>
    </div>
  </div>
)

export default Footer
