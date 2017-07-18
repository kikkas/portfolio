import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import appReducer from 'reducers/appReducer';

const rootReducer = combineReducers({
  app: appReducer,
  router: routerReducer,
});

export default rootReducer;
