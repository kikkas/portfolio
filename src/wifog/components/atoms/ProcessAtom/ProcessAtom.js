/*
 *
 * ProcessAtom
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import './style.css'

export default class ProcessAtom extends Component {
  render() {
    const { name, imageUrl } = this.props
    return (
      <div className="processelements">
        <div className="processelements__elem">
          <img
            className={`${name === 'atoms'
              ? 'processelements__elem__atom'
              : name === 'molecules'
                ? 'processelements__elem__molecule'
                : name === 'organisms'
                  ? 'processelements__elem__organism'
                  : name === 'components'
                    ? 'processelements__elem__component'
                    : ''}`}
            src={imageUrl}
          />
        </div>
        <div className="processelements__name">{name}</div>
      </div>
    )
  }
}
