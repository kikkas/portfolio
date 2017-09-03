/*
 *
 * Content
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Preloader from 'components/orgainisms/Preloader'
import Footer from 'components/orgainisms/Footer'
import Projects from 'components/orgainisms/Projects'
import ServiceList from 'components/orgainisms/ServiceList'
import Articles from 'components/orgainisms/Articles'
import TopBlock from 'components/orgainisms/TopBlock'
import TopPanel from 'components/orgainisms/TopPanel'

import imagesLoaded from 'imagesloaded'

import './style.css'

@connect(({ app: { locale }, projects }) => ({
  locale,
  projects,
}))
export default class Content extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    projects: PropTypes.object,
    preloader: PropTypes.bool,
  }

  constructor(props) {
    super(props)

    this.state = {
      preloaderIsVisible: props.preloader,
    }
  }

  componentDidMount() {
    imagesLoaded(this._content, () => {
      console.log('all images loaded')

      if (this._preloader) {
        this._preloader.setAnimationEndCallback(() => {
          this.setState({ preloaderIsVisible: false })
          setTimeout(() => {
            this._topBlock.startAnimation()
          }, 0)
        })
      }
    })
  }

  render() {
    const { preloaderIsVisible } = this.state

    return (
      <div
        ref={ref => (this._content = ref)}
        className={`content ${preloaderIsVisible
          ? 'content--preloader-is-visible'
          : ''}`}
      >
        {preloaderIsVisible ? (
          <Preloader ref={ref => (this._preloader = ref)} />
        ) : null}

        <TopBlock ref={ref => (this._topBlock = ref)} />
        <TopPanel />
        <Projects projects={this.props.projects} />
        <ServiceList />
        <Articles />
        <Footer />
      </div>
    )
  }
}
