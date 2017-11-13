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
import Navbar from '@/shared/components/Navbar'
import Footer from '@/shared/components/Footer'
import Caption from '@/home/components/organisms/Caption'
import CobaseFeatured from '@/home/components/organisms/CobaseFeatured'
import LatestWork from '@/home/components/organisms/LatestWork'
import Thoughts from '@/home/components/organisms/Thoughts'

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
        <Content>
          <Caption />
          <CobaseFeatured />
          <LatestWork />
          <Thoughts />
        </Content>
        <Footer />
      </div>
    )
  }
}
