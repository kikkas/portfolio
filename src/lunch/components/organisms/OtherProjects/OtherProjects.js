/*
 *
 * OtherProjects
 *
 */

import { h, Component } from 'preact'

import BrowsingInternet from '@/lunch/components/molecules/BrowsingInternet'
import CobaseProject from '@/lunch/components/molecules/CobaseProject'

import './style.css'

const OtherProjects = () => (
  <div className="other-projects">
    <div className="other-projects__header">See other projects</div>
    <div className="other-projects__content">
      <BrowsingInternet />
      <CobaseProject />
    </div>
  </div>
)

export default OtherProjects
