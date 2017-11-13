/*
 *
 * Solution
 *
 */

import { h, Component } from 'preact'

import imgUrlSolution3 from 'assets/img/whiteoverlay-7.png'

import './style.css'

const Solution = () => (
  <div className="solution">
    <div className="solution__info">
      <div className="solution__info__title">Solution</div>
      <div className="solution__info__description">
        In order to faciliatet this kind a content we use swipeable card models.
        Based on user interactions we can decide what card to show and what not.
      </div>
    </div>
    <div className="solution__wrapper">
      <img src={imgUrlSolution3} className="solution__img" />
    </div>
  </div>
)

export default Solution
