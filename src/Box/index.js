import React from 'react'
import { css } from 'styled-components/macro'

import Container from '../Container'
import defaults from '../defaults'

const Box = ({
  children,
  height = 'auto',
  bg,
  hSpace = defaults.space[2],
  vSpace = defaults.space[2],
  width,
  ...props
}) => {
  return (
    <div
      css={css`
        box-sizing: border-box;
        position: relative;
        min-height: ${height};
        background-color: ${bg};
        display: flex;
        align-items: center;
        justify-content: center;
        ${vSpace &&
        css`
          padding-top: ${vSpace};
          padding-bottom: ${vSpace};
        `}
      `}
      {...props}
    >
      <Container size={width} space={vSpace}>
        {children}
      </Container>
    </div>
  )
}

export default Box
