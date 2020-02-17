import React from 'react'
import { TextField, TextFieldProps } from '@material-ui/core'
import { useField, useFormikContext } from 'formik'

export type FileFieldProps = TextFieldProps & {
  name: string
  label: string
  disabled?: boolean
  readOnly?: boolean
}

const FileField: React.FC<FileFieldProps> = ({
  name, label,
  disabled = false,
  readOnly = false,
  InputProps, InputLabelProps,
  ...props
}) => {
  const { isSubmitting } = useFormikContext()
  const [field, meta, helpers] = useField(name)
  const error = meta.touched && meta.error

  return (
    <TextField
      {...props}
      type='file'

      onChange={(event: any) => {
        const file = event.currentTarget.files[0]
        helpers.setValue(file)
        helpers.setTouched(true)
      }}
      onBlur={() => field.onBlur(name)}

      disabled={disabled || isSubmitting || readOnly}
      error={Boolean(error)}
      helperText={error}

      InputProps={{
        ...InputProps,
        // readOnly: true
      }}

      InputLabelProps={{
        ...InputLabelProps,
        shrink: true,
      }}
    />
  )
}
export default FileField