import React from 'react'

import TextField, { FormikTextFieldProps } from '../TextField'

export type FormikInfoFieldProps = FormikTextFieldProps

const FormikInfoField: React.FC<FormikInfoFieldProps> = ({ InputProps, rowsMax = 3, ...props }) => {
  return (
    <TextField {...props}
      multiline
      rowsMax={rowsMax}
      InputProps={{
        ...InputProps,
        readOnly: true
      }}
    />
  )
}
export default FormikInfoField