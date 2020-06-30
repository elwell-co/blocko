import React from 'react'
import { css } from 'styled-components/macro'

import { vars } from '../lib/theme'

const Cols = ({ children, vAlign, gutter = vars.spacing[2], ...props }) => (
  <div
    css={css`
      overflow: hidden;
    `}
  >
    <div
      css={css`
        min-width: calc(100% - ${gutter * 2});
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        margin: -${gutter};
        & > * {
          padding: ${gutter};
        }
        ${vAlign === 'center' &&
        css`
          align-items: center;
        `}
      `}
      {...props}
    >
      {children}
    </div>
  </div>
)

export default Cols
