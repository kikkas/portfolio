/*
 *
 * TopPanel
 *
 */

import React from 'react'
import { Link } from 'react-router-dom'

import imageUrl from 'assets/img/project-featured@2x.png'

import './style.css'


export default class TopPanel extends React.Component {
  render() {
    return (
      <div className="top-panel">
        <div className="top-panel__column">
          <div className="top-panel__name">Martin Kikkas</div>
          <div className="top-panel__bio">Product designer</div>
          <div className="top-panel__bio-description">With focus on data driven design and innovation</div>
          <Link to="/about" className="top-panel__about-link">
            Read my story
          </Link>
        </div>
        <div className="top-panel__column">
          <img className="top-panel__img" src={imageUrl} />
        </div>
      </div>
    )
  }
}
