/*
 *
 * Assistant
 *
 */

import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import imageUrl from 'assets/img/lunch-app@2x.png'
import imageSmUrl from 'assets/img/lunch-app-sm@2x.png'

import './style.css'

export default class Assistant extends Component {
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
      <div className="assistant">
        <div className="assistant__info">
          <div className="assistant__info__header">
            Say hello to lunch assistant
          </div>
          <div className="assistant__info__content">
            What it there is an app to make you lunches more fullfilling?
          </div>
          <Link href="/wifog" className="assistant__info__link">
            See how this works
          </Link>
        </div>
        <div className="assistant__image-block">
          {this.state.windowWidth > 767 ? (
            <img className="assistant__image-block__image" src={imageUrl} />
          ) : (
            <img className="assistant__image-block__image" src={imageSmUrl} />
          )}
        </div>
      </div>
    )
  }
}
