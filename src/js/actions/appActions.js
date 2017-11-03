/*
 *
 * App actions
 *
 */

import { APP__INIT } from '@/js/constants/ActionTypes'

export const init = data => ({
  type: APP__INIT,
  payload: {
    ...data,
  },
})
