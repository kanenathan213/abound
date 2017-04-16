import * as React from 'react'
import { Link } from 'react-router-dom'

export interface AppProps {
}

export default class Home extends React.Component<AppProps, undefined> {
    render() {
        return (
          <div>
            <h1>Abound</h1>
            <p>Predict how long until you can leave your job and live solely off your investments</p>
            <Link to='setup/1'>Start</Link>
          </div>
        )
    }
}
