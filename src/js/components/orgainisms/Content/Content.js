/*
 *
 * Content
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import './style.css'


export default class Content extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array,
    ]),
  }

  render() {
    return (
      <div className="content">
        {this.props.children}
      </div>
    )
  }
}
