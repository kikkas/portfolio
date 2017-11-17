/*
 *
 * BeingTransparent
 *
 */

import { h, Component } from 'preact'

import videoUrlTransparent from 'assets/video/wifog-transparent-2.mp4'

import './style.css'

const Transparent = () => (
  <div className="transparent wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="transparent__info">
      <div className="transparent__info__title">Being transparent</div>
      <div className="transparent__info__description">
        Early on when we did our user test we found out that people do not
        understand where does the money come from and how much we take
        ourselves. This is something we felt needs to be clarified.
      </div>
    </div>
    <div className="transparent__wrapper">
      <video
        src={videoUrlTransparent}
        className="transparent__wrapper__video"
        autoPlay
        loop
      />
    </div>
  </div>
)

export default Transparent
