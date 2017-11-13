/*
 *
 * Cover
 *
 */

import { h, Component } from 'preact'

import videoUrl from 'assets/video/lunch-cover.mp4'

import './style.css'

const Cover = () => (
  <div className="lunch-cover">
    <video src={videoUrl} className="lunch-cover__video-block" autoPlay  />
  </div>
)

export default Cover
