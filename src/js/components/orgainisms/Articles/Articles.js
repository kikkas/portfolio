/*
 *
 * Articles
 *
 */

import { h, Component } from 'preact'

import Article from '@/js/components/molecules/Article'

import './style.css'

export default class Articles extends Component {
  constructor() {
    super()

    this.articles = [
      {
        title: 'How Intercom makes you interact with users',
        type: 'article',
        link: 'https://github.com/kikkas',
      },
      {
        title: 'How Intercom makes you interact',
        type: 'teardown',
        link: 'https://github.com/kikkas',
      },
      {
        title: 'How Intercom makes you interact with users',
        type: 'article',
        link: 'https://github.com/kikkas',
      },
    ]
  }

  render() {
    return (
      <div className="articles">
        <div className="articles__title">Behind my mind</div>
        <div className="articles__list">
          {this.articles.map((article, index) => (
            <Article
              key={index}
              title={article.title}
              type={article.type}
              link={article.link}
            />
          ))}
        </div>
      </div>
    )
  }
}
