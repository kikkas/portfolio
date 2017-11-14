/*
 *
 * Smart
 *
 */

import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import videoUrl from 'assets/video/cobase-cover-video-2.mp4'

import './style.css'

const Smart = () => (
  <div className="smart">
    <div className="smart__info">
      <div className="smart__info__header">Consume smart on internet</div>
      <div className="smart__info__content">
        How to make people convert their time into value while browsing
        internet?
      </div>
      <Link href="/cobase" className="smart__info__link">
        Find out here
      </Link>
    </div>
    <div className="smart__video-block">
      <Link href="/cobase">
        <video
          src={videoUrl}
          className="assistant__video-block__video"
          autoPlay
          loop
        />
      </Link>
    </div>
  </div>
)

export default Smart
