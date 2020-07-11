import React from 'react'

import { defaults, BgImg, Col, Cols, Container, Section, Box, H } from 'blocko'

import logo from './blocko-logo.svg'

const App = () => {
  return (
    <>
      <Section bg='#fff' space={1}>
        <Container space={1} width='700px'>
          <img
            style={{ maxWidth: '100%' }}
            width='300'
            src={logo}
            alt='Blocko Logo'
          />
        </Container>
      </Section>
      <Section space={1}>
        <Container space={1} width='700px'>
          <H level='1'>Style-free layout components for React.</H>
          <p>
            Blocko gives you the building blocks you need to make responsive
            page layouts - fast.
          </p>
          <p>
            Use our robust set of layout components to save you from writing the
            same code over and over.
          </p>
          <p>
            These layout blocks quickly build pages and position elements and
            stay out of your way when you're styling your app.
          </p>
          <p>
            Sensible defaults are included for spacing, but can easily be
            adjusted or overriden entirely.
          </p>
        </Container>
      </Section>
      <Section space={1} bg='#fff' height='60vh'>
        <Container space={1}>
          <H>{'<Section />'}</H>
          <p>Use sections to structure a page.</p>
          <p>Give them different background colours to break up content.</p>
          <p>
            A section controls vertical spacing, and should contain a{' '}
            {'<Container />'} as a child
          </p>
        </Container>
      </Section>
      <Section space={1}>
        <Container space={1}>
          <H>{'<Container />'}</H>
          <p>Use containers to group content inside a section.</p>
          <p>
            A container controls the width and horizontal spacing of your
            content.
          </p>
        </Container>
      </Section>
      <Section space={1} bg='#fff'>
        <Container space={1}>
          <Cols>
            <Col width={[0.5, 0.66]}>
              <H>{'<Cols />'}</H>
              <p>
                {'<Cols />'} should contain multiple {'<Col />'} as children.
              </p>
            </Col>
            <Col width={[0.5, 0.33]}>
              <H>{'<Col />'}</H>
              <p>{'<Col />'} can have a width between 0 and 1</p>
            </Col>
          </Cols>
        </Container>
      </Section>
      <Section height='100vh'>
        <BgImg src='https://via.placeholder.com/150'></BgImg>
        <Container
          space={1}
          style={{
            textAlign: 'center'
          }}
        >
          <H>Centering stuff is easy.</H>
        </Container>
      </Section>
      <Section bg='#fff'>
        <Container>
          <Cols vAlign='center'>
            <Col>
              <Section space={1}>
                <Container space={1}>
                  <H>Advanced Layouts</H>
                  <p>Combine these blocks to create advanced layouts.</p>
                  <p>This layout features:</p>
                  <p>
                    Section (no spacing) - to allow the full-width background
                  </p>
                  <p>
                    Container (no spacing) - to provide a max-width on the
                    content, but allow the image to sit flush
                  </p>
                  <p>
                    Cols - to create 2 x 50% width columns for the text and
                    image
                  </p>
                  <p>Then, in the columns..</p>
                  <p>
                    Text column - Section & Container for vertical and
                    horizontal padding (this would also allow the text to remain
                    centered within it's column
                  </p>
                  <p>
                    Image column - Section (no spacing) with custom css of
                    padding-bottom: 100% to provide a responsive square. Inside
                    this is a BgImg which is absolutely positioned.
                  </p>
                </Container>
              </Section>
            </Col>
            <Col>
              <Section style={{ paddingBottom: '100%' }}>
                <BgImg src='https://via.placeholder.com/150'></BgImg>
              </Section>
            </Col>
          </Cols>
        </Container>
      </Section>
      <Section space={1}>
        <Container space={1}>
          <Cols space={1}>
            <Col width={0.333}>
              <H>One</H>
            </Col>
            <Col width={0.333}>
              <H>Two</H>
            </Col>
            <Col width={0.333}>
              <H>Three</H>
            </Col>
            <Col width={0.333}>
              <H>Four</H>
            </Col>
          </Cols>
        </Container>
      </Section>
    </>
  )
}

export default App
