/*
 *
 * Building
 *
 */

import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import './style.css'

export default class Building extends Component {
  state = {
    windowWidth: window.innerWidth,
  }

  componentWillMount() {
    window.addEventListener('resize', this._saveWindowWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._saveWindowWidth)
  }

  _saveWindowWidth = () => {
    this.setState({ windowWidth: window.innerWidth })
  }

  render() {
    return (
      <div className="building">
        {this.state.windowWidth > 767 ? (
          <div className="building__project">Featured project</div>
        ) : (
          ''
        )}
        <div className="building__caption">Building 2.0</div>
        <div className="building__info">
        Construction site productivity tool where managers can have control over the tasks and workforce.
        </div>
        <Link href="/cobase" className="building__link">
          See it here
        </Link>
      </div>
    )
  }
}
