/*
 *
 * MobileGraphik
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import imageLgUrl from 'assets/img/cobase-project-image-2@2x.png'
import imageMobileUrl_1 from 'assets/img/cobase-project-image-2-mobile@2x.png'
import imageMobileUrl_2 from 'assets/img/cobase-project-image-3-mobile@2x.png'

import './style.css'

export default class MobileGraphik extends Component {
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
      <div>
        {this.state.windowWidth > 767 ? (
          <div className="mobile-graphik-lg">
            <img className="mobile-graphik-lg__image" src={imageLgUrl} />
          </div>
        ) : (
          <div className="mobile-graphik-sm">
            <img className="mobile-graphik-sm__images" src={imageMobileUrl_1} />
            <img className="mobile-graphik-sm__images" src={imageMobileUrl_2} />
          </div>
        )}
      </div>
    )
  }
}
