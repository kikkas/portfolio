/*
 *
 * Wifog
 *
 */

import { h, Component } from 'preact'

import wifogImgUrl from 'assets/img/wifog-cms@2x.png'
import wifogSmImgUrl from 'assets/img/wifog-cms-sm@2x.png'
import { Link } from 'preact-router/match'

import './style.css'

export default class Wifog extends Component {
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
            Wifog rewards
          </div>
          <div className="browsing__info__content">
            Wifog is a reward platform where users get paid in exchange for solving small tasks.
          </div>
          <Link href="/wifog" className="browsing__info__link">
            See it here
          </Link>
        </div>
      </div>
    )
  }
}
