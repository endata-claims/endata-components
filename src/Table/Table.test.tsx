import React from 'react'
import { shallow } from 'enzyme'

import Table from '.'

const data = [
  { id: 1, email: 'beatyshot@gmail.com', name: 'Yuki', age: 25 },
  { id: 2, email: 'beatyneko@gmail.com', name: 'Yuki', age: 25 },
  { id: 3, email: 'beatyblood@gmail.com', name: 'Yuki', age: 25 },
]

const columns = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
]

describe('Paper tests', () => {
  const renderWrapper = (props: any) => shallow(<Table data={data} columns={columns} />)

  describe('snapshots', () => {
    it('should render without crash', () => {
      expect(renderWrapper({})).toMatchSnapshot()
    })
    it('should render loading state', () => {
      expect(renderWrapper({ loading: true })).toMatchSnapshot()
    })
    it('should render loading more state', () => {
      expect(renderWrapper({ loadingMore: true })).toMatchSnapshot()
    })
  })
})