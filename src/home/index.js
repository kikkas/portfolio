/*
 *
 * Home page
 *
 */

import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Helmet from 'preact-helmet'
import PropTypes from 'prop-types'

import Content from '@/home/components/organisms/Content'
import Navbar from '@/home/components/organisms/Navbar'
import Footer from '@/home/components/organisms/Footer'

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
        <Navbar title="About" link="/about" />
        <Content />
        <Footer />
      </div>
    )
  }
}
