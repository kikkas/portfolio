/*
 *
 * Cobase page
 *
 */

import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Helmet from 'preact-helmet'
import PropTypes from 'prop-types'

import Content from '@/cobase/components/organisms/Content'
import Navbar from '@/cobase/components/organisms/Navbar'

import './style.css'

@connect(({ projects }) => ({
  projects,
}))
export default class Cobase extends Component {
  static propTypes = {
    projects: PropTypes.object,
  }

  render() {
    return (
      <div className="cobase-page">
        <Helmet title="Martin Kikkas | Cobase" />
        <Navbar title="Back to homepage" link="/about" />
        <Content />
      </div>
    )
  }
}
