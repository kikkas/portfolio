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
  <div className="experience wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="experience__header">Relevant experience</div>
    <div className="experience__info">
    During the early pilots we discovered that kanban type task
    boards are good for getting an overview of the project status
    but they don’t work well for making sure that workload is equally
    balanced. Managing large teams can be quite challenging  in a workplace,
    such as an entire apartment building where face-to-face interactions are
    rare between the manager and the team. To satisfy both needs we had to
    find better ways to present the data.
    </div>
    <Overview />
    <Resources />
  </div>
)

export default Experience
