/*
 *
 * App entry point
 *
 */

import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import Router from 'preact-router'

import '@/app/css/main.css'

import App from '@/app/container'
import Home from '@/home'
import Cobase from '@/cobase'
import About from '@/about'
import Old from '@/home-old'
import Wifog from '@/wifog'

import initialState from '@/app/initialState'
import { configureStore } from './store'

import createBrowserHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'preact-router-redux'

const store = configureStore(initialState)

const browserHistory = createBrowserHistory()

const history = syncHistoryWithStore(browserHistory, store)

history.listen(location => {
  setTimeout(() => {
    $('body').animate({ scrollTop: 0 }, 300)
  }, 0)
})

render(
  <Provider store={store}>
    <App>
      <Router
        history={history}
        onUpdate={() => {
          console.log('here')
          window.scrollTo(0, 0)
        }}
      >
        <Home path="/" />
        <Cobase path="/cobase" />
        <Wifog path="/wifog" />
        <About path="/about" />
        <Old path="/old" />
      </Router>
    </App>
  </Provider>,
  document.getElementById('app')
)
