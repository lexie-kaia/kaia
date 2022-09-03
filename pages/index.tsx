import type { NextPage } from 'next'
import Head from 'next/head'
import styled from '@emotion/styled'

const Grid = styled.div`
  border: 1px solid red;
  min-height: calc(100vh - 160px);

  @media (min-width: 641px) {
  }

  @media (min-width: 1081px) {
    display: grid;
    grid-template-columns: minmax(352px, 1fr) minmax(auto, 960px) 1fr;
  }
`

const PostListSection = styled.section`
  border: 1px solid red;
  padding: 0 1rem;

  @media (min-width: 641px) {
    padding: 0 3rem;
  }

  @media (min-width: 1081px) {
    padding: 0 4rem;
  }
`

const ProfileAside = styled.aside`
  border: 1px solid red;
  padding: 0 1rem;

  @media (min-width: 641px) {
    padding: 0 3rem;
  }

  @media (min-width: 1081px) {
    padding: 0 1rem 0 4rem;
  }
`

const Content = styled.div`
  height: 200vh;
  border: 1px solid blue;
`

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kaia / devlog</title>
      </Head>
      <Grid>
        <ProfileAside>
          <Content>
            <h1>Profile</h1>
            <h1>Category & Tag</h1>
          </Content>
        </ProfileAside>
        <PostListSection>
          <Content>
            <h1>Home</h1>
          </Content>
        </PostListSection>
      </Grid>
    </>
  )
}

export default Home
