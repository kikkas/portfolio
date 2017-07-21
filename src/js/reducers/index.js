import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import appReducer from 'reducers/appReducer'
import projectsReducer from 'reducers/projectsReducer'

const rootReducer = combineReducers({
  app: appReducer,
  projects: projectsReducer,
  router: routerReducer,
})

export default rootReducer
