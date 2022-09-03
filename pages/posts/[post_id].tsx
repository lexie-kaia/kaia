import type { NextPage } from 'next'
import styled from '@emotion/styled'

import Head from 'next/head'

const Grid = styled.div`
  border: 1px solid red;
  min-height: calc(100vh - 160px);

  @media (min-width: 641px) {
  }

  @media (min-width: 1081px) {
    display: grid;
    grid-template-columns: 1fr minmax(auto, 960px) minmax(352px, 1fr);
  }
`

const PostDetailSection = styled.section`
  border: 1px solid red;
  padding: 0 1rem;

  @media (min-width: 641px) {
    padding: 0 3rem;
  }

  @media (min-width: 1081px) {
    padding: 0 4rem;
  }
`

const TocAside = styled.aside`
  border: 1px solid red;
  display: none;

  /* position: sitcky; */
  /* padding: 0 1rem;

  @media (min-width: 641px) {
    padding: 0 3rem;
  } */
  @media (min-width: 1081px) {
    display: block;
    padding: 0 4rem 0 1rem;
    position: fixed;
    right: 0;
    top: 80px;
    min-width: 352px;
  }
`

const Content = styled.div`
  height: 200vh;
  border: 1px solid blue;
`

const EmptyGridItem = styled.div``

const PostDetail: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kaia / devlog - PostDetail</title>
      </Head>
      <Grid>
        <EmptyGridItem />
        <PostDetailSection>
          <Content>
            <h1>Header</h1>
            <h1>Body</h1>
            <h1>Footer</h1>
            <h1>Comments</h1>
          </Content>
        </PostDetailSection>
        <TocAside>
          <Content>
            <h1>Toc</h1>
          </Content>
        </TocAside>
      </Grid>
    </>
  )
}

export default PostDetail
