import { connect } from 'react-redux'
import View from './View'
import { projectedMonthSelector } from 'reducers/root'

const mapStateToProps = (state: Object) => ({
  displayValue: projectedMonthSelector(state)
})

export default connect(mapStateToProps, undefined)(View)
