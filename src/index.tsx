import * as React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from 'views/App'
import { Provider } from 'react-redux'
import createStore from './createStore'

declare let global: {___INITIAL_STATE__: any}

const initialState = global.___INITIAL_STATE__
const store = createStore(initialState)

const rootEl = document.getElementById('root')

store.dispatch({ type: 'INITIALIZE' })

render(
    <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
    </AppContainer>,
    rootEl
)

// Hot Module Replacement API
declare let module: {hot: any}
declare let process: {NODE_ENV: string}

if (module.hot) {
    module.hot.accept('./views/App', () => {
        const NewApp = require('./views/App').default

        render(
            <AppContainer>
                <NewApp />
            </AppContainer>,
            rootEl
        )
    })
}
