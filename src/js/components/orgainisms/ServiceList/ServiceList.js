/*
 *
 * Service List
 *
 */

import { h, Component } from 'preact'

import ServiceListItem from '@/js/components/molecules/ServiceListItem'

// import TiLightbulb from 'preact-icons/lib/ti/lightbulb'
import FaEmpire from 'preact-icons/lib/fa/empire'
import MdCamera from 'preact-icons/lib/md/camera'
import MdNowWidgets from 'preact-icons/lib/md/now-widgets'

import greenAppleIcon from 'assets/svg/apple-green.svg'
const icon = <i dangerouslySetInnerHTML={{ __html: greenAppleIcon }} />

import './style.css'

export default class ServiceList extends Component {
  constructor() {
    super()

    this.services = [
      {
        title: 'UX/UI design',
        description:
          'For mobile apps, web, TV and any other digital or\n physical device that can be interacted with.',
        // icon: <TiLightbulb color="#3DCF62" size={36} />,
        icon: icon,
      },
      {
        title: 'Scaling design systems',
        description:
          'User behaivour is always in patterns and design systems\n help to make the whole experience smoother.',
        icon: <FaEmpire color="#3DCF62" size={36} />,
      },
      {
        title: 'Build, measure, learn',
        description:
          'Working with developers, managers and data analysts\n to deliver and measure impact. ',
        icon: <MdCamera color="#3DCF62" size={36} />,
      },
      {
        title: 'Innovation',
        description:
          'Design is the process finding the most direct to needed outome. In many cases it means using distruptive technologies.',
        icon: <MdNowWidgets color="#3DCF62" size={36} />,
      },
    ]
  }

  render() {
    return (
      <div className="service-list">
        <div className="service-list__title">What I do</div>
        <div className="service-list__list">
          {this.services.map((service, index) => (
            <ServiceListItem
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    )
  }
}
