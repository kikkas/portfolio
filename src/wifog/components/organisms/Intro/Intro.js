/*
 *
 * Reshaping
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'


import ProcessAtom from '@/wifog/components/atoms/ProcessAtom'
import imgUrlDiscovery from 'assets/img/discovery.svg'
import imgUrlDecision from 'assets/img/decision.svg'
import imgUrlAction from 'assets/img/action.svg'
import imgUrlReward from 'assets/img/reward.svg'

import imgUrlSketch from 'assets/img/wifog-sketch-2.png'


import './style.css'

export default class Intro extends Component {
  render() {
    return (
      <div className="wifog-intro">
        <div className="wifog-intro__header">
        Background
        </div>
        <div className="wifog-intro__description">
        The Internet is full of ways how to earn money just by doing small
        micro tasks like filling in surveys or testing mobile apps. Wifog
        is a platform that gathers together all similar services and helps
        users to become smarter internet consumers.
        </div>
        <div className="wifog-intro__header">
        The challenge
        </div>
        <div className="wifog-intro__description">
        Micro tasks change constantly and products must be able to adapt to
        those changes. This makes it challenging to come up with an interface
        design that could accommodate all potential ways of browsing and completing
        micro tasks.
        </div>
        <div className="wifog-intro__header">
          Process
        </div>
        <div className="wifog-intro__description">
        To find a good interface solution we looked at every interaction with a
        micro task as a separate stage. This made it easier to specify the elements
        in interface that would help to convert the user into the next stage.
        </div>
        <div className="wrapper-process">
            <div className="design-process">
              <ProcessAtom name="Discovery" imageUrl={imgUrlDiscovery} />
              <ProcessAtom name="Decision" imageUrl={imgUrlDecision} />
              <ProcessAtom name="Action" imageUrl={imgUrlAction} />
              <ProcessAtom name="Reward" imageUrl={imgUrlReward} />
            </div>
        </div>
        <div className="wifog-intro__sketch">
        <img src={imgUrlSketch} className="wifog-intro__img" />
        </div>
      </div>
    )
  }
}
