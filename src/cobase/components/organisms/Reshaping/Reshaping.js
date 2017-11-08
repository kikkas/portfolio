/*
 *
 * Reshaping
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import imageUrl from 'assets/img/cobase-project-image-1@2x.png'
import Construction from '@/cobase/components/molecules/Construction'
import Mistakes from '@/cobase/components/molecules/Mistakes'

import './style.css'

export default class Reshaping extends Component {
  render() {
    return (
      <div className="cobase-reshaping">
        <div className="cobase-reshaping__header">
          Reshaping hardest heavyiest industries of them all
        </div>
        <div className="cobase-reshaping__content">
          <Construction />
          <Mistakes />
        </div>
      </div>
    )
  }
}
