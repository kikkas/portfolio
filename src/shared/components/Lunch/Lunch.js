/*
 *
 * Lunch
 *
 */

import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import lunchImgUrl from 'assets/img/lunch-app@2x.png'
import lunchSmImgUrl from 'assets/img/lunch-app-sm@2x.png'

import './style.css'

export default class Lunch extends Component {
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
      <div className="hello">
        <div className="hello__lunch">
          {this.state.windowWidth > 767 ? (
            <img src={lunchImgUrl} className="hello__lunch__image" />
          ) : (
            <img src={lunchSmImgUrl} className="hello__lunch__image" />
          )}
        </div>
        <div className="hello__info">
          <div className="hello__info__header">
          Lunch assistant
          </div>
          <div className="hello__info__content">
          Design for an AI based chatbot to make lunch experience more fulfilling and spontaneous.
          </div>
          <Link href="/lunch" className="hello__info__link">
            See it here
          </Link>
        </div>
      </div>
    )
  }
}
