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
    <a href="mailto:martinkikkas@hotmail.com" className="footer__email">
      Email me
    </a>
    <div className="footer__content">
      <a href="https://medium.com/@kickasss" className="footer__content__col">
        Medium
      </a>
      <a href="https://dribbble.com/martinkikkas" className="footer__content__col">
        Dribbble
      </a>
      <a href="https://www.linkedin.com/in/martin-kikkas-56bb0023/" className="footer__content__col">
        Linkedin
      </a>
    </div>
  </div>
)

export default Footer
