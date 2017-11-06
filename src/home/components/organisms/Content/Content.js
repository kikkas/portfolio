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

import './style.css'

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <Caption />
      </div>
    )
  }
}
