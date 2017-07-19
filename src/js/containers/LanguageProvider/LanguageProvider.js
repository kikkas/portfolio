/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `js/translations`)
 */

import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'


@connect(
  ({ app }) => ({
    locale: app.locale,
  })
)
export default class LanguageProvider extends Component {
  static propTypes = {
    locale: PropTypes.string,
    messages: PropTypes.object,
    children: PropTypes.element.isRequired,
  }

  render() {
    const { messages, children, locale } = this.props

    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        {Children.only(children)}
      </IntlProvider>
    )
  }
}
