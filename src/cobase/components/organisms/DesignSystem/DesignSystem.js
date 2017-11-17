/*
 *
 * DesignSystem
 *
 */

import { h, Component } from 'preact'

import DesignAtoms from '@/cobase/components/molecules/DesignAtoms'

import './style.css'

const DesignSystem = () => (
  <div className="design-system wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="design-system__info">
      <div className="design-system__info__header">
        Building a design system for buildings
      </div>
      <div className="design-system__info__content">
        Cobase project is following the basic principles of atomic design that
        also goes along with modern front end frameworks philosophy. Original
        credit for this goes to Brad Frost!
      </div>
    </div>
    <DesignAtoms />
  </div>
)

export default DesignSystem
