/*
 *
 * Mobile
 *
 */

import { h, Component } from 'preact'

import MobileGraphik from '@/cobase/components/molecules/MobileGraphik'

import './style.css'

const CreatingOnMobile = () => (
  <div className="mobile wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="mobile__header">Quick issue reporting on mobile</div>
    <div className="mobile__content">
    Construction workers spend the majority of their time in quite hectic
    environment and poor conditions on construction sites. This means that
    reporting issues must be fast, simple and reliable. We split the process
    into two parts: the first step that covers the basic information and assigns
    the task to a certain user, and on the second step user adds more specific details.
    </div>
    <MobileGraphik />
  </div>
)

export default CreatingOnMobile
