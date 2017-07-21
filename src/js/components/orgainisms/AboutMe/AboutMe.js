/*
 *
 * Projects
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import map from 'lodash/map'
import me from 'assets/img/me.png'
import me2 from 'assets/img/me@2x.png'


import './style.css'


export default class AboutMe extends React.Component {
  static propTypes = {
    projects: PropTypes.object,
  }

  render() {
    return (
      <div className="about">
        <div className="about__title">About me</div>
        <div className="about__description">I am Martin Kikkas - born and raised in most tech savy country on earth. Since youg age I have been into tech, cars and taking-things-apart-and-reconstructing them. Since past 4 years I have been living in Stockholm where I graduated school that is known as  “digital harward”  Hyper Island. I am looking for new challenge as product designer in autonamous cars industry. Currently rolling in Udacity Data analyst program.</div>
        <div className="about__img"><img src={me} alt={"Martin Kikkas"}/> </div>
      </div>
    )
  }
}
