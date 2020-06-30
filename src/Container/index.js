import React from 'react'
import { css } from 'styled-components/macro'

import vars from '../vars'

const Container = ({ children, maxWidth = vars.size.xxl, flush = false }) => {
  return (
    <div
      css={css`
        box-sizing: border-box;
        width: 100%;
        max-width: ${maxWidth};
        margin-left: auto;
        margin-right: auto;
        ${!flush &&
        css`
          padding-left: 5vw;
          padding-right: 5vw;
        `}
      `}
    >
      {children}
    </div>
  )
}

export default Container
