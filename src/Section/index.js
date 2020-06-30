import React from 'react'
import { css } from 'styled-components/macro'

import defaults from '../defaults'

const Section = ({
  children,
  height = 'auto',
  bg,
  space = defaults.space[2],
  ...props
}) => {
  return (
    <div
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
          padding-top: ${space};
          padding-bottom: ${space};
        `}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Section
