/*
 *
 * OtherProjects
 *
 */

import { h, Component } from 'preact'

import Lunch from '@/shared/components/Lunch'
import Wifog from '@/shared/components/Wifog'




import './style.css'

const OtherProjects = () => (
  <div className="other-projects wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="other-projects__header">See other projects</div>
    <div className="other-projects__content">
      <Wifog />
      <Lunch />
    </div>
  </div>
)

export default OtherProjects
