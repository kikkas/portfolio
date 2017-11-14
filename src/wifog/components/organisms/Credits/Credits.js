/*
 *
 * Credits
 *
 */

import { h, Component } from 'preact'

import imgUrlCredits from 'assets/img/wifog-project-image-2@2x.png'

import './style.css'

const Credits = () => (
  <div className="credits">
    <div className="credits__info">
      <div className="credits__info__title">Working with credits</div>
      <div className="credits__info__description">
        When it comes rewarding users the tricky part is coming up with credit
        model that could work across the platform. People do undestand the
        concept of money but credit becomes more uncertain where it doesn’t have
        a clear value.
      </div>
    </div>
    <div className="credits__wrapper">
      <img src={imgUrlCredits} className="credits__img" />
    </div>
  </div>
)

export default Credits
