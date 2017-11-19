/*
 *
 * OtherProjects
 *
 */

import { h, Component } from 'preact'


import Cobase from '@/shared/components/Cobase'
import Wifog from '@/shared/components/Wifog'

import './style.css'

const OtherProjects = () => (
  <div className="other-projects">
    <div className="other-projects__header">See other projects</div>
    <div className="other-projects__content">
      <Cobase />
      <Wifog />
    </div>
  </div>
)

export default OtherProjects
