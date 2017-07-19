/*
 *
 * Home page
 *
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from "react-helmet"

import Navbar from 'components/orgainisms/Navbar'
import Footer from 'components/orgainisms/Footer'
import Content from 'components/orgainisms/Content'

import './style.css'


@connect(
  ({
    app: { locale },
  }) => ({
    locale,
  })
)
export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Helmet title={'Martin Kikkas'} />

        <Navbar />

        <Content>
          <div>
            Content
          </div>
          <div>
            More content
          </div>
        </Content>

      </div>
    )
  }
}
