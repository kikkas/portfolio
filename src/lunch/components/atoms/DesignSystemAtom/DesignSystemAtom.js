/*
 *
 * DesignSystemAtom
 *
 */

import { h, Component } from 'preact'

import './style.css'

export default class DesignSystemAtom extends Component {
  render() {
    const { name, imageUrl } = this.props
    return (
      <div className="microelements">
        <div className="microelements__elem">
          <img
            className={`${name === 'atoms'
              ? 'microelements__elem__atom'
              : name === 'molecules'
                ? 'microelements__elem__molecule'
                : name === 'organisms'
                  ? 'microelements__elem__organism'
                  : name === 'components'
                    ? 'microelements__elem__component'
                    : ''}`}
            src={imageUrl}
          />
        </div>
        <div className="microelements__name">{name}</div>
      </div>
    )
  }
}
