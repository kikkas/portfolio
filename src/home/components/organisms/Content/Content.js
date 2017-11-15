/*
 *
 * Content
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import { connect } from 'preact-redux'

import Preloader from '@/home/components/organisms/Preloader'
import Footer from '@/shared/components/Footer'
import Caption from '@/home/components/organisms/Caption'
import CobaseFeatured from '@/home/components/organisms/CobaseFeatured'
import LatestWork from '@/home/components/organisms/LatestWork'
import Thoughts from '@/home/components/organisms/Thoughts'

import imagesLoaded from 'imagesloaded'

import './style.css'

@connect(({ app: { locale }, projects }) => ({
  locale,
  projects,
}))
export default class Content extends Component {
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
        })
      }
    })
  }

  render() {
    const { preloaderIsVisible } = this.state
    return (
      <div
        ref={ref => (this._content = ref)}
        className={`home-page-content ${preloaderIsVisible
          ? 'home-page-content--preloader-is-visible'
          : ''}`}
      >
        {preloaderIsVisible ? (
          <Preloader ref={ref => (this._preloader = ref)} />
        ) : null}

        <Caption />
        <CobaseFeatured />
        <LatestWork />
        <Thoughts />
        <Footer />
      </div>
    )
  }
}
