/*
 *
 * Caption
 *
 */

import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import './style.css'

const Caption = () => (
  <div className="about-me wow fadeIn">
    <div className="about-me__header">I am a product designer</div>
    <div className="about-me__info">
    I enjoy solving complex problems using design thinking, disruptive technologies and learnings from data.
    </div>
    <Link href="/about" className="about-me__my-story">
      Read my story here
    </Link>
  </div>
)

export default Caption
