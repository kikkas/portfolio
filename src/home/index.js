/*
 *
 * Home page
 *
 */

import {h, Component} from 'preact'
import {connect} from 'preact-redux'
import Helmet from 'preact-helmet'
import PropTypes from 'prop-types'
import {isAnimated} from '../app/actions'

import 'animate.css/animate.min.css'
import WOW from 'wowjs';

import Content from '@/home/components/organisms/Content'
import Navbar from '@/shared/components/Navbar'
import Footer from '@/shared/components/Footer'
import Caption from '@/home/components/organisms/Caption'
import CobaseFeatured from '@/home/components/organisms/CobaseFeatured'
import LatestWork from '@/home/components/organisms/LatestWork'
import Thoughts from '@/home/components/organisms/Thoughts'
import Animation from '@/home/components/animation/Animation'

import './style.css'

function mapStateToProps(state) {
    return {
        projects: state.projects,
        wasAnimated: state.app.wasAnimated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        isAnimated : () => dispatch(isAnimated())
    }
}
@connect(mapStateToProps, mapDispatchToProps)

export default class Home extends Component {

    static propTypes = {
        projects: PropTypes.object,
    }

    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    animationCallBack = () => {
        this.props.isAnimated();
    }
    render() {
        const {wasAnimated} = this.props;
        return (
            <Animation onAnimationEnd={this.animationCallBack} wasAnimated={wasAnimated}>
                <div className="home-page">
                    <Helmet title="Martin Kikkas"/>
                    <Navbar title="About" link="/about"/>
                    <Content>
                        <Caption />
                        <CobaseFeatured />
                        <LatestWork />
                        <Thoughts />
                    </Content>
                    <Footer />
                </div>
            </Animation>
        )
    }
}
