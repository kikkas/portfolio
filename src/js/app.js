import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import Router from 'preact-router'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import '@/css/main.css'

import App from '@/js/containers/App'
import Home from '@/js/components/pages/Home'
import About from '@/js/components/pages/About'

import rootReducer from './reducers'

typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
  ? window.devToolsExtension()
  : f => f

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

export const store =
  process.env.NODE_ENV !== 'production'
    ? createStoreWithMiddleware(
        rootReducer,
        window.devToolsExtension && window.devToolsExtension()
      )
    : createStoreWithMiddleware(rootReducer)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default
    store.replaceReducer(nextRootReducer)
  })
}

render(
  <Provider store={store}>
    <App>
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </App>
  </Provider>,
  document.getElementById('app')
)
