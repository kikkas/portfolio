
/*
 *
 * Cover
 *
 */

import { h, Component } from 'preact'

import videoUrl from 'assets/video/Wifog-cover-video.mp4'
import imgUrl from 'assets/img/wifog-cover-image-sm@2x 2.png'


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
      <div>
        {this.state.windowWidth > 767 ? (
        <div className="wifog-cover wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
          <video src={videoUrl} className="wifog-cover__video-block" autoPlay loop mute />
        </div>
        ) : (
        <div className="wifog-cover wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
          <img className="wifog-cover__video-block" src={imgUrl} />
        </div>
        )}
      </div>
    )
  }
}
