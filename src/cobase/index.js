/*
 *
 * Cobase page
 *
 */

import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Helmet from 'preact-helmet'
import PropTypes from 'prop-types'

import Content from '@/cobase/components/organisms/Content'
import Navbar from '@/shared/components/Navbar'
import TopBlock from '@/cobase/components/organisms/TopBlock'
import Cover from '@/cobase/components/organisms/Cover'
import Reshaping from '@/cobase/components/organisms/Reshaping'
import CreatingOnMobile from '@/cobase/components/organisms/Mobile'
import Experience from '@/cobase/components/organisms/Experience'
import DesignSystem from '@/cobase/components/organisms/DesignSystem'
import ToolsUsed from '@/cobase/components/organisms/ToolsUsed'
import OtherProjects from '@/cobase/components/organisms/OtherProjects'
import Footer from '@/shared/components/Footer'

import './style.css'

@connect(({ projects }) => ({
  projects,
}))
export default class Cobase extends Component {
  static propTypes = {
    projects: PropTypes.object,
  }

  render() {
    return (
      <div className="cobase-page">
        <Helmet title="Martin Kikkas | Cobase" />
        <Navbar title="Back to homepage" link="/" />
        <Content>
          <TopBlock />
          <Cover />
          <Reshaping />
          <CreatingOnMobile />
          <Experience />
          <DesignSystem />
          <ToolsUsed />
          <OtherProjects />
        </Content>
        <Footer />
      </div>
    )
  }
}
