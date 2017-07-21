/*
 *
 * Article
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ArticleTypeIndicator from 'components/atoms/ArticleTypeIndicator'

import './style.css'


export default class Article extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    link: PropTypes.string,
  }

  render() {
    const { title, type, link } = this.props

    return (
      <div className="article">
        <Link to={link} className="article__body">
          <div className="article__title">{title}</div>
          <ArticleTypeIndicator type={type} />
        </Link>

        <div className="article__author">Published by Kickass</div>
      </div>
    )
  }
}
