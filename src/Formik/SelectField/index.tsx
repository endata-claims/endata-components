import React from 'react'

import TextField, { FormikTextFieldProps } from './TextField'
import { MenuItem } from '@material-ui/core'

export type FormikSelectField = FormikTextFieldProps & {
  options?: Option[]
}
export type Option = {
  label?: string
  value: string
  // group?: string
}
const FormikInfoField: React.FC<FormikSelectField> = ({ options, ...props }) => {
  return (
    <TextField {...props} select>
      {options && options.map(({ label, value }) => (
        <MenuItem value={value} key={value}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  )
}
export default FormikInfoField