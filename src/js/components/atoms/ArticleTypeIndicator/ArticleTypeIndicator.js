/*
 *
 * ArticleTypeIndicator
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import './style.css'

export default class ArticleTypeIndicator extends Component {
  static propTypes = {
    type: PropTypes.string,
  }

  render() {
    const { type } = this.props

    return (
      <div
        className={`article-type-indicator ${type === 'article'
          ? 'article-type-indicator--green'
          : type === 'teardown' ? 'article-type-indicator--blue' : ''}`}
      >
        {type}
      </div>
    )
  }
}
