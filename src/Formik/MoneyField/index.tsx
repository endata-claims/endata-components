import React from 'react'

import NumberFormat from 'react-number-format'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import TextField, { FormikTextFieldProps } from '../TextField'

type MoneyFieldProps = FormikTextFieldProps & {
  fixedDecimal?: boolean
  decimalScale?: number
  format?: string
  allowNegative?: boolean
}
const MoneyField: React.FC<MoneyFieldProps> = props => {
  return (
    <TextField
      {...props}
      startAdornment={<AttachMoneyIcon />}
      InputProps={{
        inputComponent: MoneyFormat,
      }}
    />
  )
}
export default MoneyField

const MoneyFormat = ({
  fixedDecimal = true,
  decimalScale = 2,
  allowNegative = true,
  inputRef,
  onChange, name,
  ...props
}: any) => {
  return (
    <NumberFormat
      {...props}

      allowNegative={allowNegative}
      decimalScale={decimalScale}
      fixedDecimalScale={fixedDecimal}

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