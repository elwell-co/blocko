import React from 'react'
import { css } from 'styled-components/macro'

import defaults from '../defaults'

const Container = ({
  children,
  size = defaults.size.lg,
  space = defaults.space[2],
  ...props
}) => {
  return (
    <div
      css={css`
        box-sizing: border-box;
        width: 100%;
        max-width: ${size};
        margin-left: auto;
        margin-right: auto;
        /* position: relative; */
        ${space &&
        css`
          padding-left: ${space};
          padding-right: ${space};
        `}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
