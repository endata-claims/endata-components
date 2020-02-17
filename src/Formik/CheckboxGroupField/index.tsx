import React from 'react'
import { FormControl, makeStyles, FormGroup, FormLabel, FormHelperText, FormControlLabel, Checkbox } from '@material-ui/core'
import { useField, useFormikContext } from 'formik'

export type CheckboxGroupFieldProps = {
  name: string
  label?: string
  options?: Option[]
  disabled?: boolean
  readOnly?: boolean
}
type Option = {
  label?: string
  value: string
}
const CheckboxGroupField: React.FC<CheckboxGroupFieldProps> = ({ name, label, options, disabled = false, readOnly = false }) => {
  const classes = useStyles()

  const { isSubmitting } = useFormikContext()

  const [field, meta, { setValue }] = useField(name)
  const { error, touched } = meta
  const isError = Boolean(touched && error)

  const changeValue = React.useCallback((value: any) => setValue(value), [name])

  // @ts-ignore
  const initialState = React.useMemo(() => Object.fromEntries(options?.map(option => [option.value, false])), [options])
  const [state, setState] = React.useState(initialState)
  const handleChange = (value: any) => (event: any) => {
    setState((previous: any) => ({
      ...previous,
      [value]: event?.target?.checked
    }))
  }
  React.useEffect(() => {
    const values = Object.entries(state).filter(([, value]) => value).map(([key]) => key)
    changeValue(values)
  }, [state, changeValue])

  return (
    <FormControl component='fieldset' className={classes.root} error={isError} disabled={isSubmitting || disabled || readOnly}>
      <FormLabel component='legend' className={classes.label}>
        {label}
      </FormLabel>
      <FormGroup row className={classes.root}>
        {options?.map(({ label, value }) => (
          <FormControlLabel
            key={value}
            label={label}
            control={(
              <Checkbox
                {...field}
                value={value}
                checked={state[value]}
                onChange={handleChange(value)}
                disabled={isSubmitting || disabled || readOnly}
              />
            )}
          />
        ))}
      </FormGroup>
      {isError && (
        <FormHelperText className={classes.helperText}>
          {String(error)}
        </FormHelperText>
      )}
    </FormControl>
  )
}
export default CheckboxGroupField
const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    transform: 'scale(0.75)'
  },
  switch: {
    marginLeft: 'calc(50% - 31px)'
  },
  helperText: {
    marginLeft: 14,
    marginRight: 14
  }
})