/*
 *
 * TopPanel
 *
 */

import { h, Component } from 'preact'

import { Link } from 'preact-router/match'

import $ from 'jquery'
import 'gsap/TweenMax'
import '@/vendor/cooltext/cooltext.animations.js'
import '@/vendor/cooltext/cooltext.min.js'

import AnimatedImage from '@/js/components/atoms/AnimatedImage'

import imageUrl from 'assets/img/project-featured@2x.png'

import './style.css'

export default class TopPanel extends Component {
  state = {
    initialized: true,
  }

  componentDidMount() {
    let elem = $('.top-panel__animation-desk-text')

    elem.cooltext({
      // onVisible:{action:"animation", animation:"cool67"},
      sequence: [
        {
          action: 'animation',
          animation: 'cool12',
          // elements: 'words',
        },
        {
          action: 'animation',
          animation: 'cool150',
          speed: 100,
          stagger: 100,
          order: 'reverse', // animate the elements in reverse order
        },
        {
          action: 'animation',
          animation: [
            'cool111',
            'cool112',
            'cool118',
            'cool148',
            'cool156',
            'cool187',
          ],
          stagger: 150,
        },
        {
          action: 'animation',
          animation: 'cool209',
          // animation: 'cool275',
          // order: 'random',
          delay: 1,
          onComplete: () => {
            setTimeout(() => {
              this.setState({
                initialized: true,
              })
            }, 200)
          },
        },
      ],
    })
  }

  render() {
    return (
      <div className="top-panel">
        {!this.state.initialized ? (
          <div className="top-panel__animation-desk">
            <div className="top-panel__animation-desk-text">
              Magic is happening
            </div>
          </div>
        ) : (
          <div className="top-panel__content">
            <div className="top-panel__column">
              <div className="top-panel__name">Martin Kikkas</div>
              <div className="top-panel__bio">Product designer</div>
              <div className="top-panel__bio-description">
                With focus on data driven design and innovation
              </div>
              <Link href="/about" className="top-panel__about-link">
                Read my story
              </Link>
            </div>
            <div className="top-panel__column">
              <AnimatedImage src={imageUrl} />
            </div>
          </div>
        )}
      </div>
    )
  }
}
