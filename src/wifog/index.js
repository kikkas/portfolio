/*
 *
 * Wifog page
 *
 */

import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Helmet from 'preact-helmet'
import PropTypes from 'prop-types'

import 'animate.css/animate.min.css'
import WOW from 'wowjs';

import Content from '@/wifog/components/organisms/Content'
import Navbar from '@/shared/components/Navbar'
import TopBlock from '@/wifog/components/organisms/TopBlock'
import Cover from '@/wifog/components/organisms/Cover'
import Intro from '@/wifog/components/organisms/Intro'
import ToolsUsed from '@/wifog/components/organisms/ToolsUsed'
import OtherProjects from '@/wifog/components/organisms/OtherProjects'
import Solution from '@/wifog/components/organisms/Solution'
import Credits from '@/wifog/components/organisms/Credits'
import CreatingDeals from '@/wifog/components/organisms/CreatingDeals'
import BeingTransparent from '@/wifog/components/organisms/BeingTransparent'
import Footer from '@/shared/components/Footer'

import './style.css'

@connect(({ projects }) => ({
  projects,
}))
export default class Wifog extends Component {
  static propTypes = {
    projects: PropTypes.object,
  }

  componentDidMount() {
      new WOW.WOW({
          live: false
      }).init();
  }

  render() {
    return (
      <div className="wifog-page">
        <Helmet title="Martin Kikkas | Wifog" />
        <Navbar title="Back to homepage" link="/" />
        <Content>
          <TopBlock />
          <Cover />
          <Intro />
          <Solution />
          <Credits />
          <CreatingDeals />
          <BeingTransparent />
          <ToolsUsed />
          <OtherProjects />
        </Content>
        <Footer />
      </div>
    )
  }
}
