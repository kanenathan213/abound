import * as React from 'React'
import Number from './Number'
import Chart from './Chart'

interface AppProps {
}

export default class Wrapper extends React.Component<AppProps, undefined> {
  render() {
    return (
      <div>
        <Number />
        <Chart />
      </div>
    )
  }
}
