import { combineReducers } from 'redux'
import { createSelector } from 'reselect'
import { routerReducer } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import PROJECTION_CONSTANTS from 'constants/projection'
import { getProjectedMonth, getChartData } from 'utils/calculateProjectionData'
import FORM_NAMES from 'constants/form'

const makeRootReducer = () => {
  return combineReducers({
    router: routerReducer,
    form
  })
}

const dummyData = {
  incomeDollars: 6000,
  totalAssetsDollars: 200000,
  expensesDollars: 1500,
  annualIncomeGrowthRate: PROJECTION_CONSTANTS.ANNUAL_INCOME_GROWTH,
  annualAssetsGrowthRate: PROJECTION_CONSTANTS.ANNUAL_ASSETS_GROWTH_RATE,
  annualExpensesGrowthRate: PROJECTION_CONSTANTS.ANNUAL_EXPENSES_GROWTH_RATE,
  annualSafeWithdrawlRate: PROJECTION_CONSTANTS.ANNUAL_SAFE_WITHDRAWAL_RATE
}

const projectedMonthDataSelector = state => state.form[FORM_NAMES.projection].values || dummyData

export const projectedMonthSelector = createSelector(
  projectedMonthDataSelector,
  userData => getProjectedMonth(userData),
)

export const getChartDataSelector = createSelector(
  projectedMonthDataSelector,
  userData => getChartData(userData)
)
export default makeRootReducer
