/*
 *
 * Content
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import { connect } from 'preact-redux'

import imagesLoaded from 'imagesloaded'

import TopBlock from '@/wifog/components/organisms/TopBlock'
import Cover from '@/wifog/components/organisms/Cover'
import Intro from '@/wifog/components/organisms/Intro'
import ToolsUsed from '@/wifog/components/organisms/ToolsUsed'
import OtherProjects from '@/wifog/components/organisms/OtherProjects'
import Solution from '@/wifog/components/organisms/Solution'
import Credits from '@/wifog/components/organisms/Credits'
import CreatingDeals from '@/wifog/components/organisms/CreatingDeals'
import BeingTransparent from '@/wifog/components/organisms/BeingTransparent'



import './style.css'

export default class Content extends Component {
  render() {
    return (
      <div className="wifog-page-content">
        <TopBlock />
        <Cover />
        <Intro />
        <Solution />
        <Credits />
        <CreatingDeals />
        <BeingTransparent />
        <ToolsUsed />
        <OtherProjects />
      </div>
    )
  }
}
