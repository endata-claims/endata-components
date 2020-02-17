import React from 'react'

import Paper from '.'

export default {
  title: 'Paper',
}

export const Default = () => {
  return (
    <Paper title='Title'>Content</Paper>
  )
}

export const Loading = () => {
  return (
    <Paper title='Title' loading={true}>
      Content
    </Paper>
  )
}