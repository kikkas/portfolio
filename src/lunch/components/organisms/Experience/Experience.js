/*
 *
 * Experience
 *
 */

import { h, Component } from 'preact'

import Overview from '@/cobase/components/molecules/Overview'
import Resources from '@/cobase/components/molecules/Resources'

import './style.css'

const Experience = () => (
  <div className="experience">
    <div className="experience__header">Tailored experience</div>
    <div className="experience__info">
      For user one of the main views is task manager view that gives them
      overview of the progress on construction site. This view has to be fit
      teams from 2 - 30 people in size that makes data design extreamly hard.
      One of things we dsicuvered during the pilots was that teams that always
      have tasks in their backlog are more productive in overall. To be able to
      main tain this we created a listview out of all the employees on that
      project to give managers ability to balance workload.
    </div>
    <Overview />
    <Resources />
  </div>
)

export default Experience
