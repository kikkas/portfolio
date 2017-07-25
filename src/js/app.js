import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import {
  Route,
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import 'css/main.css'

import App from 'containers/App'
import Home from 'components/pages/Home'
import About from 'components/pages/About'

import rootReducer from './reducers'

const history = createHistory()
const middleware = routerMiddleware(history)

typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f

const createStoreWithMiddleware = applyMiddleware(
  middleware,
  thunk
)(createStore)

export const store = process.env.NODE_ENV !== 'production' ?
  createStoreWithMiddleware(rootReducer, window.devToolsExtension && window.devToolsExtension()) :
  createStoreWithMiddleware(rootReducer)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default
    store.replaceReducer(nextRootReducer)
  })
}

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </App>
      </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
