import React from 'react'
import { css } from 'styled-components/macro'

import defaults from '../defaults'

/**
 * Represents a single column
 */
function Col({
  children,
  width = 1, // string or array. if array will change size at each breakpoint
  sizes = Object.values(defaults.size),
  ...props
}) {
  const widths = Array.isArray(width) ? width : [width]
  return (
    <div
      css={css`
        box-sizing: border-box;
        flex: 0 0 100%;
        ${widths.map((w, idx) => {
          return (
            sizes[idx] &&
            css`
              @media screen and (min-width: ${sizes[idx]}) {
                width: ${w * 100 + '%'};
                flex: 0 0 ${w * 100 + '%'};
              }
            `
          )
        })}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Col
