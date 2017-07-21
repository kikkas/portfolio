/*
 *
 * Content
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import './style.css'
import me from 'assets/img/me.png'
import me2 from 'assets/img/me@2x.png'


export default class Content extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array,
    ]),
  }

  render() {
    return (
    <div className="content">{this.props.children}
        <div className="content__title">About me</div>
        <div className="content__description">I am Martin Kikkas - born and raised in most tech savy country on earth. Since youg age I have been into tech, cars and taking-things-apart-and-reconstructing them. Since past 4 years I have been living in Stockholm where I graduated school that is known as  “digital harward”  Hyper Island. I am looking for new challenge as product designer in autonamous cars industry. Currently rolling in Udacity Data analyst program.</div>
        <div className="content__img"><img src={me} alt={"Martin Kikkas"}/> </div>
      </div>
    )
  }
}
