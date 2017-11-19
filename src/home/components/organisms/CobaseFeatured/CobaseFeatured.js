/*
 *
 * CobaseFeatured
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import { Link } from 'preact-router/match'

import videoUrl from 'assets/video/cobase-cover-small-test.mp4'
import imgUrl from 'assets/img/cobase-featured-mobile@2x.png'
import Building from '@/home/components/molecules/Building'

import './style.css'

export default class CobaseFeatured extends Component {
  state = {
    windowWidth: window.innerWidth,
  }

  componentWillMount() {
    window.addEventListener('resize', this._saveWindowWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._saveWindowWidth)
  }

  _saveWindowWidth = () => {
    this.setState({ windowWidth: window.innerWidth })
  }

  render() {
    return (
      <div className="cobase-featured">
        {this.state.windowWidth < 768 ? (
          <div className="cobase-featured__header">Featured project:</div>
        ) : (
          ''
        )}
        <div className="cobase-featured__graphics">
          {this.state.windowWidth > 767 ? (
            <div className="cobase-featured__graphics__building">
              <Building />
                  <video
                    src={videoUrl}
                    className="cobase-featured__graphics__building__video"
                    autoPlay
                    loop
                    muted
                  />
            </div>
          ) : (
            <img src={imgUrl} className="cobase-featured__graphics__video" />
          )}
        </div>
        {this.state.windowWidth < 768 ? (
          <div className="cobase-featured__building">
            <Building />
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}
