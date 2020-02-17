import React from 'react'
import { shallow } from 'enzyme'
import { Formik, Form } from 'formik'
import YouTubeIcon from '@material-ui/icons/YouTube'

import SelectField from '.'

describe('SelectField tests', () => {
  const renderWrapper = (props = {}) => shallow(
    <Formik initialValues={{ select: '' }}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <SelectField label='Text field' name='text' {...props} />
      </Form>
    </Formik>
  )

  describe('snapshots', () => {
    it('should render without options', () => {
      expect(renderWrapper()).toMatchSnapshot()
    })
    it('should render with options', () => {
      const options = [
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
      ]
      expect(renderWrapper({ options })).toMatchSnapshot()
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