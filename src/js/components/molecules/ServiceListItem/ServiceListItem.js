/*
 *
 * Service List Item
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import './style.css'


export default class ServiceListItem extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.element,
  }

  render() {
    const { title, description, icon } = this.props

    return (
      <div className="service-list-item">
        <div className="service-list-item__icon">{icon}</div>
        <div className="service-list-item__title">{title}</div>
        <div
          className="service-list-item__description"
          dangerouslySetInnerHTML={{__html: description.replace(/\r?\n|\r/g, '<br />')}}
        />
      </div>
    )
  }
}
