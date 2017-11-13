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
      <div className={`footer-old ${light ? 'footer-old--light' : ''}`}>
        <div className="footer-old__content">
          <div className="footer-old__col">
            {window.innerWidth > 767 ? (
              <span>Martin Kikkas</span>
            ) : (
              <span>kikkas.</span>
            )}
          </div>
          <div className="footer-old__col">Email me</div>
          <div className="footer-old__col">Medium</div>
          <div className="footer-old__col">Dribbble</div>
          {window.innerWidth > 767 ? (
            <div className="footer-old__col">LinkedIn</div>
          ) : null}
        </div>
      </div>
    )
  }
}
