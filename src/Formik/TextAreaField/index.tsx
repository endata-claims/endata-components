import React from 'react'

import TextField, { FormikTextFieldProps } from '../TextField'

const FormikTextAreaField: React.FC<FormikTextFieldProps> = props => {
  return (
    <TextField {...props}
      multiline
    />
  )
}
export default FormikTextAreaField