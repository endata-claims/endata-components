import React from 'react'

import { useField, useFormikContext } from 'formik'
import Autocomplete, { AutocompleteProps } from '@material-ui/lab/Autocomplete'
import { TextField, Checkbox, TextFieldProps } from '@material-ui/core' // InputAdornment
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'

export type ComboBoxFieldProps<T> =
  AutocompleteProps<T>
  & TextFieldProps
  & {
    startAdornment?: React.ReactElement
    options: ComboBoxFieldOption[]
    name: string
    multiple?: boolean
    readOnly?: boolean
  }
export type ComboBoxFieldOption = {
  label?: string
  value: string
  group?: string
}
const ComboBoxField: React.FC<ComboBoxFieldProps<{ multiple: boolean }>> = ({ options, name, multiple = false, disabled, readOnly, ...props }) => {
  const [field, meta, helpers] = useField(name)

  const { isSubmitting } = useFormikContext()

  const { error, touched } = meta
  const isError = Boolean(touched && error)

  const handleValueChange = (e: any, selected: any) => {
    if (!selected) return helpers.setValue('')

    const value = !multiple ? selected.value :
      selected.map((x: any) => x.value)
    helpers.setValue(value)
  }

  return (
    // @ts-ignore
    <Autocomplete
      {...props}

      disabled={disabled || readOnly || isSubmitting}

      multiple={multiple}
      disableCloseOnSelect={multiple}
      filterSelectedOptions={!multiple}

      onChange={handleValueChange}

      options={options}
      getOptionLabel={(option: any) => option.label || ''}
      groupBy={(option: any) => option.group}
      renderInput={params => {
        // const startAdornment = (
        //   <InputAdornment position='start' style={{ width: '100%' }}>
        //     {props.startAdornment}
        //     {params.InputProps.startAdornment}
        //   </InputAdornment>
        // )
        const startAdornment = multiple ? params.InputProps.startAdornment :
          props.startAdornment ? props.startAdornment :
            null

        return (
          // @ts-ignore
          <TextField
            error={isError}
            helperText={isError ? error : null}
            {...field}
            {...props}
            {...params}
            InputProps={{
              ...params.InputProps,
              style: { flexWrap: 'nowrap' },
              startAdornment,
            }}
          />
        )
      }}
      renderTags={(value: any) => {
        const label = value.map(({ label }: any) => label).join(', ')

        return (
          <p style={{
            margin: 0, paddingLeft: 6,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {label}
          </p>
        )
      }}
      renderOption={(option: any, { selected }) => (
        <React.Fragment key={option.value}>
          {multiple && (
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
              checkedIcon={<CheckBoxIcon fontSize='small' />}
              style={{ marginRight: 8 }}
              checked={selected}
            />
          )}
          {option.label}
        </React.Fragment>
      )}
    />
  )
}
export default ComboBoxField