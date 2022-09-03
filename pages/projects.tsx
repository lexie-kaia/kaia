import type { NextPage } from 'next'
import Head from 'next/head'
import styled from '@emotion/styled'

const Container = styled.div`
  border: 1px solid red;
  max-width: 1080px;
  padding: 0 1rem;
  margin: 0 auto;

  @media (min-width: 641px) {
    padding: 0 3rem;
  }

  @media (min-width: 1081px) {
    padding: 0 4rem;
  }
`

const HeroSection = styled.section`
  min-height: calc(100vh - 80px);
  scroll-snap-align: start;
  scroll-margin-top: 80px;
  border: 1px solid blue;
`
const AboutMeSection = styled.section`
  min-height: calc(100vh - 80px);
  scroll-snap-align: start;
  scroll-margin-top: 80px;
  border: 1px solid blue;
`
const ProjectsSection = styled.section`
  min-height: calc(100vh - 80px);
  scroll-snap-align: start;
  scroll-margin-top: 80px;
  border: 1px solid blue;
`
const ContactSection = styled.section`
  min-height: calc(100vh - 160px);
  scroll-snap-align: start;
  scroll-margin-top: 80px;
  border: 1px solid blue;
`

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kaia / portfolio</title>
      </Head>

      <Container>
        <HeroSection>
          <h1>Hero</h1>
        </HeroSection>
        <AboutMeSection>
          <h1>About Me</h1>
        </AboutMeSection>
        <ProjectsSection>
          <h1>Projects</h1>
        </ProjectsSection>
        <ContactSection>
          <h1>Contact</h1>
        </ContactSection>
      </Container>
    </>
  )
}

export default Projects
