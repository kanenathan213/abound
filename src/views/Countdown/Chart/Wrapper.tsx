import * as React from 'React'
import { UserDataType } from 'types/userData'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

const dayData = [
  { date: '4/5', loadsCount: 64 },
  { date: '4/6', loadsCount: 55 },
  { date: '4/7', loadsCount: 96 },
  { date: '4/8', loadsCount: 81 },
  { date: '4/9', loadsCount: 105 }
]

const weekData = [
  { date: '4/5', loadsCount: 34, expenses: 18 },
  { date: '4/12', loadsCount: 65, expenses: 28 },
  { date: '4/7', loadsCount: 46, expenses: 38 },
  { date: '4/8', loadsCount: 98, expenses: 18 },
  { date: '4/9', loadsCount: 37, expenses: 58 }
]

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
            <Line type='monotone' dataKey='monthlyPassiveIncome' stroke='#2b8e69' strokeWidth='2' />
            <Line type='monotone' dataKey='monthlyExpenses' stroke='#c58c01' strokeWidth='2' />
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
