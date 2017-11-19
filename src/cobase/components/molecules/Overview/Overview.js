/*
 *
 * Overview
 *
 */

import { h, Component } from 'preact'

import imageUrl from 'assets/img/cobase-project-image-3@2x.png'

import './style.css'

const Overview = () => (
  <div className="overview wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="overview__info">
      <div className="overview__info__header">Overview</div>
      <div className="overview__info__content">
      This view helps project managers to make sure that work is going
      according to plan and the tasks are on time. The main focus is
      on issues and their status.
      </div>
    </div>
    <div className="overview__image-block">
      <img className="overview__image-block__image" src={imageUrl} />
    </div>
  </div>
)

export default Overview
