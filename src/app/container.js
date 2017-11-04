/*
 *
 * App
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import { connect } from 'preact-redux'

@connect(({ app: { locale } }) => ({
  locale,
}))
export default class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    children: PropTypes.array,
    locale: PropTypes.string,
  }

  render() {
    const { children } = this.props

    return <main className="main-container">{children}</main>
  }
}
