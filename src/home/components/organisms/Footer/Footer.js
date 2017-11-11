/*
 *
 * Footer
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import { Link } from 'preact-router/match'

import './style.css'

export default class Footer extends Component {
  render() {
    return (
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
  }
}
