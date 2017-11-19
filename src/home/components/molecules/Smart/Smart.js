/*
 *
 * Smart
 *
 */

import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import imgUrl from 'assets/img/wifog-cms@2x.png'

import './style.css'

const Smart = () => (
  <div className="smart wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="smart__info" >
      <div className="smart__info__header">Wifog rewards </div>
      <div className="smart__info__content">
        Wifog is a reward platform where users get paid in exchange for solving small tasks.
      </div>
      <Link href="/wifog" className="smart__info__link">
        See it here
      </Link>
    </div>
    <div className="smart__video-block">
      <Link href="/wifog" className="smart__link">
        <img className="assistant__video-block__video" src={imgUrl} />
      </Link>
    </div>
  </div>
)

export default Smart
