/*
 *
 * BrowsingInternet
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import cobaseImgUrl from 'assets/img/cobase-project@2x.png'
import cobaseSmImgUrl from 'assets/img/cobase-project-sm@2x.png'
import { Link } from 'preact-router/match'

import './style.css'

export default class BrowsingInternet extends Component {
  state = {
    windowWidth: window.innerWidth,
  }

  componentWillMount() {
    window.addEventListener('resize', this._saveWindowWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._saveWindowWidth)
  }

  _saveWindowWidth = () => {
    this.setState({ windowWidth: window.innerWidth })
  }

  render() {
    return (
      <div className="browsing">
        <div className="browsing__cobase">
          {this.state.windowWidth > 767 ? (
            <img src={cobaseImgUrl} className="browsing__cobase__image" />
          ) : (
            <img src={cobaseSmImgUrl} className="browsing__cobase__image" />
          )}
        </div>
        <div className="browsing__info">
          <div className="browsing__info__header">
            Building a building 2.0
          </div>
          <div className="browsing__info__content">
            Design of a platform that brings construction into today.
          </div>
          <Link href="#" className="browsing__info__link">
            Find out here
          </Link>
        </div>
      </div>
    )
  }
}
