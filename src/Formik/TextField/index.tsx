import React from 'react'

import { TextField, TextFieldProps } from 'formik-material-ui'
import { InputAdornment } from '@material-ui/core'

export type FormikTextFieldProps = TextFieldProps & {
  startAdornment?: React.ReactElement
  endAdornment?: React.ReactElement
  readOnly?: boolean
}
const FormikTextField: React.FC<FormikTextFieldProps> = ({ startAdornment, endAdornment, InputProps, readOnly = false, ...props }) => {
  return (
    <TextField
      {...props}
      InputProps={{
        ...InputProps,
        startAdornment: !startAdornment ? null : (
          <InputAdornment position='start'>
            {startAdornment}
          </InputAdornment>
        ),
        endAdornment: !endAdornment ? null : (
          <InputAdornment position='end'>
            {endAdornment}
          </InputAdornment>
        ),
        readOnly
      }}
    />
  )
}
export default FormikTextField