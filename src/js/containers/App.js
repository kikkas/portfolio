/*
 *
 * App
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { init } from 'actions/AppActions';

import { appLocales, defaultLocale } from 'i18n.js';


@connect(({
  app: { locale }
}) => ({
  locale
}))
export default class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    children: PropTypes.array,
    locale: PropTypes.string,
  };

  componentWillMount() {
    let locale = defaultLocale;

    if (navigator.language) {
      const language = navigator.language.split('-')[0];
      locale = appLocales.indexOf(language) !== -1 ? language : defaultLocale;
    }

    let initialState = {
      locale,
    };

    this.props.dispatch(init(initialState));
  }

  render() {
    const { children } = this.props;

    return (
      <main>
        {children}
      </main>
    );
  }
}
