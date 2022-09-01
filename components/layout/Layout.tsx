import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
    </>
  )
}

export default Layout
