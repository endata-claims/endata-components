import React from 'react'

import TextField, { FormikTextFieldProps } from './TextField'

const FormikInfoField: React.FC<FormikTextFieldProps> = props => {
  return (
    <TextField {...props}
      multiline
      rowsMax={3}
      InputProps={{
        readOnly: true
      }}
    />
  )
}
export default FormikInfoField