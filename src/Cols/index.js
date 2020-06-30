import React from 'react'
import { css } from 'styled-components/macro'

import defaults from '../defaults'

const Cols = ({ children, vAlign, space = defaults.space[1], ...props }) => (
  <div
    css={css`
      overflow: hidden;
    `}
  >
    <div
      css={css`
        min-width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        ${vAlign === 'center' &&
        css`
          align-items: center;
        `}
        ${space &&
        css`
          /* min-width: calc(100% - ${space} - ${space}); */
          margin: -${space};
          & > * {
            padding: ${space};
          }
        `}
      `}
      {...props}
    >
      {children}
    </div>
  </div>
)

export default Cols
