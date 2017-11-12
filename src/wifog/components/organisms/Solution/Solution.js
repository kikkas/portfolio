/*
 *
 * Solution
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'





import imgUrlSolution3 from 'assets/img/whiteoverlay-7.png'


import './style.css'

export default class Solution extends Component {
  render() {
    return (
      <div className="solution">
          <div className="solution__info">
                <div className="solution__info__title">
                  Solution
                </div>
                <div className="solution__info__description">
                    In order to faciliatet this kind a content we use
                    swipeable card models. Based on user interactions we
                    can decide what card to show and what not.
                </div>
            </div>
            <div className="solution__wrapper">
              <img src={imgUrlSolution3} className="solution__img" />
            </div>
      </div>
    )
  }
}
