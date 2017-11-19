
/*
 *
 * Cover
 *
 */

import { h, Component } from 'preact'

import videoUrl from 'assets/video/cobase-cover-small-test.mp4'
import imgUrl from 'assets/img/cobase-project@2x.png'


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
        <div className="cobase-cover">
          <video src={videoUrl} className="cobase-cover__video-block" autoPlay loop />
        </div>
        ) : (
        <div className="cobase-cover">
          <img className="cobase-cover__video-block" src={imgUrl} />
        </div>
        )}
      </div>
    )
  }
}
