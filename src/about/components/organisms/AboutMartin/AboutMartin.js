
/*
 *
 * AboutMartin
 *
 */

 import { h, Component } from 'preact'
 import PropTypes from 'prop-types'

 import cover from 'assets/img/me-cover.png'
 import './style.css'

 export default class AboutMartin extends Component {


  render() {
    return (
    <div className="about">
        <div className="about__cover wow fadeIn">
            <div className="about__img" style={{backgroundImage: "url(" + cover + ")"}}></div>
        </div>
        <div className="about__wrapper">
            <div className="about__innerwrapper">
                <div className="about__title wow fadeIn">The story</div>
                <div className="about__description wow fadeIn">I am a multidisciplinary product designer, experienced in creating digital strategies,
                products, and services across a dozen industries. I was born and raised in <span><a className="information" href="https://e-estonia.com/">one of the most tech savvy countries in the world</a></span> and since an early age I having into taking things apart and reconstructing them. This has given me the ability to analyze problems
                on a very deep level and make decisions after understanding the fundamental issues. My experience in tech goes back to a time when
                the first smartphones came out and the Internet was supposed to adapt to that. For the past five years I have been living in Stockholm,
                Sweden where I graduated one of the best digital schools called <span><a className="information" href="https://www.hyperisland.com/">Hyper Island</a></span>. Currently I am helping companies gain business value through
                design and product thinking. My work is a mix of UX/UI, research and validation, I am working closely with a team of product owners,
                data analysts and engineers.</div>
                <div className="about__title wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">What is next?</div>
                <div className="about__description wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">In my free time I enjoy ideating on startup ideas, exploring new products and getting smarter about <span><a className="information" href="https://www.udacity.com/course/data-analyst-nanodegree--nd002"> data science</a></span>.
                I am passionate about disrupting technologies like machine learning, computer vision, AI and autonomous vehicles and I would like to my next journey
                be connected to one of those.
                <br />
                <br />
                Have a challenge for me?<br />
                Find me on <a href="https://www.linkedin.com/in/martin-kikkas-56bb0023/" className="information">Linkedin</a> or write to me <a className="information" href="mailto:martinkikkas@hotmail.com">email</a>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
