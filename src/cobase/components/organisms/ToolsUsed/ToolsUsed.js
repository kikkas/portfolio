/*
 *
 * ToolsUsed
 *
 */

import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import './style.css'

const ToolsUsed = () => (
  <div className="tools-used wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="tools-used__name">Tools used:</div>
    <div className="tools-used__list">
      <div href="#" className="tools-used__list__elem">
        Sketch
      </div>
      <div href="#" className="tools-used__list__elem">
        Principle
      </div>
      <div href="#" className="tools-used__list__elem">
        Marvel
      </div>
      <div href="#" className="tools-used__list__elem">
        Zeplin
      </div>
    </div>
  </div>
)

export default ToolsUsed
