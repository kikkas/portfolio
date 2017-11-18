/*
 *
 * Cover
 *
 */

import { h, Component } from 'preact'

import videoUrl from 'assets/video/cobase-cover-small-test.mp4'

import './style.css'

const Cover = () => (
  <div className="cobase-cover">
    <video src={videoUrl} className="cobase-cover__video-block" autoPlay loop />
  </div>
)

export default Cover
