import { connect } from 'react-redux'
import { reduxForm } from 'redux-form/immutable'
import Wrapper from './Wrapper'
import FORM_NAMES from 'constants/form'
import { getChartData } from 'utils/calculateProjectionData'
import PROJECTION_CONSTANTS from 'constants/projection'
import { Map } from 'immutable'

interface OwnProps {
}

const mapStateToProps = (state: Map<any, Object>, ownProps: OwnProps) => {
  const formState = state.toJS().form[FORM_NAMES.projection]
  const formValues = formState && formState.values
  const userData = formValues || {
    incomeDollars: 6000,
    totalAssetsDollars: 200000,
    expensesDollars: 1500,
    annualIncomeGrowthRate: PROJECTION_CONSTANTS.ANNUAL_INCOME_GROWTH,
    annualAssetsGrowthRate: PROJECTION_CONSTANTS.ANNUAL_ASSETS_GROWTH_RATE,
    annualExpensesGrowthRate: PROJECTION_CONSTANTS.ANNUAL_EXPENSES_GROWTH_RATE,
    annualSafeWithdrawlRate: PROJECTION_CONSTANTS.ANNUAL_SAFE_WITHDRAWAL_RATE
  }
  return {
    chartData: getChartData(userData)
  }
}

export default connect(mapStateToProps)(Wrapper)
