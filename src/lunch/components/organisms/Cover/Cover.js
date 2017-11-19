/*
 *
 * Cover
 *
 */

import { h, Component } from 'preact'

import videoUrl2 from 'assets/video/cobase-cover-small-test.mp4'


import './style.css'

const Cover = () => (
  <div className="lunch-cover">
    <video src={videoUrl2} className="lunch-cover__video-block" autoPlay loop  />
  </div>
)

export default Cover
