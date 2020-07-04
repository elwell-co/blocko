import React from 'react'
import { css } from 'styled-components/macro'

import defaults from '../defaults'

const Container = ({
  className,
  children,
  size = defaults.size.lg,
  space = defaults.space[2],
  left,
  right,
  ...props
}) => {
  return (
    <div
      className={className}
      css={css`
        box-sizing: border-box;
        width: 100%;
        max-width: ${size};
        margin-left: auto;
        margin-right: auto;
        position: relative;
        ${
          space &&
          css`
            padding-left: ${space};
            padding-right: ${space};
          `
        }
        ${
          left &&
          css`
            margin-left: 0;
          `
        }
        ${
          right &&
          css`
            margin-right: 0;
          `
        }
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
