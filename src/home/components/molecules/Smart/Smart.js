/*
 *
 * Smart
 *
 */

import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import imageUrl from 'assets/img/wifog-cms@2x.png'
import imageSmUrl from 'assets/img/wifog-cms-sm@2x.png'

import './style.css'

export default class Smart extends Component {
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
      <div className="smart">
        <div className="smart__info">
          <div className="smart__info__header">Consume smart on internet</div>
          <div className="smart__info__content">
            How to make people convert their time into value while browsing
            internet?
          </div>
          <Link href="/wifog" className="smart__info__link">
            Find out here
          </Link>
        </div>
        <div className="smart__image-block">
          {this.state.windowWidth > 767 ? (
            <img className="smart__image-block__image" src={imageUrl} />
          ) : (
            <img className="smart__image-block__image" src={imageSmUrl} />
          )}
        </div>
      </div>
    )
  }
}
