
/*
 *
 * BeingTransparent
 *
 */

import { h, Component } from 'preact'

import videoUrl from 'assets/video/wifog-transparent-2.mp4'
import imgUrl from 'assets/img/wifog-community-image-@2x.png'


import './style.css'

export default class Transparent extends Component {
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
            <div className="transparent wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
              <div className="transparent__info">
                <div className="transparent__info__title">Community</div>
                <div className="transparent__info__description">
                To find good deals users can follow lists that are curated by other
                users. It can vary from the best lunch locations in town to a list
                of hundred shoe stores to buy the next pair of sneakers.
                </div>
              </div>
              <div className="transparent__wrapper">
                <video
                  src={videoUrl}
                  className="transparent__wrapper__video"
                  autoPlay
                  loop
                />
              </div>
            </div>
        ) : (
            <div className="transparent wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
              <div className="transparent__info">
                <div className="transparent__info__title">Community</div>
                <div className="transparent__info__description">
                To find good deals users can follow lists that are curated by other
                users. It can vary from the best lunch locations in town to a list
                of hundred shoe stores to buy the next pair of sneakers.
                </div>
              </div>
              <div className="transparent__wrapper">
                <img className="transparent__wrapper__video" src={imgUrl} />
              </div>
            </div>
        )}
      </div>
    )
  }
}
