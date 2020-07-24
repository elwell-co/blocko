import React from 'react'

const H = ({ className, children, level = 3, size = level }) => {
  const Tag = 'h' + level
  return <Tag className={`h${size} ${className}`}>{children}</Tag>
}

export default H
