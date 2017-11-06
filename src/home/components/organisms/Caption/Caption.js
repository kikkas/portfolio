/*
 *
 * Caption
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import './style.css'

export default class Caption extends Component {
  render() {
    return (
      <div className="about-me">
        <div className="about-me__header">I design product experiences</div>
        <div className="about-me__info">
          I solve problems using design thinking, distruptive technolgies and
          learnings from data and users.
        </div>
        <div className="about-me__my-story">Read my story here</div>
      </div>
    )
  }
}
