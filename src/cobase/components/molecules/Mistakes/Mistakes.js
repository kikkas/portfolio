/*
 *
 * Mistakes
 *
 */

import { h, Component } from 'preact'

import imageUrl from 'assets/img/cobase-project-image-1@2x.png'

import './style.css'

const Mistakes = () => (
  <div className="mistakes">
    <div className="mistakes__image-block">
      <img className="mistakes__image-block__image" src={imageUrl} />
    </div>
    <div className="mistakes__info">
      <div className="mistakes__info__header">
        Acurate information, less mistakes
      </div>
      <div className="mistakes__info__content">
        Mistakes on construction site ofen happen because not detailed enough
        description of the issue or task. To avoid this kind a mistakes we
        developed a system were all tasks are aslo connected with certain point
        on costruction blueprint. This way you can always be sure that the
        location is given as accurately as possible.
      </div>
    </div>
  </div>
)

export default Mistakes
