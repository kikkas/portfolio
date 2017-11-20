/*
 *
 * Animation
 *
 */

import { h, Component } from 'preact'

import './style.css'

export default class Animation extends Component {
    animationEndHandler = (e) => {
        if (e.animationName == 'bgBlueMove'){
            this.props.onAnimationEnd();
        }
    }
    render() {
        const {wasAnimated} = this.props;
        return (
            <div className="page-loading">
                {!wasAnimated ? <div className="animation" onAnimationEnd={this.animationEndHandler} >
                    <p className="animation__text">Hi! I am getting things ready!</p>
                    <div className="animation__bg"></div>
                </div> : null}
            </div>
        )
    }
}
