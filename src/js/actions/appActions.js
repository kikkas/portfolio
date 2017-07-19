/*
 *
 * App actions
 *
 */

import {
  APP__INIT,
  APP__CHANGE_LOCALE,
} from 'constants/ActionTypes'


export const init = (data) => ({
  type: APP__INIT,
  payload: {
    ...data,
  },
})

export const changeLocale = (locale) => ({
  type: APP__CHANGE_LOCALE,
  payload: {
    locale,
  },
})
