import { getProjectedMonth, getChartData } from 'utils/calculateProjectionData'
import PROJECTION_CONSTANTS from 'constants/projection'
import {} from 'jest'

describe('getProjectedMonth()', () => {
  describe('when given a standard user data object', () => {
    const testUserData = {
      incomeDollars: 6000,
      totalAssetsDollars: 200000,
      expensesDollars: 1500,
      annualIncomeGrowthRate: PROJECTION_CONSTANTS.ANNUAL_INCOME_GROWTH,
      annualAssetsGrowthRate: PROJECTION_CONSTANTS.ANNUAL_ASSETS_GROWTH_RATE,
      annualExpensesGrowthRate: PROJECTION_CONSTANTS.ANNUAL_EXPENSES_GROWTH_RATE,
      annualSafeWithdrawlRate: PROJECTION_CONSTANTS.ANNUAL_SAFE_WITHDRAWAL_RATE
    }
    const expectedResult = 44
    it('should return expected number of months', () => {
      expect(getProjectedMonth(testUserData)).toEqual(expectedResult)
    })
  })
})
