/*
 *
 * Home page
 *
 */

import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Helmet from 'preact-helmet'
import PropTypes from 'prop-types'

import Navbar from '@/shared/components/Navbar'
import Content from '@/home/components/organisms/Content'

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

        <Content preloader />
      </div>
    )
  }
}
