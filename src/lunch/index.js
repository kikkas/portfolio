/*
 *
 * Lunch page
 *
 */

import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Helmet from 'preact-helmet'
import PropTypes from 'prop-types'

import Content from '@/lunch/components/organisms/Content'
import Navbar from '@/shared/components/Navbar'
import TopBlock from '@/lunch/components/organisms/TopBlock'
import Cover from '@/lunch/components/organisms/Cover'
import Reshaping from '@/lunch/components/organisms/Reshaping'
import CreatingOnMobile from '@/lunch/components/organisms/Mobile'
import Experience from '@/lunch/components/organisms/Experience'
import DesignSystem from '@/lunch/components/organisms/DesignSystem'
import ToolsUsed from '@/lunch/components/organisms/ToolsUsed'
import OtherProjects from '@/lunch/components/organisms/OtherProjects'
import Footer from '@/shared/components/Footer'

import './style.css'

@connect(({ projects }) => ({
  projects,
}))
export default class Lunch extends Component {
  static propTypes = {
    projects: PropTypes.object,
  }

  render() {
    return (
      <div className="lunch-page">
        <Helmet title="Martin Kikkas | Lunchbot" />
        <Navbar title="Back to homepage" link="/" />
        <Content>
          <TopBlock />
          <Cover />
          <Reshaping />
          <ToolsUsed />
          <OtherProjects />
        </Content>
        <Footer />
      </div>
    )
  }
}
