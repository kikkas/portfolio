/*
 *
 * CreatingDeals
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'


import imgUrlDeals from 'assets/img/wifog-cms-2.png'


import './style.css'

export default class Deals extends Component {
  render() {
    return (
      <div className="deals">
          <div className="deals__info">
                <div className="deals__info__title">
                  Creating deals
                </div>
                <div className="deals__info__description">
                    Early on when we did our user test we found
                    out that people do not understand where does
                    the money come from and how much we take ourselves.
                    This is something we felt needs to be clarified.
                </div>
            </div>
            <div className="deals__background">
            <div className="deals__wrapper">
              <img src={imgUrlDeals} className="deals__img" />
            </div>
            </div>
      </div>
    )
  }
}
