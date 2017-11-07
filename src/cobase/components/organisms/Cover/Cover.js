/*
 *
 * Cover
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import imageUrl from 'assets/img/cobase-cover@2x.png'
import imageMobUrl from 'assets/img/cobase-cover-mobile@2x.png'

import './style.css'

export default class Cover extends Component {
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
      <div className="cobase-cover">
        {this.state.windowWidth > 767 ? (
          <img className="cobase-cover__image" src={imageUrl} />
        ) : (
          <img className="cobase-cover__image" src={imageMobUrl} />
        )}
      </div>
    )
  }
}
