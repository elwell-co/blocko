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
          padding-top: 40px;
          padding-bottom: 40px;
          @media screen and (min-width: 400px) {
            padding-top: 5vw;
            padding-bottom: 5vw;
          }
        `}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Section
