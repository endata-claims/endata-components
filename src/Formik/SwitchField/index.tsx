import React from 'react'
import { Switch, SwitchProps } from 'formik-material-ui'
import { FormControl, FormLabel, makeStyles, FormGroup, FormControlLabel, FormHelperText } from '@material-ui/core'
import { useField, useFormikContext } from 'formik'

type FormikSwitchProps = SwitchProps & {
  label?: string

  onLabel?: string
  offLabel?: string

  readOnly?: boolean
}
const FormikSwitch: React.FC<FormikSwitchProps> = ({ label, onLabel = 'Yes', offLabel = 'No', disabled = false, readOnly = false, ...props }) => {
  const { isSubmitting } = useFormikContext()

  const classes = useStyles()
  const [field, meta] = useField(props.name)
  const { error, touched } = meta
  const isError = Boolean(touched && error)

  return (
    <FormControl component='fieldset' className={classes.root} error={isError}>
      <FormLabel component='legend' className={classes.label}>
        {label}
      </FormLabel>
      <FormGroup row className={classes.root}>
        <FormControlLabel
          labelPlacement='end'
          className={classes.root}
          label={field.value ? onLabel : offLabel}
          control={(
            <Switch color='primary' {...props} disabled={isSubmitting || disabled || readOnly } />
          )}
        />
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
  switch: {
    marginLeft: 'calc(50% - 31px)'
  },
  helperText: {
    marginLeft: 14,
    marginRight: 14
  }
})