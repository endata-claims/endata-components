import React from 'react'
import { shallow } from 'enzyme'
import { Formik, Form } from 'formik'
import YouTubeIcon from '@material-ui/icons/YouTube'

import TextField from '.'

describe('TextField tests', () => {
  const renderWrapper = (props = {}) => shallow(
    <Formik initialValues={{ text: 'some text' }}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <TextField label='Text field' name='text' {...props} />
      </Form>
    </Formik>
  )

  describe('snapshots', () => {
    it('should render with label', () => {
      expect(renderWrapper()).toMatchSnapshot()
    })
    it('should render with icon', () => {
      expect(renderWrapper({
        startAdornment: <YouTubeIcon />
      })).toMatchSnapshot()
    })
    it('should render with right icon', () => {
      expect(renderWrapper({
        endAdornment: <YouTubeIcon />
      })).toMatchSnapshot()
    })
  })
})