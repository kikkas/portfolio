/*
 *
 * Cover
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import videoUrl from 'assets/video/Wifog-cover-video.mp4'

import './style.css'

export default class Cover extends Component {
  render() {
    return (
      <div className="wifog-cover">
        <video
          src={videoUrl}
          className="wifog-cover__video-block"
          autoPlay
          loop
        />
      </div>
    )
  }
}
