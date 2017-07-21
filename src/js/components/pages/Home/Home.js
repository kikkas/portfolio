/*
 *
 * Home page
 *
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from "react-helmet"
import PropTypes from 'prop-types'

import Navbar from 'components/orgainisms/Navbar'
import Footer from 'components/orgainisms/Footer'
import Content from 'components/orgainisms/Content'
import TopPanel from 'components/orgainisms/TopPanel'
import Projects from 'components/orgainisms/Projects'
import ServiceList from 'components/orgainisms/ServiceList'
import Articles from 'components/orgainisms/Articles'

import './style.css'


@connect(
  ({
    app: { locale },
    projects,
  }) => ({
    locale,
    projects,
  })
)
export default class Home extends Component {
  static propTypes = {
    projects: PropTypes.object,
  }

  render() {
    return (
      <div className="home-page">
        <Helmet title={'Martin Kikkas'} />

        <Navbar />

        <Content>
          <TopPanel />
          <Projects projects={this.props.projects} />
          <ServiceList />
          <Articles />
        </Content>

        <Footer />
      </div>
    )
  }
}
