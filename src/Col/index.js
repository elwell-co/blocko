import React from 'react'
import { css } from 'styled-components/macro'

/**
 * Represents a single column
 */
function Col({ className, children, width = 1, ...props }) {
  // const widths = Array.isArray(width) ? width : [width]
  const widths = Array.isArray(width) ? width : [{ width: '0px' }]
  return (
    <div
      className={className}
      css={css`
        box-sizing: border-box;
        flex: 0 0 100%;
        ${widths.map(
          (w) =>
            css`
              @media screen and (min-width: ${Object.values(w)[0]}) {
                width: ${Object.keys(w)[0] * 100 + '%'};
                flex: 0 0 ${Object.keys(w)[0] * 100 + '%'};
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
