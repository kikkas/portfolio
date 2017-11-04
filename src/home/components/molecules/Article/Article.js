/*
 *
 * Article
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import { Link } from 'preact-router/match'

import ArticleTypeIndicator from '@/home/components/atoms/ArticleTypeIndicator'

import './style.css'

export default class Article extends Component {
  static propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    link: PropTypes.string,
  }

  render() {
    const { title, type, link } = this.props

    return (
      <div className="article">
        <Link href={link} className="article__body">
          <div className="article__title">{title}</div>
          {window.innerWidth > 767 ? (
            <ArticleTypeIndicator type={type} />
          ) : null}
        </Link>

        <div className="article__author">Published by Kickass</div>
      </div>
    )
  }
}
