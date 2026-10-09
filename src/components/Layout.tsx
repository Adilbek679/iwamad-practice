import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <Header title="IWaMAD · Week 5" />

      <main>
        <Outlet />
      </main>

      <Footer year={2026} author="Adilbek" />
    </>
  )
}

export default Layout
