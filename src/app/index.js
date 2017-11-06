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
import About from '@/about'
import Old from '@/home-old'

import initialState from '@/app/initialState'
import { configureStore } from './store'

const store = configureStore(initialState)

render(
  <Provider store={store}>
    <App>
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Old path="/old" />
      </Router>
    </App>
  </Provider>,
  document.getElementById('app')
)
