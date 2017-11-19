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
      Design system
      </div>
      <div className="design-system__info__content">
      Constant iterations and design changes are quite common on
      projects like this, therefore there was a need for scalable
      design system. Atomic design principles seemed to be the best
      fit for the task with few modifications. Credit for the original
      solution goes to Brad Frost.
      </div>
    </div>
    <DesignAtoms />
  </div>
)

export default DesignSystem
