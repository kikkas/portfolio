/*
 *
 * Resources
 *
 */

import { h, Component } from 'preact'

import imageUrl from 'assets/img/cobase-project-image-4@2x.png'

import './style.css'

const Resources = () => (
  <div className="resources wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="resources__info">
      <div className="resources__info__header">Resources</div>
      <div className="resources__info__content">
      When running pilots we discovered  that team members with longer
      backlogs are more productive overall. So we created an interface
      were managers can see the task list of each team member and make
      sure that everyone has something to do.
      </div>
    </div>
    <div className="resources__image-block">
      <img className="resources__image-block__image" src={imageUrl} />
    </div>
  </div>
)

export default Resources
