/*
 *
 * App reducer
 *
 */

import { APP__INIT } from '@/app/constants'

const initialState = {
  wasAnimated : false
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case APP__INIT:
      return action.payload;
    case 'WAS_ANIMATED':
      return {wasAnimated:true};
    default:
      return state
  }
}

export default appReducer
