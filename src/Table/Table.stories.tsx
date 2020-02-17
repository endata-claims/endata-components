import React from 'react'
import Table from '.'

export default {
  title: 'Table',
}

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

export const Default = () => {
  return (
    <Table
      loading={false}
      columns={columns}
      data={data}
    />
  )
}

export const Loading = () => {
  return (
    <Table
      loading={true}
      columns={undefined}
      data={undefined}
    />
  )
}

export const LoadingMore = () => {
  return (
    <Table
      loadingMore={true}
      columns={columns}
      data={data}
    />
  )
}