import React from 'react'

import TextField, { FormikTextFieldProps } from '../TextField'

export type FormikTextAreaFieldProps = FormikTextFieldProps

const FormikTextAreaField: React.FC<FormikTextAreaFieldProps> = props => {
  return (
    <TextField
      {...props}
      multiline
    />
  )
}
export default FormikTextAreaField