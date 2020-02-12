import React from 'react'
import { shallow } from 'enzyme'

import Button from '.'

describe('Test Button', () => {
  const renderWrapper = () => shallow(<Button label='Button' />)

  describe('Snapshots', () => {
    it('should match snapshots with label', () => {
      expect(renderWrapper()).toMatchSnapshot()
    })
  })
})