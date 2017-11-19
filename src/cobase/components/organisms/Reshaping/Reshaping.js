/*
 *
 * Reshaping
 *
 */

import { h, Component } from 'preact'

import imageUrl from 'assets/img/cobase-project-image-1@2x.png'
import Construction from '@/cobase/components/molecules/Construction'
import Mistakes from '@/cobase/components/molecules/Mistakes'

import './style.css'

const Reshaping = () => (
  <div className="cobase-reshaping wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="cobase-reshaping__header">
        Industry and the background
    </div>
    <div className="cobase-reshaping__content">
      <Construction />
      <Mistakes />
    </div>
  </div>
)

export default Reshaping
