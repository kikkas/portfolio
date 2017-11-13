/*
 *
 * BrowsingInternet
 *
 */

import { h, Component } from 'preact'

import wifogImgUrl from 'assets/img/wifog-cms@2x.png'
import wifogSmImgUrl from 'assets/img/wifog-cms-sm@2x.png'
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
        <div className="browsing__wifog">
          {this.state.windowWidth > 767 ? (
            <img src={wifogImgUrl} className="browsing__wifog__image" />
          ) : (
            <img src={wifogSmImgUrl} className="browsing__wifog__image" />
          )}
        </div>
        <div className="browsing__info">
          <div className="browsing__info__header">
            Consume smart on internet
          </div>
          <div className="browsing__info__content">
            How to make people convert their time into value while browsing
            internet?
          </div>
          <Link href="#" className="browsing__info__link">
            Find out here
          </Link>
        </div>
      </div>
    )
  }
}
