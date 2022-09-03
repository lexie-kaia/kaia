import { ReactNode, useEffect } from 'react'

import { useRouter } from 'next/router'
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const { pathname } = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
    </>
  )
}

export default Layout
