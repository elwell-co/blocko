import React from 'react'

import { BgImg, Col, Cols, Container, Section, H } from 'blocko'

import logo from './blocko-logo.svg'

const App = () => {
  return (
    <div>
      <Section bg='#900' spacing={0}>
        <Container>
          <img src={logo} alt='Blocko Logo' />
          <H>Section > Container</H>
        </Container>
      </Section>
      <Section>
        <Container>
          <Cols>
            <Col width={0.5}>
              <H>Section > Container > Cols > Col</H>
            </Col>
            <Col width={0.5}>
              <H>Section > Container > Cols > Col</H>
            </Col>
          </Cols>
        </Container>
      </Section>
      <Section bg='#eee' flush>
        <Container flush>
          <Cols gutter={0} vAlign='center'>
            <Col width={0.5}>
              <Section>
                <Container>
                  <H>
                    Section (flush) > Container (flush) > Cols (no gutter) > Col
                    > Section > Container
                  </H>
                </Container>
              </Section>
            </Col>
            <Col width={0.5}>
              <Section flush style={{ paddingBottom: '100%' }}>
                <BgImg src='https://via.placeholder.com/150'></BgImg>
              </Section>
            </Col>
          </Cols>
        </Container>
      </Section>
      <Section>
        <Container>
          <Cols>
            <Col width={0.333}>
              <H>One</H>
            </Col>
            <Col width={0.333}>
              <H>Two</H>
            </Col>
            <Col width={0.333}>
              <H>Three</H>
            </Col>
          </Cols>
        </Container>
      </Section>
    </div>
  )
}

export default App
