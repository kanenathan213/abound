import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import Wrapper from './Wrapper'
import { getChartDataSelector } from 'reducers/root'
import FORM_NAMES from 'constants/form'

import PROJECTION_CONSTANTS from 'constants/projection'

const mapStateToProps = (state: Object) => ({
  chartData: getChartDataSelector(state)
})

export default connect(mapStateToProps)(Wrapper)
