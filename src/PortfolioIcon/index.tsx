import React from 'react'

import { SvgIconProps } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import HealingIcon from '@material-ui/icons/Healing'

type PortfolioIconProps = SvgIconProps & {
  portfolio: 'Building' | 'Contents' | 'Restoration'
}

const PortfolioIcon: React.FC<PortfolioIconProps> = ({ portfolio, style, ...props }) => {
  if (portfolio === 'Building') return <HomeIcon style={{ ...style, color: '#0f5b78' }} {...props} />
  if (portfolio === 'Contents') return <LiveTvIcon style={{ ...style, color: 'green' }} {...props} />
  if (portfolio === 'Restoration') return <HealingIcon style={{ ...style, color: '#d0a11e' }} {...props} />

  return null
}
export default PortfolioIcon