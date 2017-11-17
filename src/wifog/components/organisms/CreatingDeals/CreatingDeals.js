/*
 *
 * CreatingDeals
 *
 */

import { h, Component } from 'preact'

import imgUrlDeals from 'assets/img/wifog-cms-2.png'

import './style.css'

const Deals = () => (
  <div className="deals wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="deals__info">
      <div className="deals__info__title">Creating deals</div>
      <div className="deals__info__description">
        Early on when we did our user test we found out that people do not
        understand where does the money come from and how much we take
        ourselves. This is something we felt needs to be clarified.
      </div>
    </div>
    <div className="deals__image">
      <img src={imgUrlDeals} className="deals__image__img" />
    </div>
  </div>
)

export default Deals
