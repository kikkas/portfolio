/*
 *
 * Animation
 *
 */

import { h, Component } from 'preact'

import './style.css'

export default class Animation extends Component {
    render() {
        return (
            <div className="page-loading">
                <div className="animation">
                    <p className="animation__text">Hi! I am getting things ready!</p>
                    <div className="animation__bg"></div>
                </div>
                {this.props.children}
            </div>
        )
    }
}
