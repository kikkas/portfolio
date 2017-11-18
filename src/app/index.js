/*
 *
 * App entry point
 *
 */

import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import Router from 'preact-router'

import '../../.htaccess'

import '@/app/css/main.css'

import App from '@/app/container'
import Home from '@/home'
import Cobase from '@/cobase'
import About from '@/about'
import Old from '@/home-old'
import Wifog from '@/wifog'
import Lunch from '@/lunch'
import ScrollStub from '@/shared/components/ScrollStub'

import initialState from '@/app/initialState'
import { configureStore } from './store'

import createBrowserHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'preact-router-redux'

const store = configureStore(initialState)

const browserHistory = createBrowserHistory()

const history = syncHistoryWithStore(browserHistory, store)

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
        <ScrollStub path="/">
          <Home />
        </ScrollStub>

        <ScrollStub path="/cobase">
          <Cobase />
        </ScrollStub>

        <ScrollStub path="/wifog">
          <Wifog />
        </ScrollStub>

        <ScrollStub path="/about">
          <About />
        </ScrollStub>

        <ScrollStub path="/lunch">
          <Lunch />
        </ScrollStub>

        <ScrollStub path="/old">
          <Old />
        </ScrollStub>
      </Router>
    </App>
  </Provider>,
  document.getElementById('app')
)
