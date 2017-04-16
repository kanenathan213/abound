import * as React from 'react'

export interface Props {
  displayValue: string
}

export default class CountdownView extends React.Component<Props, undefined> {

  render() {
    const { displayValue } = this.props
    return (
      <div>{ displayValue }</div>
    )
  }
}
