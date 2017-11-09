/*
 *
 * OtherProjects
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import wifogImgUrl from 'assets/img/wifog-cms@2x.png'
import lunchImgUrl from 'assets/img/lunch-app@2x.png'

import './style.css'

export default class OtherProjects extends Component {
  render() {
    return (
      <div className="other-projects">
        <div className="other-projects__header">See other projects</div>
        <div className="other-projects__content">
          <div className="other-projects__content__images">
            <img
              src={wifogImgUrl}
              className="other-projects__content__images__image"
            />
          </div>
          <div className="other-projects__content__images">
            <img
              src={lunchImgUrl}
              className="other-projects__content__images__image"
            />
          </div>
        </div>
      </div>
    )
  }
}
