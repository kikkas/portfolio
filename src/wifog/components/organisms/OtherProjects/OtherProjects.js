/*
 *
 * OtherProjects
 *
 */

import { h, Component } from 'preact'

import CobaseProject from '@/wifog/components/molecules/CobaseProject'
import SayHello from '@/cobase/components/molecules/SayHello'

import './style.css'

const OtherProjects = () => (
  <div className="wifog-other-projects">
    <div className="wifog-other-projects__header">See other projects</div>
    <div className="wifog-other-projects__content">
      <CobaseProject />
      <SayHello />
    </div>
  </div>
)

export default OtherProjects
