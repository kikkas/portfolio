/*
 *
 * Solution
 *
 */

import { h, Component } from 'preact'

import imgUrlSolution3 from 'assets/img/whiteoverlay-7.png'

import './style.css'

const Solution = () => (
  <div className="solution wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="solution__info">
      <div className="solution__info__title">Swipeable cards</div>
      <div className="solution__info__description">
      It seemed most viable to present every task as a separate card where the user
      can make a decision to solve the task or skip it for that moment. On the card
      there is an estimated time of how long it takes to complete the task and the
      amount of credits you will receive as a reward.
      </div>
    </div>
    <div className="solution__wrapper">
      <img src={imgUrlSolution3} className="solution__img" />
    </div>
  </div>
)

export default Solution
