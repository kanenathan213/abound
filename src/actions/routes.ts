const locationChange = (payload) => ({
  type: 'ROUTE_CHANGE',
  payload,
})

export const updateRoute = (args) => {
  const { dispatch } = args
  return (nextRoute: string) => dispatch(locationChange(nextRoute))
}
