import React from 'react'
import { css } from 'styled-components/macro'

import defaults from '../defaults'

/**
 * Represents a single column
 */
function Col({ className, children, width = 1, ...props }) {
  // const widths = Array.isArray(width) ? width : [width]
  const widths = Array.isArray(width) ? width : [{ size: '0px', width: width }]
  return (
    <div
      className={className}
      css={css`
        box-sizing: border-box;
        flex: 0 0 100%;
        ${widths.map(
          (w) =>
            css`
              @media screen and (min-width: ${w.size}) {
                width: ${w.width * 100 + '%'};
                flex: 0 0 ${w.width * 100 + '%'};
              }
            `
        )}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Col
