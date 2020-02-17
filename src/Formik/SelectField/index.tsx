import React from 'react'

import TextField, { FormikTextFieldProps } from '../TextField'
import { MenuItem } from '@material-ui/core'

export type FormikSelectFieldProps = FormikTextFieldProps & {
  options?: SelectOption[]
}
export type SelectOption = {
  label?: string
  value: string
}

const FormikSelectField: React.FC<FormikSelectFieldProps> = ({ options, ...props }) => {
  return (
    <TextField {...props} select>
      {options
        ? options.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))
        : (
          <MenuItem disabled>
            No option
          </MenuItem>
        )
      }
    </TextField>
  )
}
export default FormikSelectField