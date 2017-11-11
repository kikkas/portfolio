/*
 *
 * LatestWork
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import Smart from '@/home/components/molecules/Smart'
import Assistant from '@/home/components/molecules/Assistant'
import Clients from '@/home/components/molecules/Clients'

import './style.css'

export default class LatestWork extends Component {
  render() {
    return (
      <div className="latest-work">
        <Smart />
        <Assistant />
        <Clients />
      </div>
    )
  }
}
