import styled from '@emotion/styled'

import { color } from 'styles/utils.style'

const Header = styled.header`
  border: 1px solid red;
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  padding: 0 1rem;
  background-color: ${color.backMain};

  @media (min-width: 641px) {
    padding: 0 3rem;
  }

  @media (min-width: 1081px) {
    padding: 0 4rem;
  }
`

const Content = styled.div`
  border: 1px solid blue;
  height: 100%;
`

const PageHeader = () => {
  return (
    <Header>
      <Content>
        <h1>PageHeader</h1>
      </Content>
    </Header>
  )
}

export default PageHeader
