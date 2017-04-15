import { createAction } from 'redux-actions'

const locationChange = createAction('ROUTE_CHANGE')

export const updateRoute = (args) => {
  const { dispatch } = args
  return (nextRoute: string) => dispatch(locationChange(nextRoute))
}
