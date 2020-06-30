import React from 'react'
import { css } from 'styled-components/macro'

import defaults from '../defaults'

/**
 * Represents a single column
 */
function Col({ children, width = 1, ...props }) {
  return (
    <div
      css={css`
        box-sizing: border-box;
        flex: 0 0 100%;
        @media screen and (min-width: ${defaults.size.md}) {
          width: ${width * 100 + '%'};
          flex: 0 0 ${width * 100 + '%'};
        }
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Col
