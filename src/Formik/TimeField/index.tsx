import React from 'react'

import { TimePicker, TimePickerProps } from 'formik-material-ui-pickers'
import { InputAdornment } from '@material-ui/core'

export type TimeFieldProps = Omit<TimePickerProps, 'variant'> & {
  variant: 'standard' | 'outlined' | 'filled'
  startAdornment?: React.ReactElement
  endAdornment?: React.ReactElement
}
const TimeField: React.FC<TimeFieldProps> = ({ variant, startAdornment, endAdornment, ...props }) => {
  return (
    <TimePicker
      {...props}
      variant='inline'
      inputVariant={variant}

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
export default TimeField