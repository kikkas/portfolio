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
          Intro
        </div>
        <div className="wifog-intro__description">
        There is many ways nowadays how you can earn money online.
        On the other hand there is no good education about how to
        use internet smart way. Wifog is about to connect those two
        on a smart way.  Aim for the Wifog was to build a service
        that servs users online.
        </div>
        <div className="wifog-intro__header">
          The challange
        </div>
        <div className="wifog-intro__description">
        At the start of the project we know some ways how people will
        collect credits but product had to be scaleable enought to
        faciliate all kind a activities in the future. It made extreamly
        challenging to design interface for an undefined content.
        </div>
        <div className="wifog-intro__header">
          Process
        </div>
        <div className="wifog-intro__description">
        We broke down credit collection in to pieaces and defined a differnt
        stages that would be repeated in every content type.
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
