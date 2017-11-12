/*
 *
 * Caption
 *
 */

import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import './style.css'

const Caption = () => (
  <div className="about-me">
    <div className="about-me__header">I design product experiences</div>
    <div className="about-me__info">
      I solve problems using design thinking, distruptive technolgies and
      learnings from data and users.
    </div>
    <Link href="#" className="about-me__my-story">
      Read my story here
    </Link>
  </div>
)

export default Caption
