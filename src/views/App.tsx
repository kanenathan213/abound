import * as React from 'react'
import { Link, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import Home from 'views/Home'
import Setup from 'views/Setup'
import Countdown from 'views/Countdown'
import Header from 'components/Header'
import { history } from '../createStore'

require('!style-loader!css-loader!sass-loader!./App.scss')

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
          <ConnectedRouter history={history} key={Math.random()}>
            <div className='app'>
              <Header />
              <main className='main'>
                <Route exact path='/' component={Home} />
                <Route path='/setup' component={Setup} />
                <Route path='/countdown' component={Countdown} />
              </main>
            </div>
          </ConnectedRouter>
        )
    }
}
