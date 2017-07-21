/*
 *
 * About page
 *
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Helmet from "react-helmet"

import { FormattedMessage } from 'react-intl'
import messages from './messages'

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
  static contextTypes = {
    intl: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="about-page">
        <Helmet title={`Martin Kikkas | ${this.context.intl.formatMessage(messages.header)}`} />
        <Navbar />
        <AboutMe />
      </div>
    )
  }
}
