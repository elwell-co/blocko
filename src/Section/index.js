import React from 'react'
import { css } from 'styled-components/macro'

const Section = ({
  className,
  children,
  height = 'auto',
  bg,
  space,
  flush,
  ...props
}) => {
  return (
    <div
      className={className}
      css={css`
        box-sizing: border-box;
        position: relative;
        min-height: ${height};
        background-color: ${bg};
        display: flex;
        align-items: center;
        justify-content: center;
        ${space &&
        css`
          padding-top: calc((3.5vw + 24px) * ${space});
          padding-bottom: calc((3.5vw + 24px) * ${space});
        `}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Section
