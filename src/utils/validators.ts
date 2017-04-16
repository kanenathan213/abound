// @flow

const PHONE_NUMBER_LENGTH = 10
const US_POST_CODE_LENGTH = 5
const CANADA_POST_CODE_LENGTH = 6

export default {
  required: (value) => value ? undefined : 'Required',
  number: (value) => value && isNaN(Number(value)) ? 'Must be a number' : undefined
}
