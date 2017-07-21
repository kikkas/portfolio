/*
 *
 * Footer
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import './style.css'


export default class Footer extends React.Component {
  static propTypes = {
    light: PropTypes.bool,
  }

  render() {
    const { light } = this.props

    return (
      <div
        className={`footer ${
          light ? 'footer--light' : ''
        }`}
      >
        <div className="footer__content">
          <div className="footer__col">
            Martin Kikkas
          </div>
          <div className="footer__col">
            Email me
          </div>
          <div className="footer__col">
            Medium
          </div>
          <div className="footer__col">
            Dribbble
          </div>
          <div className="footer__col">
            LinkedIn
          </div>
        </div>
      </div>
    )
  }
}
