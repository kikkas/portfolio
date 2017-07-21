/*
 *
 * App
 *
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { init } from 'actions/appActions'
import { init as initProjects } from 'actions/projectsActions'

import { appLocales, defaultLocale } from 'i18n.js'

import projectImage1 from 'assets/img/project-2@2x.png'
import projectImage2 from 'assets/img/project-3@2x.png'

import './style.css'


@connect(({
  app: { locale }
}) => ({
  locale
}))
export default class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    children: PropTypes.array,
    locale: PropTypes.string,
  }

  componentWillMount() {
    let locale = defaultLocale

    if (navigator.language) {
      const language = navigator.language.split('-')[0]
      locale = appLocales.indexOf(language) !== -1 ? language : defaultLocale
    }

    let initialState = {
      locale,
    }

    this.props.dispatch(init(initialState))

    const projects = {
      '0': {
        id: '0',
        image: projectImage1,
        name: 'first project',
        slug: 'project_1',
      },
      '1': {
        id: '1',
        image: projectImage2,
        name: 'second project',
        slug: 'project_2',
      }
    }

    this.props.dispatch(initProjects(projects))
  }

  render() {
    const { children } = this.props

    return (
      <main className="main-container">
        {children}
      </main>
    )
  }
}
