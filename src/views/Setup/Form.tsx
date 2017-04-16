import * as React from 'react'
import { Field } from 'redux-form/immutable'
import InputText from 'components/InputText'
import validators from '../../utils/validators'

export interface Props {
  history: {
    push: (path: string) => void
  },
  handleSubmit: any,
  valid: boolean,
  submitting: boolean
}

function toNumber(value: string) {
  return Number(value)
}

export default class StepOne extends React.Component<Props, undefined> {

  handle = (values) => {
    return values
  }
  render() {
    const { handleSubmit, valid, submitting, history } = this.props
    return (
      <form onSubmit={handleSubmit(this.handle)}>
        <Field
          name='incomeDollars'
          component={InputText}
          label='Income'
          isRequired
          normalize={toNumber}
          validate={[validators.required, validators.number]}
        />
        <Field
          name='totalAssetsDollars'
          component={InputText}
          label='Total assets'
          isRequired
          normalize={toNumber}
          validate={[validators.required, validators.number]}
        />
        <Field
          name='expensesDollars'
          component={InputText}
          label='Expenses'
          isRequired
          normalize={toNumber}
          validate={[validators.required, validators.number]}
        />
        <div className='form-actions-wrapper'>
          <button type='submit' className='btn btn-green' disabled={!valid || submitting}>
            { submitting ? 'Submitting...' : 'Submit' }
          </button>
        </div>
      </form>
    )
  }
}
