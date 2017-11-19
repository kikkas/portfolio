/*
 *
 * OtherProjects
 *
 */

import { h, Component } from 'preact'


import Lunch from '@/shared/components/Lunch'
import Cobase from '@/shared/components/Cobase'

import './style.css'

const OtherProjects = () => (
  <div className="wifog-other-projects wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="wifog-other-projects__header">See other projects</div>
    <div className="wifog-other-projects__content">
      <Cobase />
      <Lunch />
    </div>
  </div>
)

export default OtherProjects
