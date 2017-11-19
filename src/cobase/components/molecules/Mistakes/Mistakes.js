/*
 *
 * Mistakes
 *
 */

import { h, Component } from 'preact'

import imageUrl from 'assets/img/cobase-project-image-1@2x.png'

import './style.css'

const Mistakes = () => (
  <div className="mistakes wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="mistakes__image-block">
      <img className="mistakes__image-block__image" src={imageUrl} />
    </div>
    <div className="mistakes__info">
      <div className="mistakes__info__header">
      Accurate information, less mistakes
      </div>
      <div className="mistakes__info__content">
      When analyzing  construction mistakes we realized that there
      is a correlation between the low accuracy of information and
      the high number of mistakes. To avoid them we developed an
      issue reporting system that includes things like location on
      blueprint, detailed description and photos.
      </div>
    </div>
  </div>
)

export default Mistakes
