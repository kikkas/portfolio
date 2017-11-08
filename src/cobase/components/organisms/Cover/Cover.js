/*
 *
 * Cover
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import videoUrl from 'assets/video/Cobase-cover-video-2.mp4'

import './style.css'

export default class Cover extends Component {
  render() {
    return (
      <div className="cobase-cover">
        <video
          src={videoUrl}
          className="cobase-cover__video-block"
          autoPlay={true}
        />
      </div>
    )
  }
}
