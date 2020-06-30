import React from 'react'

import { BgImg, Col, Cols, Container, Section, Box, H } from 'blocko'

import logo from './blocko-logo.svg'

const App = () => {
  return (
    <>
      <div style={{ margin: '20px', border: '1px solid blue' }}>
        <Section bg='#fff'>
          <Container>
            <img width='300' src={logo} alt='Blocko Logo' />
          </Container>
        </Section>
        <Section>
          <Container>
            <H level='1'>Style-free layout components for React.</H>
            <p>
              BLOCKO gives you the building blocks you need to make responsive
              page layouts - fast.
            </p>
            <p>
              These blocks are designed to let you quickly position elements on
              the page and stay out of your way when you're styling your app.
            </p>
            <p>
              Sensible defaults are included for spacing, but can easily be
              adjusted or overriden entirely.
            </p>
          </Container>
        </Section>
        <Section bg='#fff' height='60vh'>
          <Container>
            <H>{'<Section />'}</H>
            <p>Use sections to structure a page.</p>
            <p>Give them different background colours to break up content.</p>
            <p>
              A section controls vertical spacing, and should contain a{' '}
              {'<Container />'} as a child
            </p>
          </Container>
        </Section>
        <Section>
          <Container>
            <H>{'<Container />'}</H>
            <p>Use containers to group content inside a section.</p>
            <p>
              A container controls the width and horizontal spacing of your
              content.
            </p>
          </Container>
        </Section>
        <Section bg='#fff'>
          <Container>
            <Cols>
              <Col width={0.5}>
                <H>{'<Cols />'}</H>
                <p>
                  {'<Cols />'} should contain multiple {'<Col />'} as children.
                </p>
              </Col>
              <Col width={0.5}>
                <H>{'<Col />'}</H>
                <p>{'<Col />'} can have a width between 0 and 1</p>
              </Col>
            </Cols>
          </Container>
        </Section>
        <Section>
          <BgImg src='https://via.placeholder.com/150'></BgImg>
          <Container
            style={{
              textAlign: 'center'
            }}
          >
            <H>Centering stuff is easy.</H>
          </Container>
        </Section>
        <Section bg='#fff' space={0}>
          <Container space={0}>
            <Cols space={0} vAlign='center'>
              <Col width={0.5}>
                <Section>
                  <Container>
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
                      horizontal padding (this would also allow the text to
                      remain centered within it's column
                    </p>
                    <p>
                      Image column - Section (no spacing) with custom css of
                      padding-bottom: 100% to provide a responsive square.
                      Inside this is a BgImg which is absolutely positioned.
                    </p>
                  </Container>
                </Section>
              </Col>
              <Col width={0.5}>
                <Section space={0} style={{ paddingBottom: '100%' }}>
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
      <div style={{ margin: '20px', border: '1px solid green' }}>
        <Box bg='#fff'>
          <img width='300' src={logo} alt='Blocko Logo' />
        </Box>
        <Box>
          <H level='1'>Style-free layout components for React.</H>
          <p>
            BLOCKO gives you the building blocks you need to make responsive
            page layouts - fast.
          </p>
          <p>
            These blocks are designed to let you quickly position elements on
            the page and stay out of your way when you're styling your app.
          </p>
          <p>
            Sensible defaults are included for spacing, but can easily be
            adjusted or overriden entirely.
          </p>
        </Box>
        <Box bg='#fff' height='60vh'>
          <H>{'<Box />'}</H>
          <p>
            A combination of {'<Section />'} and {'<Container />'}
          </p>
          <p>
            Works great unless you want to absolute position something in
            between.
          </p>
        </Box>
        <Box>
          <Cols>
            <Col width={0.5}>
              <H>{'<Cols />'}</H>
              <p>
                {'<Cols />'} should contain multiple {'<Col />'} as children.
              </p>
            </Col>
            <Col width={0.5}>
              <H>{'<Col />'}</H>
              <p>{'<Col />'} can have a width between 0 and 1</p>
            </Col>
          </Cols>
        </Box>
        <Box
          style={{
            textAlign: 'center',
            backgroundImage: 'url(https://via.placeholder.com/150)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <H>Centering stuff is easy.</H>
          <H>Overlay / BG needs a method...</H>
        </Box>
        <Box bg='#fff' vSpace={0} hSpace={0} width='100%'>
          <Cols space={0} vAlign='center'>
            <Col width={0.5}>
              <Box>
                <H>Advanced Layouts</H>
                <p>Combine these blocks to create advanced layouts.</p>
                <p>This layout features:</p>
                <p>Section (no spacing) - to allow the full-width background</p>
                <p>
                  Container (no spacing) - to provide a max-width on the
                  content, but allow the image to sit flush
                </p>
                <p>
                  Cols - to create 2 x 50% width columns for the text and image
                </p>
                <p>Then, in the columns..</p>
                <p>
                  Text column - Section & Container for vertical and horizontal
                  padding (this would also allow the text to remain centered
                  within it's column
                </p>
                <p>
                  Image column - Section (no spacing) with custom css of
                  padding-bottom: 100% to provide a responsive square. Inside
                  this is a BgImg which is absolutely positioned.
                </p>
              </Box>
            </Col>
            <Col width={0.5}>
              <Section space={0} style={{ paddingBottom: '100%' }}>
                <BgImg src='https://via.placeholder.com/150'></BgImg>
              </Section>
            </Col>
          </Cols>
        </Box>
        <Section>
          <Container>
            <Cols>
              <Col width={0.333}>
                <Box bg='blue' vSpace={0} hSpace={0}>
                  <H>One</H>
                </Box>
              </Col>
              <Col width={0.333}>
                <Box bg='blue' vSpace={0} hSpace={0}>
                  <H>Two</H>
                </Box>
              </Col>
              <Col width={0.333}>
                <Box bg='blue' vSpace={0} hSpace={0}>
                  <H>Three</H>
                </Box>
              </Col>
            </Cols>
          </Container>
        </Section>
      </div>
    </>
  )
}

export default App
