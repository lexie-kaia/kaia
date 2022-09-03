import GlobalStyleProvider from 'styles/GlobalStyleProvider'
import { Layout } from 'components/layout'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyleProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalStyleProvider>
    </>
  )
}

export default App
