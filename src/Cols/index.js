import React from 'react'
import { css } from 'styled-components/macro'

// import defaults from '../defaults'

const Cols = ({ children, vAlign, flip, space, ...props }) => (
  // <div
  //   css={css`
  //     overflow: hidden;
  //   `}
  // >
  <div
    css={css`
        min-width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        ${
          vAlign === 'center' &&
          css`
            align-items: center;
          `
        }
        ${
          flip &&
          css`
            flex-direction: row-reverse;
          `
        }
        ${
          space &&
          css`
          /* min-width: calc(100% - ${space} - ${space}); */
          margin: calc((3.5vw + 24px) * -${space / 2});
          & > * {
            padding: calc((3.5vw + 24px) * ${space / 2});
          }
        `
        }
      `}
    {...props}
  >
    {children}
  </div>
  // </div>
)

export default Cols
