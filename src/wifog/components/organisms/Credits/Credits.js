/*
 *
 * Credits
 *
 */

import { h, Component } from 'preact'

import imgUrlCredits from 'assets/img/wifog-project-image-2@2x.png'

import './style.css'

const Credits = () => (
  <div className="credits wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="credits__info">
      <div className="credits__info__title">Currency across the platform</div>
      <div className="credits__info__description">
      Working with credits is much harder as it doesn’t have a certain
      value for users like different currencies do. This makes it important
      to be clear in communication and coherent in UI when it comes to actions
      about earning and spending.
      </div>
    </div>
    <div className="credits__wrapper">
      <img src={imgUrlCredits} className="credits__img" />
    </div>
  </div>
)

export default Credits
