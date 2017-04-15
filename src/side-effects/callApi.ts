// Having an issue flow checking this because of fetch. Sad, I know

import 'whatwg-fetch'
import { camelizeKeys } from 'humps'

const API_ROOT = 'https://api.somebackend.com'

export default (requestData) => {
  const { resourceName, callPayload } = requestData

  const requestHeaders = new Headers()
  requestHeaders.append('Content-Type', 'application/json')

  const bodyToMerge = callPayload

  const requestObject = Object.assign({}, {
    method: 'GET',
    headers: requestHeaders,
    mode: 'cors',
    cache: 'default'
  }, bodyToMerge)

  return fetch(API_ROOT, requestObject).then(response => {
    return response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      return camelizeKeys(json)
    })
  })
}
