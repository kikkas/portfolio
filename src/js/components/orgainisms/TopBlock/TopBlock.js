/**
 *
 * TopBlock
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { duration } from 'utils/RxJS/helpers'
// import easeOutQuart from 'eases/quart-out'
import easeOutQuart from 'eases/quart-out'
import easeInQuart from 'eases/quart-in'
import easeInQuint from 'eases/quint-in'
import easeInOutSine from 'eases/sine-in-out'

import videoUrl from 'assets/video/2.mp4'

import './style.css'

export default class TopBlock extends React.Component {
  static propTypes = {
    prop: PropTypes.object,
  }

  state = {
    animationIsFinished: false,
  }

  componentDidMount() {
    // this.animate()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.animationIsFinished !== this.state.animationIsFinished
  }

  _onDurationChange = () => {
    this.videoData = {
      duration: this._video.duration * 1000,
      videoWidth: this._video.videoWidth,
      videoHeight: this._video.videoHeight,
    }
    console.info('data: ', this.videoData)
  }

  startAnimation = () => {
    this._video.play()
  }

  _onVideoPlay = () => {
    console.log('Video playing')
    this._animateVideo(this.videoData.duration)
  }

  _animateVideo = time => {
    if (this.videoAnimation$) {
      this.videoAnimation$.unsubscribe()
    }

    const elem = this._videoBlock
    const circle = this._circle

    const minHeight = window.innerHeight * 0.8
    const minWidth = window.innerWidth * 0.509

    const contentWidth = 1170

    const heightDiff = window.innerHeight - minHeight
    const widthDiff = window.innerWidth - minWidth
    const leftDiff =
      window.innerWidth - minWidth - (window.innerWidth - contentWidth) / 2

    const top = 0
    const left = 0

    const topDiff = window.innerHeight * 0.1

    const distance = value => t => t * value

    this.scaleVideo$ = duration(300)
      // .map(easeOutQuart)
      .map(distance(0.15))
      .subscribe(
        t => {
          elem.style.cssText = `
          transform: matrix(${1.1 + t}, 0, 0, ${1.1 + t}, 0, 0);
        `
        },
        null,
        () => {
          this.videoAnimation$ = duration(time - 300 - 1000)
            .delay(1000)
            .map(easeInOutSine)
            .subscribe(
              t => {
                const scaleXY = t < 0.5 ? 1 + 0.25 * (1 - t * 2) : 1
                elem.style.cssText = `
                  transform: matrix(${scaleXY}, 0, 0, ${scaleXY}, 0, 0);
                  width: ${minWidth + widthDiff * (1 - t)}px;
                  height: ${minHeight + heightDiff * (1 - t)}px;
                  top: ${top + topDiff * t}px;
                  left: ${left + leftDiff * t}px;
                `

                // const circleScaleXY = t > 0.3 ? 0.5 + 1 * (1 - t / 3) : 0.5
                const circleScaleXY = 0.7 + 0.5 * t
                circle.style.cssText = `
                  transform: matrix(${circleScaleXY}, 0, 0, ${circleScaleXY}, 0, 0);
                `
              },
              null,
              () => {
                this.setState({ animationIsFinished: true })
                console.log('Video animation completed')
              }
            )
        }
      )
  }

  animate = () => {
    if (this.animation$) {
      this.animation$.unsubscribe()
    }

    const elem = document.querySelector('.preloader__horizontal-line')

    this.animation$ = duration(1000)
      .map(easeOutQuart)
      .map(t => {
        const translateY = `-${Math.round(t * 100)}%`
        return {
          translateY,
          // scaleY: 1.2 * t,
        }
      })
      .subscribe(
        data => {
          elem.style.cssText = `
            transform:
              translateY(${data.translateY})
            ;
          `
        },
        null,
        () => {
          this.animation$ = null
          elem.style.cssText = `
            transform: translateY(-100%);
          `
          this._video.play()
          // elem.style.cssText = `
          //   top: 0;
          //   left: 0;
          //   right: 0;
          //   bottom: 0;
          // `
          // this.animation$ = duration(1000).map(easeOutQuart).subscribe(t => {
          //   elem.style.cssText = `
          //         transform:
          //           translateY(-${Math.floor(t * 300)}%)
          //         ;
          //       `
          // }, null, () => {
          //   console.log('Ended')
          //   // elem.style.cssText = `
          //   //       transform: translateY(-100%);
          //   //     `
          // })
        }
      )
  }

  render() {
    return (
      <div className="top-block">
        {/*<div className="top-block__horizontal-line" />*/}

        <div className="top-block__video-block-wrapper">
          <a
            className={`top-block__video-block ${this.state.animationIsFinished
              ? 'animation-is-finished'
              : ''}`}
            ref={ref => (this._videoBlock = ref)}
          >
            <video
              src={videoUrl}
              onDurationChange={this._onDurationChange}
              onPlay={this._onVideoPlay}
              ref={ref => (this._video = ref)}
              autoPlay={false}
              controls={false}
              onEnded={this.onEnded}
            />
          </a>
        </div>

        <div className="top-block__circle-wrapper">
          <div
            className="top-block__circle"
            ref={ref => (this._circle = ref)}
          />
        </div>
      </div>
    )
  }
}
