/*
 *
 * Projects
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import map from 'lodash/map'

import './style.css'


export default class Projects extends React.Component {
  static propTypes = {
    projects: PropTypes.object,
  }

  render() {
    return (
      <div className="projects">
        <div className="projects__title">Projects</div>
        <div className="projects__list">
          {
            map(this.props.projects, project =>
              <Link
                className="projects__item"
                key={project.id}
                to={`/${project.slug}`}
              >
                <img src={project.image} />
              </Link>
            )
          }
        </div>
      </div>
    )
  }
}
