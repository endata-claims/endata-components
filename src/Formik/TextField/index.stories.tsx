import React from 'react'
import TextField from '.'
import { Formik, Form } from 'formik'

export default {
  title: 'TextField'
}

export const Default = () => (
  <Formik
    initialValues={{ text: '' }}
    onSubmit={(values, actions) => {
      console.log(values)
      actions.setSubmitting(false)
    }}
  >
    <Form>
      <TextField label='Text field' name='text' size='small' />
    </Form>
  </Formik>
)
