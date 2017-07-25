/*
 *
 * App actions
 *
 */

import {
  APP__INIT,
} from 'constants/ActionTypes'


export const init = (data) => ({
  type: APP__INIT,
  payload: {
    ...data,
  },
})
