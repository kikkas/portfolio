/*
 *
 * Assistant
 *
 */

import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import videoUrl from 'assets/video/lunch-cover.mp4'

import './style.css'

const Assistant = () => (
  <div className="assistant">
    <div className="assistant__info">
      <div className="assistant__info__header">
        Say hello to lunch assistant
      </div>
      <div className="assistant__info__content">
        What it there is an app to make you lunches more fullfilling?
      </div>
      <Link href="/wifog" className="assistant__info__link">
        See how this works
      </Link>
    </div>
    <div className="assistant__video-block">
      <Link href="/wifog">
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

export default Assistant
