/*
 *
 * Projects actions
 *
 */

import { PROJECTS__INIT } from '@/js/constants/ActionTypes'

export const init = projects => ({
  type: PROJECTS__INIT,
  payload: {
    projects: projects,
  },
})
