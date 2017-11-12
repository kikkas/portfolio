/*
 *
 * LatestWork
 *
 */

import { h, Component } from 'preact'

import Smart from '@/home/components/molecules/Smart'
import Assistant from '@/home/components/molecules/Assistant'
import Clients from '@/home/components/molecules/Clients'

import './style.css'

const LatestWork = () => (
  <div className="latest-work">
    <Smart />
    <Assistant />
    <Clients />
  </div>
)

export default LatestWork
