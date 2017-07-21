/*
 *
 * Navbar
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import menu_closed_icon from 'assets/svg/menu-closed.svg'
import menu_closed_dark_icon from 'assets/svg/menu-closed-dark.svg'
import menu_opened_icon from 'assets/svg/menu-opened.svg'

import './style.css'


export default class Navbar extends React.Component {
  static propTypes = {
    light: PropTypes.bool,
  }

  constructor() {
    super()

    this.toggle = this.toggle.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  state = {
    closed: true,
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick)
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick)
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown(event) {
    if (event.keyCode === 27) {
      this.setState({
        closed: true,
      })
    }
  }

  handleClick(event) {
    if (!this.state.closed && !/navbar/g.test(event.target.className) &&
      event.target.parentNode && !/navbar/g.test(event.target.parentNode.className)) {

      this.setState({
        closed: true,
      })

    }
  }

  toggle(event) {
    event.stopPropagation()

    this.setState({
      closed: !this.state.closed,
    })
  }

  render() {
    const { closed } = this.state
    const { light } = this.props

    return (
      <div
        className={`navbar ${
          closed ? 'navbar--closed' : 'navbar--opened'
        } ${
          light ? 'navbar--light' : ''
        }`}
      >
        <div className="navbar__content">
          <div className="navbar__header">

            <div className="navbar__logo">kikkas.</div>

            {
              closed ?
                <div
                  className="navbar__menu-button"
                  dangerouslySetInnerHTML={{
                    __html: light ? menu_closed_dark_icon : menu_closed_icon
                  }}
                  onClick={this.toggle}
                /> :
                <div
                  className="navbar__menu-button"
                  dangerouslySetInnerHTML={{__html: menu_opened_icon}}
                  onClick={this.toggle}
                />
            }

          </div>
          <div className="navbar__body">

            <div className="navbar__column">
              <div className="navbar__column-title">About me</div>
              <div className="navbar__column-link">LinkedIn</div>
              <div className="navbar__column-link">Medium</div>
              <div className="navbar__column-link">Dribbble</div>
            </div>

            <div className="navbar__column">
              <div className="navbar__column-title">Projects</div>
              <div className="navbar__column-link">#1 Autonomous car</div>
              <div className="navbar__column-link">#2 Health dashboard</div>
              <div className="navbar__column-link">#3 Flight app</div>
            </div>

            <div className="navbar__column">
              <div className="navbar__column-title">Behind my mind</div>
              <div className="navbar__column-link">How Intercom makes you interact with users</div>
              <div className="navbar__column-link">What does the LIDAR mean?</div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
