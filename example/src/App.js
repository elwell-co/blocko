import React from 'react'

import { BgImg, Col, Cols, Container, Section, H } from 'blocko'

// import 'blocko/dist/index.css'

const App = () => {
  return (
    <div>
      <Section bg='#eee'>
        <Container>
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
