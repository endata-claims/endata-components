import React from 'react'
import { shallow } from 'enzyme'

import Paper from '.'

describe('Paper tests', () => {
  const renderWrapper = (props = {}) => shallow(<Paper {...props} />)

  describe('snapshots', () => {
    it('should render without crash', () => {
      expect(renderWrapper()).toMatchSnapshot()
    })
    it('should render loading', () => {
      expect(renderWrapper({ loading: true })).toMatchSnapshot()
    })
    it('should render with title', () => {
      expect(renderWrapper({ title: 'Paper title' })).toMatchSnapshot()
    })
  })
})