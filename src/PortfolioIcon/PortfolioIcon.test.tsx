import React from 'react'
import { shallow } from 'enzyme'

import PortfolioIcon from '.'

describe('Paper tests', () => {
  const renderWrapper = (props: any) => shallow(<PortfolioIcon {...props} />)

  describe('snapshots', () => {
    it('should render icon', () => {
      expect(renderWrapper({ portfolio: 'Building' })).toMatchSnapshot()
      expect(renderWrapper({ portfolio: 'Contents' })).toMatchSnapshot()
      expect(renderWrapper({ portfolio: 'Restoration' })).toMatchSnapshot()
    })
  })
})