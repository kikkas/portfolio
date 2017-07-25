/*
 *
 * AnimatedImage
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import './style.css'


export default class AnimatedImage extends React.Component {
  static propTypes = {
    src: PropTypes.string,
  }

  render() {
    const { src } = this.props

    return (
      <div className="animated-image">
        <div className="animated-image__wrapper">
          <img className="animated-image__image" src={src} />
        </div>
      </div>
    )
  }
}
