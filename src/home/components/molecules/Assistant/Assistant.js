/*
 *
 * Assistant
 *
 */

import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import imgUrl from 'assets/img/lunch-cover-image.png'

import './style.css'

const Assistant = () => (
  <div className="assistant wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="assistant__info">
      <div className="assistant__info__header">
        Lunch assistant
      </div>
      <div className="assistant__info__content">
      Design for an AI based chatbot to make lunch experience more fulfilling and spontaneous.
      </div>
      <Link href="/lunch" className="assistant__info__link">
        See it here
      </Link>
    </div>
    <div className="assistant__video-block">
      <Link href="/lunch" className="assistant__link">
        <img className="assistant__video-block__video" src={imgUrl} />
      </Link>
    </div>
  </div>
)

export default Assistant
