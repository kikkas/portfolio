/*
 *
 * OtherProjects
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import BrowsingInternet from '@/cobase/components/molecules/BrowsingInternet'
import SayHello from '@/cobase/components/molecules/SayHello'

import './style.css'

export default class OtherProjects extends Component {
  render() {
    return (
      <div className="other-projects">
        <div className="other-projects__header">See other projects</div>
        <div className="other-projects__content">
          <BrowsingInternet />
          <SayHello />
        </div>
      </div>
    )
  }
}
