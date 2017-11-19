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
      <div className="deals__info__title">CMS for partners</div>
      <div className="deals__info__description">
      As majority of the deals are created by partners it becomes important
      to have a tool to create and target them to the right user groups.
      CMS will help partners to set up a campaign, use their visual materials
      and send it to their target audience.
      </div>
    </div>
    <div className="deals__image">
      <img src={imgUrlDeals} className="deals__image__img" />
    </div>
  </div>
)

export default Deals
