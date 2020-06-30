import React from 'react'

const H = ({ children, level = 3, size = level }) => {
  const Tag = 'h' + level
  return <Tag className={'h' + size}>{children}</Tag>
}

export default H
