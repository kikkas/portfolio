/*
 *
 * About page
 *
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from "react-helmet"

import Navbar from 'components/orgainisms/Navbar'
import Footer from 'components/orgainisms/Footer'
import AboutMe from 'components/orgainisms/AboutMe'

import './style.css'


@connect(
  ({
    app: { locale },
  }) => ({
    locale,
  })
)
export default class About extends Component {
  render() {
    return (
      <div className="about-page">

        <div className="about-page__container">
          <Helmet title="Martin Kikkas | About" />

          <Navbar light />

          <AboutMe />

          <Footer light />
        </div>

      </div>
    )
  }
}
