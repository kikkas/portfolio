/*
 *
 * Content
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import { connect } from 'preact-redux'

import imagesLoaded from 'imagesloaded'

import Caption from '@/home/components/organisms/Caption'
import CobaseFeatured from '@/home/components/organisms/CobaseFeatured'
import LatestWork from '@/home/components/organisms/LatestWork'
import Thoughts from '@/home/components/organisms/Thoughts'

import './style.css'

export default class Content extends Component {
  render() {
    return (
      <div className="home-page-content">
        <Caption />
        <CobaseFeatured />
        <LatestWork />
        <Thoughts />
      </div>
    )
  }
}
