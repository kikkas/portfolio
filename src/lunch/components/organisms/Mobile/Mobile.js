/*
 *
 * Mobile
 *
 */

import { h, Component } from 'preact'

import MobileGraphik from '@/cobase/components/molecules/MobileGraphik'

import './style.css'

const CreatingOnMobile = () => (
  <div className="mobile">
    <div className="mobile__header">Creating issues fast on mobile</div>
    <div className="mobile__content">
      It is easy to cluster UI with a lot of unneccessary things when it comes
      to documenting issues. Due the reason Cobase is often used on construction
      site that is surrounded by noise dust and danger you want documenting
      issues to be lighting fast. On the other hand sometimes there is need for
      very detailed information. We solved this by two steps issue creation.
      First step creates issue and assigns this to certain user (that covers
      about the 80% of the issues needs) and second step helps to provide more
      information. This way everything gets always added to system as the
      barrier is super low.
    </div>
    <MobileGraphik />
  </div>
)

export default CreatingOnMobile
