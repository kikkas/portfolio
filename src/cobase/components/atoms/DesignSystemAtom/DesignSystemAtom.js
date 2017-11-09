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
            className={`${this.props.name === 'atoms'
              ? 'microelements__elem__atom'
              : this.props.name === 'molecules'
                ? 'microelements__elem__molecule'
                : this.props.name === 'organisms'
                  ? 'microelements__elem__organism'
                  : this.props.name === 'components'
                    ? 'microelements__elem__component'
                    : ''}`}
            src={this.props.imageUrl}
          />
        </div>
        <div className="microelements__name">{this.props.name}</div>
      </div>
    )
  }
}
