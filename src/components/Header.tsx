import * as React from 'react'
import { Link } from 'react-router-dom'

export interface AppProps {
}

export default class Header extends React.Component<AppProps, undefined> {
    render() {
        return (
          <div className='header'>
            <div className='header-content row between-xs'>
              <Link to='/'>Abound</Link>
              <div>Converter</div>
            </div>
          </div>
        )
    }
}
