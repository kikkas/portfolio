/*
 *
 * App reducer
 *
 */

import { APP__INIT } from '@/app/constants'

const initialState = {}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case APP__INIT:
      return action.payload
    default:
      return state
  }
}

export default appReducer
