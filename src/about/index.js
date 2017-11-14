/*
 *
 * About page
 *
 */

import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Helmet from 'preact-helmet'

import Navbar from '@/shared/components/Navbar'
import AboutMartin from '@/about/components/organisms/AboutMartin'

import './style.css'

@connect(({ app: { locale } }) => ({
  locale,
}))
export default class About extends Component {
  render() {
    return (
      <div className="about-page">
        <Helmet title="Martin Kikkas | About" />

        <Navbar title="Back to homepage" link="/" />
        <AboutMartin />
      </div>
    )
  }
}
