import React from 'react'

import { InputAdornment, TextField, TextFieldProps } from '@material-ui/core'

export type InfoFieldProps = TextFieldProps & {
  startAdornment?: React.ReactElement
  endAdornment?: React.ReactElement
}
const InfoField: React.FC<InfoFieldProps> = ({ startAdornment, endAdornment, InputProps, ...props }) => {
  return (
    <TextField {...props}
      multiline
      rowsMax={3}
      InputProps={{
        ...InputProps,
        readOnly: true,
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
export default InfoField