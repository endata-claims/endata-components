import React from 'react'

import { Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { TextFieldProps } from '@material-ui/core'
import { InputAdornment } from '@material-ui/core'

export type FormikTextFieldProps = TextFieldProps & {
  name: string

  startAdornment?: React.ReactElement
  endAdornment?: React.ReactElement
  readOnly?: boolean
}

const FormikTextField: React.FC<FormikTextFieldProps> = ({ startAdornment, endAdornment, InputProps, ...props }) => {
  return (
    <Field component={TextField}
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
      }}
    />
  )
}
export default FormikTextField