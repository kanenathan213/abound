import { connect } from 'react-redux'
import { reduxForm } from 'redux-form/immutable'
import FORM_NAMES from 'constants/form'
import Form from './Form'
import PROJECTION_CONSTANTS from 'constants/projection'
import { Map } from 'immutable'

interface OwnProps {
}

const onSubmitSuccess = (result, dispatch, props) => {
  props.history.push('/countdown')
}

const mapStateToProps = (state: Map<any, Object>, ownProps: OwnProps) => {
  const initialValuesObj = {
    annualIncomeGrowthRate: PROJECTION_CONSTANTS.ANNUAL_INCOME_GROWTH,
    annualAssetsGrowthRate: PROJECTION_CONSTANTS.ANNUAL_ASSETS_GROWTH_RATE,
    annualExpensesGrowthRate: PROJECTION_CONSTANTS.ANNUAL_EXPENSES_GROWTH_RATE,
    annualSafeWithdrawlRate: PROJECTION_CONSTANTS.ANNUAL_SAFE_WITHDRAWAL_RATE,
    incomeDollars: 1000,
    totalAssetsDollars: 10000,
    expensesDollars: 500
  }

  return {
    initialValues: initialValuesObj
  }
}

const connectedForm = reduxForm({
  form: FORM_NAMES.projection,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  onSubmitSuccess
})(Form)

export default connect(mapStateToProps)(connectedForm)
