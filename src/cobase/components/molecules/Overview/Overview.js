/*
 *
 * Overview
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import imageUrl from 'assets/img/cobase-project-image-3@2x.png'

import './style.css'

export default class Overview extends Component {
  render() {
    return (
      <div className="overview">
        <div className="overview__info">
          <div className="overview__info__header">Good overview</div>
          <div className="overview__info__content">
            For user one of the main views is task manager view that gives them
            overview of the progress on construction site. This view has to be
            fit teams from 2 - 30 people in size that makes data design
            extreamly hard.
          </div>
        </div>
        <div className="overview__image-block">
          <img className="overview__image-block__image" src={imageUrl} />
        </div>
      </div>
    )
  }
}
