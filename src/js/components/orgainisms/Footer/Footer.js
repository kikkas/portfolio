/*
 *
 * Footer
 *
 */

import React from 'react'

import './style.css'


export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
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
