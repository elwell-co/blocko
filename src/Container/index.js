import React from 'react'
import { css } from 'styled-components/macro'

import defaults from '../defaults'

const Container = ({
  className,
  children,
  width,
  space,
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
        max-width: ${width};
        margin-left: auto;
        margin-right: auto;
        /* position: relative; */
        ${
          space &&
          css`
            padding-left: calc((3.5vw + 24px) * ${space});
            padding-right: calc((3.5vw + 24px) * ${space});
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
