/*
 *
 * Thoughts
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import { Link } from 'preact-router/match'

import './style.css'

const Thoughts = () => (
  <div className="thoughts">
    <div className="thoughts__self-driving">
      <div className="thoughts__self-driving__caption">My latest thoughts</div>
      <div className="thoughts__self-driving__header">
        Self-driving cars and the Trolley problem
      </div>
      <div className="thoughts__self-driving__info">
        Google recently announced that their self-driving car has driven more
        than a million miles. According to Morgan Stanley, self-driving cars
        will be commonplace in society by ~2025. This got me thinking about the
        ethics and philosophy behind these cars, which is what the piece is
        about.
      </div>
      <Link href="#" className="thoughts__self-driving__link">
        Read more on Medium
      </Link>
    </div>

    <div className="thoughts__investors">
      <div className="thoughts__investors__header">
        In a few years, no investors are going to be looking for AI startups
      </div>
      <div className="thoughts__investors__info">
        Given that nearly all the startups we see these days are dressing
        themselves in AI clothes (powered by machine learning! uses the latest
        RNNs and GANs! post-deep learning architecture!), this might seem
        counter-intuitive, to say the least.
      </div>
      <Link href="#" className="thoughts__investors__link">
        Continiue reading on Medium
      </Link>
    </div>
  </div>
)

export default Thoughts
