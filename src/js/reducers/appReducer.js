/*
 *
 * App reducer
 *
 */

import {
  APP__INIT,
  APP__CHANGE_LOCALE,
} from 'constants/ActionTypes'

import { defaultLocale } from 'i18n.js'


const initialState = {
  locale: defaultLocale,
}


function appReducer(state = initialState, action) {
  switch (action.type) {
    case APP__INIT:
      return action.payload
    case APP__CHANGE_LOCALE:
      return {
        ...state,
        locale: action.payload.locale,
      }
    default:
      return state
  }
}

export default appReducer
