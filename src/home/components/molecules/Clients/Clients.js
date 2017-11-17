/*
 *
 * Clients
 *
 */

import { h, Component } from 'preact'

import './style.css'

const Clients = () => (
  <div className="clients wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    Portfolio contains latest work only. Over the time I have worked with
    clients{' '}
    <strong>
      IKEA, WWF, Hugo Boss, Fastighetsbyrån, Heineken NYC, Kosta Boda, Rebtel,
      Emric, Sodexo, Ford, EY.
    </strong>
  </div>
)

export default Clients
