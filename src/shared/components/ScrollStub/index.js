/**
 *
 * Scroll stub for router
 *
 */

import { h, Component } from 'preact'
import { connect } from 'preact-redux'

@connect(({ routing }) => ({
  location: routing.locationBeforeTransitions,
}))
export default class ScrollStub extends Component {
  state = {
    rendered: false,
  }

  render() {
    if (this.state.rendered) {
      return <div>{this.props.children}</div>
    }
    return <div style={{ width: '100vw', height: '100vh' }} />
  }

  componentDidMount() {
    document.body.scrollTop = 0
    this.setState({ rendered: true })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location !== nextProps.location) {
      this.setState({ rendered: false })
      setTimeout(() => {
        this.setState({ rendered: true })
      }, 0)
    }
  }
}
