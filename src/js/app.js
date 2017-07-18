import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  Route,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import LanguageProvider from 'containers/LanguageProvider';
import { translationMessages } from './i18n';

import 'css/main.css';

import App from 'containers/App';
import Home from 'components/pages/Home';
import About from 'components/pages/About';

import rootReducer from './reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f

const createStoreWithMiddleware = applyMiddleware(
  middleware,
  thunk
)(createStore);

export const store = process.env.NODE_ENV !== 'production' ?
  createStoreWithMiddleware(rootReducer, window.devToolsExtension && window.devToolsExtension()) :
  createStoreWithMiddleware(rootReducer);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default;
    store.replaceReducer(nextRootReducer);
  });
}

const render = (translatedMessages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={translatedMessages}>
        <ConnectedRouter history={history}>
          <App>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </App>
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    document.getElementById('app')
  );
};

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.charset = 'utf-8';
  script.async = true;
  script.src = 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en,Intl.~locale.se';
  script.onload = () => render(translationMessages);
  document.getElementsByTagName('head')[0].appendChild(script);
} else {
  render(translationMessages);
}