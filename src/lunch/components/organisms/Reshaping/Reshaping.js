/*
 *
 * Reshaping
 *
 */

import { h, Component } from 'preact'

import imageUrl1 from 'assets/img/lunch-1.png'
import imageUrl2 from 'assets/img/lunch-2.png'
import imageUrl3 from 'assets/img/lunch-3.png'
import imageUrl4 from 'assets/img/lunch-4.png'
import Construction from '@/lunch/components/molecules/Construction'
import Mistakes from '@/lunch/components/molecules/Mistakes'
import { Link } from 'preact-router/match'


import './style.css'

const Reshaping = () => (
  <div className="lunch-content">
    <div className="lunch-content__header">
      Background & Initial thoughts
    </div>
    <div className="lunch-content__content">
    This project started out as a redesign for an existing application
    that was meant for users to  manage their prepaid lunch cards.
    Applications like this are very practical but don’t provide any
    extra value for their users rather than just getting to know their
    card balance. And this makes it less likely that users will spend
    their phone’s precious screen space to keep it. The client’s wish
    was to help users to improve their overall lunch experience: recommend
    good places where to eat, provide relevant content to learn from and
    help people make new connections. These are quite different things
    in their nature and could be separate apps of their own so I started
    to explore what could be the best ways to create an intuitive
    interface for it.
    </div>
    <div className="lunch-content__header">
        Touchpoints
    </div>
    <div className="lunch-content__content">
    In order to find an answer to the question how does a good lunch
    experience look like I conducted a few interviews. After going
    through multiple people’s lunch routines it came clear that there
    are three things that people struggle with and could be solved with technology.
    The problems that came up were the following.  How to find new interesting
    places where to eat?  How to be more social during a lunch so it becomes more
    than just eating? How to make my lunch routine healthier?
    </div>
    <div className="lunch-content__media">
      <img className="lunch-content__image" src={imageUrl1} />
    </div>
    <div className="lunch-content__header">
        Chatbots and AI
    </div>
    <div className="lunch-content__content">
    All the explored touchpoints seemed to have one thing in common:
    in order to provide information or recommendations to the user we
    first need to ask for their input. It is hard to suggest some
    specific place where to eat without knowing nothing about user
    preferences. Another thing that came clear was that user needs
    change quite often because of different factors like workload or
    current feeling. This means that we cannot store user preferences
    persistently but have to ask for it over again. For this purpose
    chatbots seemed like a good fit: we can ask for user input and make
    a suggestion based on that. What is even better is that with current
    machine learning techniques we can actually make suggestions much
    better over time.
    </div>
    <div className="lunch-content__media">
      <img className="lunch-content__image" src={imageUrl2} />
    </div>
    <div className="lunch-content__header">
        Discovering new places
    </div>
    <div className="lunch-content__content">
    Let’s look at the use case where the user wants recommendations
    for new places where to eat and how it could be solved with a
    chatbot. As mentioned before  we need to ask for some basic user
    preferences. Type of food, distance and price range could be good
    for starters. Based on the initial choices some options will be
    presented back to the user. To make suggestions better over time
    the actual purchase data could be used to analyze what places the
    user visited out of the recommendations. Also, simple feedback could
    be asked about the restaurant after having lunch there.
    </div>
    <div className="lunch-content__media">
      <img className="lunch-content__image" src={imageUrl3} />
    </div>
    <div className="lunch-content__header">
        Educational content
    </div>
    <div className="lunch-content__content">
    A similar  solution could also work for recommending educational content
    for users about a healthy lunch routine. Over here we can assume the
    preferences are more consistent and don’t change that often. The challenge
    is to find a good timing when to serve the content and find an engaging format
    for this. One of the solutions could be using interactive stories that the user
    can browse. It is one of the fastest and most engaging ways to introduce different
    topics and has become really popular recently.
    </div>
    <div className="lunch-content__media">
      <img className="lunch-content__image" src={imageUrl4} />
    </div>
    <div className="lunch-content__header">
        Summary & learnings
    </div>
    <div className="lunch-content__content">
    I believe that the world really doesn’t need another chatbot that will recommend you
    something but on some occasions it might be a better experience than an application
    with endless scrollable feeds and setting bars. If the product is easy and engaging
    to use this might create the stickiness for a product and bring the user back next
    time when he or she wonders where to go eat today. Machine learning could help out
    with making suggestions more relevant over time while still keeping the product
    rather simple from the user’s perspective. It has somehow become a new standard that
    we expect from a product nowadays.
    I like the thought by Frank Chen who is a partner at Andreessen Horowitz, what he thinks about
    AI in future products:  “And investors will stop looking
    for AI-powered startups in exactly the same way they don’t look for database-inside
    or cloud-native or mobile-first startups anymore. All those things are just assumed.”
    <span><a className="information" href="https://machinelearnings.co/in-a-few-years-no-investors-are-going-to-be-looking-for-ai-startups-90274c91f5c9">Read Medium article</a></span>
    </div>
  </div>
)

export default Reshaping
