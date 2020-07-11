import React from 'react'
import { css } from 'styled-components/macro'

import Section from '../Section'
import Container from '../Container'

const Box = ({
  children,
  height = 'auto',
  bg,
  hSpace,
  vSpace,
  width,
  ...props
}) => {
  return (
    <Section bg={bg} height={height} space={vSpace} {...props}>
      <Container width={width} space={hSpace}>
        {children}
      </Container>
    </Section>
  )
}

export default Box
