/*
 *
 * Content
 *
 */

import { h, Component } from 'preact'

import './style.css'

export default class Content extends Component {
  render() {
    return <div className="wifog-page-content">{this.props.children}</div>
  }
}
