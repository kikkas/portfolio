/*
 *
 * Logger middleware to log actions
 *
 */

import { createLogger } from 'redux-logger'

const logger = createLogger(
  // eslint-disable-next-line no-unused-vars,no-undef
  { predicate: (getState, action) => __DEV__ }
)

export default logger
