/*
 *
 * About page
 *
 */

import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Helmet from 'preact-helmet'

import Navbar from '@/js/components/orgainisms/Navbar'
import Footer from '@/js/components/orgainisms/Footer'

import './style.css'

@connect(({ app: { locale } }) => ({
  locale,
}))
export default class About extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="about-page__container">
          <Helmet title="Martin Kikkas | About" />

          <Navbar light />

          <Footer light />
        </div>
      </div>
    )
  }
}
