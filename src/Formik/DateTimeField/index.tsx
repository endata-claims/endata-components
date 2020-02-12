import React from 'react'

import { DateTimePicker, DateTimePickerProps } from 'formik-material-ui-pickers'
import { InputAdornment } from '@material-ui/core'

export type DateTimeFieldProps = Omit<DateTimePickerProps, 'variant'> & {
  variant: 'standard' | 'outlined' | 'filled'
  startAdornment?: React.ReactElement
  endAdornment?: React.ReactElement
}
const DateTimeField: React.FC<DateTimeFieldProps> = ({ variant, startAdornment, endAdornment, ...props }) => {
  return (
    <DateTimePicker
      {...props}
      variant='inline'
      inputVariant={variant}
      format="dd/MM/yyyy hh:mm a"

      InputProps={{
        ...props.InputProps,
        startAdornment: !startAdornment ? null : (
          <InputAdornment position='start'>
            {startAdornment}
          </InputAdornment>
        ),
        endAdornment: !endAdornment ? null : (
          <InputAdornment position='end'>
            {endAdornment}
          </InputAdornment>
        )
      }}
    />
  )
}
export default DateTimeField