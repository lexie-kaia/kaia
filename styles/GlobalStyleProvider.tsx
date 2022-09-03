import { Global, ThemeProvider } from '@emotion/react'
import { globalStyles } from './globals.style'
import { theme } from './theme.style'

type Props = {
  children: React.ReactNode
}

const GlobalStyleProvider = ({ children }: Props) => {
  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}

export default GlobalStyleProvider
