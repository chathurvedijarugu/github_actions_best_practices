import { Chip } from '@mui/material'
import React from 'react'
type TagProps = {
  focused: boolean
  text: string
  onClick?: (value: string) => void
}
const Tags = ({ focused, text, onClick }: TagProps) => {
  const handleClick = () => {
    return onClick?.(text)
  }
  return (
    <Chip
      label={text}
      color={focused ? 'secondary' : 'default'}
      onClick={handleClick}
    ></Chip>
  )
}

export default Tags
