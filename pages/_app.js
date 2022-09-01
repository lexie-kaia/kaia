import GlobalStyle from 'styles/globals.style'
import { Layout } from 'components/layout'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
