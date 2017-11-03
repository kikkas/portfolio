/*
 *
 * Home page
 *
 */

import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Helmet from 'preact-helmet'
import PropTypes from 'prop-types'

import Navbar from '@/js/components/orgainisms/Navbar'
import Content from '@/js/components/orgainisms/Content'

import './style.css'

@connect(({ projects }) => ({
  projects,
}))
export default class Home extends Component {
  static propTypes = {
    projects: PropTypes.object,
  }

  render() {
    return (
      <div className="home-page">
        <Helmet title="Martin Kikkas" />

        <Navbar />

        <Content preloader />
      </div>
    )
  }
}
