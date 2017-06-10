import { applyMiddleware, compose, createStore } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import makeRootReducer from './reducers/root'
import { updateRoute } from './actions/routes'

declare let module: {hot: any}
declare let require: any

export const history = createHistory()

export default (initialState = {}) => {
  // Create a history of your choosing (we're using a browser history in this case)

  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleWareList = [ routerMiddleware(history) ]

  // Now you can dispatch navigation actions from anywhere!
  // store.dispatch(push('/foo'))

  // ======================================================
  // Store Enhancers
  // ======================================================

  let composeEnhancers = compose

  const composeWithDevToolsExtension = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  if (typeof composeWithDevToolsExtension === 'function') {
    composeEnhancers = composeWithDevToolsExtension
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================

  const store = createStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleWareList)
    )
  )

  if ((<any>module).hot) {
    (<any>module).hot.accept('./reducers/root', () => {
      const reducers = require('./reducers/root').default
    })
  }

  return store
}
