import { UserDataType } from 'types/userData'

const calculateIsRetired = (projectedUserData: UserDataType) => {
  return (projectedUserData.totalAssetsDollars * (projectedUserData.annualSafeWithdrawlRate / 12))
    > projectedUserData.expensesDollars
}

const updateProjectedUserData = (previousProjectedUserData: UserDataType) => {
  const { incomeDollars, totalAssetsDollars, expensesDollars } = previousProjectedUserData

  return Object.assign({}, previousProjectedUserData, {
    incomeDollars: incomeDollars * (1 + previousProjectedUserData.annualIncomeGrowthRate / 12),
    totalAssetsDollars: (totalAssetsDollars * (1 + previousProjectedUserData.annualAssetsGrowthRate / 12))
      + incomeDollars - expensesDollars,
    expensesDollars: expensesDollars * (1 + previousProjectedUserData.annualExpensesGrowthRate / 12)
  })
}

let MAX_MONTHS = 10000


export const getProjectedMonth = (userData: UserDataType) => {
  let isRetired = false
  let projectedMonth = 0
  let projectedUserData = userData
  while (!isRetired && projectedMonth < MAX_MONTHS) {
    isRetired = calculateIsRetired(projectedUserData)
    if (!isRetired) {
      projectedUserData = updateProjectedUserData(projectedUserData)
      projectedMonth += 1
    }
  }
  return projectedMonth
}

export const getChartData = (userData: UserDataType) => {
  let isRetired = false
  let projectedMonth = 0
  let projectedUserData = userData
  const monthData = []
  while (!isRetired && projectedMonth < MAX_MONTHS) {
    isRetired = calculateIsRetired(projectedUserData)
    if (!isRetired) {
      projectedUserData = updateProjectedUserData(projectedUserData)
      monthData.push(Object.assign({}, projectedUserData, {month: projectedMonth}))
      projectedMonth += 1
    }
  }
  return monthData.map(datum => {
    return {
      month: datum.month,
      monthlyPassiveIncome: (datum.totalAssetsDollars * datum.annualSafeWithdrawlRate / 12),
      monthlyExpenses: datum.expensesDollars
    }
  })
}
