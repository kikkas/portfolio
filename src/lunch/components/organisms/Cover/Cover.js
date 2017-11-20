
/*
 *
 * Cover
 *
 */

import { h, Component } from 'preact'

import videoUrl from 'assets/video/lunch-cover-video.mp4'
import imgUrl from 'assets/img/lunch-cover-image.png'


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
        <div className="lunch-cover">
          <video src={videoUrl} className="lunch-cover__video-block" autoPlay loop />
        </div>
        ) : (
        <div className="lunch-cover">
          <img className="lunch-cover__video-block" src={imgUrl} />
        </div>
        )}
      </div>
    )
  }
}
