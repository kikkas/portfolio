/*
 *
 * BeingTransparent
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'



import videoUrlTransparent from 'assets/video/wifog-transparent-2.mp4'


import './style.css'

export default class Transparent extends Component {
  render() {
    return (
      <div className="transparent">
          <div className="transparent__info">
                <div className="transparent__info__title">
                  Being transparent
                </div>
                <div className="transparent__info__description">
                    Early on when we did our user test we found out that
                    people do not understand where does the money come from
                    and how much we take ourselves. This is something we felt
                    needs to be clarified.
                </div>
            </div>
            <div className="transparent__wrapper">
            <video
              src={videoUrlTransparent}
              className="transparent__video"
              autoPlay={true}
              loop={true}
            />
            </div>
      </div>
    )
  }
}
