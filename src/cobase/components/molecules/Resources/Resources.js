/*
 *
 * Resources
 *
 */

import { h, Component } from 'preact'

import imageUrl from 'assets/img/cobase-project-image-4@2x.png'

import './style.css'

const Resources = () => (
  <div className="resources">
    <div className="resources__info">
      <div className="resources__info__header">Maxing out resources</div>
      <div className="resources__info__content">
        For user one of the main views is task manager view that gives them
        overview of the progress on construction site. This view has to be fit
        teams from 2 - 30 people in size that makes data design extreamly hard.
      </div>
    </div>
    <div className="resources__image-block">
      <img className="resources__image-block__image" src={imageUrl} />
    </div>
  </div>
)

export default Resources
