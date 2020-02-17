import React from 'react'

import TextField, { FormikTextFieldProps } from '../TextField'
import NumberFormat from 'react-number-format'

type PhoneFieldProps = FormikTextFieldProps & {
  format?: string
}
const PhoneField: React.FC<PhoneFieldProps> = props => {
  return (
    <TextField
      {...props}
      InputProps={{
        inputComponent: PhoneFormat,
      }}
    />
  )
}
export default PhoneField

const PhoneFormat = ({
  inputRef,
  onChange, name,
  ...props
}: any) => {
  return (
    <NumberFormat
      {...props}

      allowNegative={false}
      decimalScale={0}
      format='#### ### ###'

      name={name}
      getInputRef={inputRef}
      onValueChange={(values: any) => {
        onChange({
          target: {
            name,
            value: values.floatValue
          }
        })
      }}
    />
  )
}