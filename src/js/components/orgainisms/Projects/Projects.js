/*
 *
 * Projects
 *
 */

import { h, Component } from 'preact'

import PropTypes from 'prop-types'
import { Link } from 'preact-router/match'
import map from 'lodash/map'

import AnimatedImage from '@/js/components/atoms/AnimatedImage'

import './style.css'

export default class Projects extends Component {
  static propTypes = {
    projects: PropTypes.object,
  }

  render() {
    return (
      <div className="projects">
        <div className="projects__title">Projects</div>
        <div className="projects__list">
          {map(this.props.projects, project => (
            <Link
              className="projects__item"
              key={project.id}
              href={`/${project.slug}`}
            >
              <AnimatedImage src={project.image} />
            </Link>
          ))}
        </div>
      </div>
    )
  }
}
