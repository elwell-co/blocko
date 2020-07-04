import React from 'react'
import { css } from 'styled-components/macro'

import defaults from '../defaults'

const Section = ({
  className,
  children,
  height = 'auto',
  bg,
  space = defaults.space[1],
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
        ${!flush &&
        css`
          padding-top: calc(3.5vw + 24px);
          padding-bottom: calc(3.5vw + 24px);
        `}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Section
