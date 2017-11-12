/*
 *
 * Wifog page
 *
 */

import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Helmet from 'preact-helmet'
import PropTypes from 'prop-types'

import Content from '@/wifog/components/organisms/Content'
import Navbar from '@/wifog/components/organisms/Navbar'

import './style.css'

@connect(({ projects }) => ({
  projects,
}))
export default class Wifog extends Component {
  static propTypes = {
    projects: PropTypes.object,
  }

  render() {
    return (
      <div className="wifog-page">
        <Helmet title="Martin Kikkas | Wifog" />
        <Navbar title="Back to homepage" link="/" />
        <Content />
      </div>
    )
  }
}
