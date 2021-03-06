/*
 *
 * DesignAtoms
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import DesignSystemAtom from '@/cobase/components/atoms/DesignSystemAtom'
import imgUrlAtoms from 'assets/img/atoms@2x.png'
import imgUrlMolecules from 'assets/img/molecules@2x.png'
import imgUrlOrganisms from 'assets/img/organisms@2x.png'
import imgUrlComponents from 'assets/img/components@2x.png'

import './style.css'

export default class DesignAtoms extends Component {
  render() {
    return (
      <div className="design-atoms">
        <DesignSystemAtom name="atoms" imageUrl={imgUrlAtoms} />
        <DesignSystemAtom name="molecules" imageUrl={imgUrlMolecules} />
        <DesignSystemAtom name="organisms" imageUrl={imgUrlOrganisms} />
        <DesignSystemAtom name="components" imageUrl={imgUrlComponents} />
      </div>
    )
  }
}
