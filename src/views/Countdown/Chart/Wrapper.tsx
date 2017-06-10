import * as React from 'React'
import { UserDataType } from 'types/userData'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

export interface ChartProps {
  chartData: Array<UserDataType>
}

class Wrapper extends React.Component<any, undefined> {
  render() {
    const { chartData } = this.props
    const interval = Math.ceil(chartData.length / 10)
    return (
      <div className='view-wrapper'>
        <div className='chart-container'>
          <div className='chart-title'>
            <div>Time till retirement</div>
          </div>
          <LineChart width={600} height={300} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} data={chartData}>
            <Line
              type='monotone'
              dataKey='monthlyPassiveIncome'
              stroke='#2b8e69'
              strokeWidth='2'
              dot={false}
              name='Monthly Passive Income'
            />
            <Line
              type='monotone'
              dataKey='monthlyExpenses'
              stroke='#c58c01'
              strokeWidth='2'
              dot={false}
              name='Monthly Expenses'
            />
            <XAxis
              dataKey='month'
              padding={{ left: 30, right: 30 }}
              interval={interval}
              label='Months from now'
            />
            <YAxis
              tickFormatter={rawValue => `$${rawValue}`}
            />
            <Tooltip />
          </LineChart>
        </div>
      </div>
    )
  }
}

export default Wrapper
