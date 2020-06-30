import React from 'react'
import { css } from 'styled-components/macro'

import vars from '../vars'

const Section = ({ children, minHeight = 'auto', bg, spacing, ...props }) => {
  return (
    <div
      css={css`
        box-sizing: border-box;
        position: relative;
        min-height: ${minHeight};
        background-color: ${bg};
        display: flex;
        align-items: center;
        justify-content: center;
        ${spacing &&
        css`
          padding-top: ${vars.spacing[spacing]};
          padding-bottom: ${vars.spacing[spacing]};
        `}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Section
