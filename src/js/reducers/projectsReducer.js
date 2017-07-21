/*
 *
 * Projects reducer
 *
 */

import {
  PROJECTS__INIT,
} from 'constants/ActionTypes'


const initialState = {}


function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case PROJECTS__INIT:
      return action.payload.projects
    default:
      return state
  }
}

export default projectsReducer
