import { connect } from 'react-redux'
import { reduxForm } from 'redux-form/immutable'
import View from './View'
import FORM_NAMES from 'constants/form'
import PROJECTION_CONSTANTS from 'constants/projection'
import { getProjectedMonth } from 'utils/calculateProjectionData'
import { Map } from 'immutable'

interface OwnProps {
}

const mapStateToProps = (state: Map<any, Object>, ownProps: OwnProps) => {
  const userData = state.toJS().form[FORM_NAMES.projection] ||
    {
      incomeDollars: 6000,
      totalAssetsDollars: 200000,
      expensesDollars: 1500,
      annualIncomeGrowthRate: PROJECTION_CONSTANTS.ANNUAL_INCOME_GROWTH,
      annualAssetsGrowthRate: PROJECTION_CONSTANTS.ANNUAL_ASSETS_GROWTH_RATE,
      annualExpensesGrowthRate: PROJECTION_CONSTANTS.ANNUAL_EXPENSES_GROWTH_RATE,
      annualSafeWithdrawlRate: PROJECTION_CONSTANTS.ANNUAL_SAFE_WITHDRAWAL_RATE
    }
  const displayValue = getProjectedMonth(userData)

  return {
    displayValue
  }
}

export default connect(mapStateToProps)(View)
