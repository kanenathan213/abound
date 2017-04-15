import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux'
import { reducer as form } from 'redux-form/immutable'

const makeRootReducer = () => {
  return combineReducers({
    router: routerReducer,
    form
  })
}

export default makeRootReducer
