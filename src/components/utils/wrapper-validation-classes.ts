import * as classnames from 'classnames'
import { FormMetaType } from 'types/Meta'

const wrapperValidationClasses = (meta: FormMetaType, isRequired: boolean | undefined, baseClass: string | undefined) => {
  const { touched, error } = meta
  return classnames({
    'error-cleared': touched && !error,
    'required-field': Boolean(isRequired),
    'error-field': touched && Boolean(error),
    'warning-field': touched && Boolean(error),
    [baseClass || '']: true
  })
}

export default wrapperValidationClasses
