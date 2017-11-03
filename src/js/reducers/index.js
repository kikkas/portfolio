import { combineReducers } from 'redux'

import appReducer from '@/js/reducers/appReducer'
import projectsReducer from '@/js/reducers/projectsReducer'

const rootReducer = combineReducers({
  app: appReducer,
  projects: projectsReducer,
})

export default rootReducer
