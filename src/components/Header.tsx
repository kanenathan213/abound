import * as React from 'react'
import { Link } from 'react-router-dom'

export interface AppProps {
}

class Header extends React.Component<AppProps, undefined> {
    shouldComponentUpdate() {
      return false
    }
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

export default Header
