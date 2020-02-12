import React from 'react'

import { Checkbox, CheckboxProps } from 'formik-material-ui'
import { FormControl, FormLabel, makeStyles, FormGroup, FormHelperText } from '@material-ui/core'
import { useField, useFormikContext } from 'formik'

type FormikCheckboxProps = CheckboxProps & {
  label?: string
}
const FormikSwitch: React.FC<FormikCheckboxProps> = ({ label, disabled, readOnly, ...props }) => {
  const classes = useStyles()

  const { isSubmitting } = useFormikContext()

  const [, meta] = useField(props.name)
  const { error, touched } = meta
  const isError = Boolean(touched && error)

  return (
    <FormControl component='fieldset' className={classes.root} error={isError}
      disabled={disabled || readOnly || isSubmitting}
    >
      <FormLabel component='legend' className={classes.label}>
        {label}
      </FormLabel>
      <FormGroup row className={classes.root}>
        <Checkbox {...props} disabled={disabled || readOnly || isSubmitting} />
      </FormGroup>
      {isError && (
        <FormHelperText className={classes.helperText}>
          {String(error)}
        </FormHelperText>
      )}
    </FormControl>
  )
}
export default FormikSwitch

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    transform: 'scale(0.75)'
  },
  helperText: {
    marginLeft: 14,
    marginRight: 14
  }
})