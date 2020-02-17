import React from 'react'

import TextField, { FormikTextFieldProps } from '../TextField'
import NumberFormat from 'react-number-format'

type PostcodeFieldProps = FormikTextFieldProps & {
  format?: string
}
const PostcodeField: React.FC<PostcodeFieldProps> = props => {
  return (
    <TextField
      {...props}
      InputProps={{
        inputComponent: PhoneFormat,
      }}
    />
  )
}
export default PostcodeField

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
      format='####'

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