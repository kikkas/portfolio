/*
 *
 * DesignAtoms
 *
 */

import { h, Component } from 'preact'

import DesignSystemAtom from '@/cobase/components/atoms/DesignSystemAtom'
import imgUrlAtoms from 'assets/img/atoms@2x.png'
import imgUrlMolecules from 'assets/img/molecules@2x.png'
import imgUrlOrganisms from 'assets/img/organisms@2x.png'
import imgUrlComponents from 'assets/img/components@2x.png'

import './style.css'

const DesignAtoms = () => (
  <div className="design-atoms">
    <DesignSystemAtom name="atoms" imageUrl={imgUrlAtoms} />
    <DesignSystemAtom name="molecules" imageUrl={imgUrlMolecules} />
    <DesignSystemAtom name="organisms" imageUrl={imgUrlOrganisms} />
    <DesignSystemAtom name="components" imageUrl={imgUrlComponents} />
  </div>
)

export default DesignAtoms
