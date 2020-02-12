import React from 'react'
import { shallow } from 'enzyme'

import TextField from '.'
import { Formik, Form } from 'formik'

describe('Test Button', () => {
  const renderWrapper = () => shallow(
    <Formik
      initialValues={{ text: 'dkm' }}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <TextField label='Text Field' name='text' />
      </Form>
    </Formik>
  )

  describe('Snapshots', () => {
    it('should match snapshots with label', () => {
      expect(renderWrapper()).toMatchSnapshot()
    })
  })
})
