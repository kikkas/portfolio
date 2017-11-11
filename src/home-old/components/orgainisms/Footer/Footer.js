/*
 *
 * Footer
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import './style.css'

export default class Footer extends Component {
  static propTypes = {
    light: PropTypes.bool,
  }

  render() {
    const { light } = this.props

    return (
      <div className={`footer ${light ? 'footer--light' : ''}`}>
        <div className="footer__content">
          <div className="footer__col">
            {window.innerWidth > 767 ? (
              <span>Martin Kikkas</span>
            ) : (
              <span>kikkas.</span>
            )}
          </div>
          <div className="footer__col">Email me</div>
          <div className="footer__col">Medium</div>
          <div className="footer__col">Dribbble</div>
          {window.innerWidth > 767 ? (
            <div className="footer__col">LinkedIn</div>
          ) : null}
        </div>
      </div>
    )
  }
}
