import React from 'react'

import PortfolioIcon from '.'

export default {
  title: 'Portfolio Icon'
}

export const Default = () => {
  return (
    <>
      <PortfolioIcon portfolio='Building' />
      <PortfolioIcon portfolio='Contents' />
      <PortfolioIcon portfolio='Restoration' />
    </>
  )
}