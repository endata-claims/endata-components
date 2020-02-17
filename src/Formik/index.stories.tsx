import React from 'react'
import { Form, Formik } from 'formik'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { Grid, Typography } from '@material-ui/core'
import YouTubeIcon from '@material-ui/icons/YouTube'

import InfoField from './InfoField'
import TextField from './TextField'
import TextAreaField from './TextAreaField'
import SelectField from './SelectField'
import MoneyField from './MoneyField'
import PhoneField from './PhoneField'
import PostcodeField from './PostcodeField'
import DateField from './DateField'
import TimeField from './TimeField'
import DateTimeField from './DateTimeField'
import SwitchField from './SwitchField'
import ComboBoxField from './ComboBoxField'
import EditorField from './EditorField'
import FileField from './FileField'
import CheckboxField from './CheckboxField'
import CheckboxGroupField from './CheckboxGroupField'

export default {
  title: 'Formik fields',
}

export const Default = () => {
  const renderField = ({ component: Comp, xs = 2, ...props }: any) => {
    return (
      <Grid item xs={xs} key={props.name}>
        <Comp {...props} variant='outlined' startAdornment={<YouTubeIcon />} fullWidth />
      </Grid>
    )
  }
  const renderGroup = ({ title, items }: any) => {
    return (
      <>
        {title && (
          <Typography variant='h5' gutterBottom style={{ marginTop: 16 }}>
            {title}
          </Typography>
        )}
        <Grid container spacing={2}>
          {items.map(renderField)}
        </Grid>
      </>
    )
  }

  const options = ['Red', 'Yellow', 'Green', 'Blue'].map(d => ({ label: d, value: d }))

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        onSubmit={values => console.log(values)}
        initialValues={{
          text: 'some text',
          textarea: 'some text',
          select: '',
          money: 50.20,
          phone: '0426893799',
          postcode: '',
          info: 'there is some text here as info, no edit',
          date: '',
          time: '',
          datetime: '',
          switch: true,
          combo: '',
          comboMulti: '',
          editor: '',
          file: '',
          checkbox: true,
          checkboxgroup: ''
        }}
      >
        <Form>
          {renderGroup({
            title: 'Text Fields',
            items: [
              { label: 'Info field', name: 'info', component: InfoField },
              { label: 'Text field', name: 'text', component: TextField },

              { label: 'Money field', name: 'money', component: MoneyField },
              { label: 'Phone field', name: 'phone', component: PhoneField },
              { label: 'Postcode field', name: 'postcode', component: PostcodeField },
              { label: 'Text area', name: 'textarea', component: TextAreaField, rows: 3, rowsMax: 5 },
            ]
          })}
          {renderGroup({
            title: 'Combo',
            items: [
              { label: 'Select field no options', name: 'select', component: SelectField },
              { label: 'Select field', name: 'select', component: SelectField, options },
              { label: 'ComboBox', name: 'combo', component: ComboBoxField, options },
              {
                component: ComboBoxField,
                label: 'Multi ComboBox', name: 'comboMulti',
                options, multiple: true
              },
            ]
          })}
          {renderGroup({
            title: 'Date time pickers',
            items: [
              { label: 'Date', name: 'date', component: DateField },
              { label: 'Time', name: 'time', component: TimeField },
              { label: 'DateTime', name: 'datetime', component: DateTimeField },
            ]
          })}
          {renderGroup({
            title: 'Others',
            items: [
              { label: 'Switch', name: 'switch', component: SwitchField },
              {
                component: FileField, xs: 4,
                label: 'File', name: 'file'
              },
              {
                component: CheckboxField,
                label: 'Checkbox', name: 'checkbox'
              },
              {
                component: CheckboxGroupField,
                label: 'Checkbox Groups', name: 'checkboxgroup',
                options
              },
              {
                component: EditorField, xs: 8,
                label: 'Editor', name: 'editor'
              },
            ]
          })}
        </Form>
      </Formik>
    </MuiPickersUtilsProvider>
  )
}