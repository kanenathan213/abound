import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import FORM_NAMES from 'constants/form'
import Form from './Form'
import PROJECTION_CONSTANTS from 'constants/projection'

interface OwnProps {
}

const onSubmitSuccess = (result, dispatch, props) => {
  props.history.push('/countdown')
}

  const initialValues = {
    annualIncomeGrowthRate: PROJECTION_CONSTANTS.ANNUAL_INCOME_GROWTH,
    annualAssetsGrowthRate: PROJECTION_CONSTANTS.ANNUAL_ASSETS_GROWTH_RATE,
    annualExpensesGrowthRate: PROJECTION_CONSTANTS.ANNUAL_EXPENSES_GROWTH_RATE,
    annualSafeWithdrawlRate: PROJECTION_CONSTANTS.ANNUAL_SAFE_WITHDRAWAL_RATE,
    incomeDollars: 1000,
    totalAssetsDollars: 10000,
    expensesDollars: 500
  }

const mapStateToProps = (state: Object, ownProps: OwnProps) => {

  return {
    initialValues
  }
}

const connectedForm = reduxForm({
  form: FORM_NAMES.projection,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  onSubmitSuccess
})(Form)

export default connect(mapStateToProps)(connectedForm)
