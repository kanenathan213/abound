import * as React from 'react'
import wrapperValidationClasses from './utils/wrapper-validation-classes'
import { FormMetaType } from 'types/Meta'

declare interface Props {
  input: any,
  label: string,
  meta: FormMetaType,
  placeholder: string,
  isRequired: boolean
}

const InputText = (props: Props) => {
  const { input, placeholder, label, meta, isRequired } = props
  const { touched, error, warning } = meta
  const baseClass = 'input-text-wrapper'
  const wrapperClasses = wrapperValidationClasses(meta, isRequired, baseClass)
  return (
    <div className={wrapperClasses}>
      <label className='row start-xs input-text'>
        <div className='label-content'>
          <span className='input-text-label'>{label}</span>
        </div>
        <input {...input} required={isRequired} type='text' placeholder={placeholder} />
      </label>
      {touched && ((error && <span className='error'>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  )
}

export default InputText
