import React from 'react'

export type Props = {
  label: string
}
const Button: React.FC<Props> = ({ label }) => {
  return (
    <button>{label}</button>
  )
}
export default Button