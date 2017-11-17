/*
 *
 * OtherProjects
 *
 */

import { h, Component } from 'preact'

import BrowsingInternet from '@/cobase/components/molecules/BrowsingInternet'
import SayHello from '@/cobase/components/molecules/SayHello'

import './style.css'

const OtherProjects = () => (
  <div className="other-projects wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="other-projects__header">See other projects</div>
    <div className="other-projects__content">
      <BrowsingInternet />
      <SayHello />
    </div>
  </div>
)

export default OtherProjects
