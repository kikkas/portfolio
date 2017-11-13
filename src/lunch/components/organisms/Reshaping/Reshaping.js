/*
 *
 * Reshaping
 *
 */

import { h, Component } from 'preact'

import imageUrl from 'assets/img/lunch-test-image.png'
import Construction from '@/lunch/components/molecules/Construction'
import Mistakes from '@/lunch/components/molecules/Mistakes'

import './style.css'

const Reshaping = () => (
  <div className="lunch-content">
    <div className="lunch-content__header">
      Background & Initial thoughts
    </div>
    <div className="lunch-content__content">
      This project started as a client project where
      to goal was to redesign exiting application that
      was filling a dashboard purpose for employer lunch
      card. As the wish was to incorporate a lot more
      than just keeping it a dashboard app, I started
      exploring what options there are to make intiutive
      interface for such a product.

      I started mapping out the whole lunch experience
      what people go through every day and see how many
     touchpoints an application served for that purpose can have.
    </div>
    <div className="lunch-content__media">
      <img className="lunch-content__image" src={imageUrl} />
    </div>
    <div className="lunch-content__header">
      Touchpoints
    </div>
    <div className="lunch-content__content">
      After going throug multiple people lunch experience and
      analyzing it a bit it came clear that there are three
      main things that people struggle and could be better.
      Those are origination (where to go to eat?), company/experience
      (how can I make something differntly than yesterday?),
      knowledge (what I need to eat to be healthy).
    </div>
    <div className="lunch-content__media">
      <img className="lunch-content__image" src={imageUrl} />
    </div>
    <div className="lunch-content__header">
      The bot exprience
    </div>
    <div className="lunch-content__content">
      These type of experiences can feel good only when it is
      reallly built around user needs and has always something
      fresh to offer. One way how this could be approcahed is
      by seeing it as lunch assistant that takes care of your
      needs and makes sure you are having a great time. If we
      bring that to digital world then closest you can get is
      super smart chatbot that does all this.
    </div>
    <div className="lunch-content__media">
      <img className="lunch-content__image" src={imageUrl} />
    </div>
    <div className="lunch-content__header">
      The bot exprience #2
    </div>
    <div className="lunch-content__content">
      These type of experiences can feel good only when it is
      reallly built around user needs and has always something
      fresh to offer. One way how this could be approcahed is
      by seeing it as lunch assistant that takes care of your
      needs and makes sure you are having a great time. If we
      bring that to digital world then closest you can get is
      super smart chatbot that does all this.
    </div>
    <div className="lunch-content__media">
      <img className="lunch-content__image" src={imageUrl} />
    </div>
    <div className="lunch-content__header">
      How the AI works
    </div>
    <div className="lunch-content__content">
      So, what do we actually need to build an AI that is able
      to tell me whom I should go having lunch with and what
      should be on my plate today to keep my muscles happy?
      First, lets look the input data, in order to make
      predictions about where should I go to eat.
      There is tons of services that have listed all food
      places in every modern city I belive like Foursquare,
      Yelp Tripadvisor naming few. Plus food delivery services
      like Foodora, Uber Eats or Wolt that make possible get
      delivery from any foodplace. AI works that there is input and output.
      But what could be potential inputs that user enters?
      Type of food, price, location.(radius)
    </div>
    <div className="lunch-content__media">
      <img className="lunch-content__image" src={imageUrl} />
    </div>
    <div className="lunch-content__header">
      For the conclusion
    </div>
    <div className="lunch-content__content">
    For the conclusion I would like to say that world doesn’t
    really need another application that recommends you something,
    neither it needs an application that says it does something
    based on AI. The thing is that it isn’t about the technolgies
    anymore, rather experiences we can create of them. Somehow it
    has become an natural expectation of users that the apps know
    what they need and are able to find it much faster than humans
    can - we just assume it is there. I like the thought by Frank
    Chen who is partner at Andreessen Horowitz  what hi thinks about
    AI in future startups. And investors will stop looking for AI-powered
    startups in exactly the same way they don’t look for database-inside
    or cloud-native or mobile-first startups anymore. All those things
    are just assumed.
    </div>
    <div className="lunch-content__media">
      <img className="lunch-content__image" src={imageUrl} />
    </div>
  </div>
)

export default Reshaping
