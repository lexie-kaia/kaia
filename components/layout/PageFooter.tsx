import styled from '@emotion/styled'

const Footer = styled.footer`
  border: 1px solid red;
  height: 80px;
  padding: 0 1rem;

  @media (min-width: 641px) {
    padding: 0 3rem;
  }

  @media (min-width: 1081px) {
    padding: 0 4rem;
  }
`

const Content = styled.div`
  height: 100%;
  border: 1px solid blue;
`

const PageFooter = () => {
  return (
    <Footer>
      <Content>
        <h1>PageFooter</h1>
      </Content>
    </Footer>
  )
}

export default PageFooter
