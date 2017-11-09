/*
 *
 * DesignSystem
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import DesignAtoms from '@/cobase/components/molecules/DesignAtoms'

import './style.css'

export default class DesignSystem extends Component {
  render() {
    return (
      <div className="design-system">
        <div className="design-system__info">
          <div className="design-system__info__header">
            Building a design system for buildings
          </div>
          <div className="design-system__info__content">
            Cobase project is following the basic principles of atomic design
            that also goes along with modern front end frameworks philosophy.
            Original credit for this goes to Brad Frost!
          </div>
        </div>
        <DesignAtoms />
      </div>
    )
  }
}
