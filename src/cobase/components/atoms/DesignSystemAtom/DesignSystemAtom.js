/*
 *
 * DesignSystemAtom
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import './style.css'

export default class DesignSystemAtom extends Component {
  render() {
    return (
      <div className="microelements">
        <div className="microelements__elem">
          <img
            className="microelements__elem__image"
            src={this.props.imageUrl}
          />
        </div>
        <div className="microelements__name">{this.props.name}</div>
      </div>
    )
  }
}
