import React from 'react'
import { css } from 'styled-components/macro'

import defaults from '../defaults'

const Container = ({
  className,
  children,
  size = defaults.size.lg,
  space = defaults.space[1],
  flush,
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
          !flush &&
          css`
            padding-left: 20px;
            padding-right: 20px;
            @media screen and (min-width: 400px) {
              padding-left: 5vw;
              padding-right: 5vw;
            }
  }
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
