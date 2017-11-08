/*
 *
 * Content
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import { connect } from 'preact-redux'

import imagesLoaded from 'imagesloaded'

import TopBlock from '@/cobase/components/organisms/TopBlock'
import Cover from '@/cobase/components/organisms/Cover'
import Reshaping from '@/cobase/components/organisms/Reshaping'
import CreatingOnMobile from '@/cobase/components/organisms/Mobile'
import Experience from '@/cobase/components/organisms/Experience'

import './style.css'

export default class Content extends Component {
  render() {
    return (
      <div className="cobase-page-content">
        <TopBlock />
        <Cover />
        <Reshaping />
        <CreatingOnMobile />
        <Experience />
      </div>
    )
  }
}
