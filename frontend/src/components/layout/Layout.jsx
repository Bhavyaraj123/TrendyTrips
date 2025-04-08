import React from 'react'
import Header from '../Header/Header'
import Routers from '../router/Routers'
import Footer from '../footer/Footer'
const Layout = () => {
  return (
    <>
        <Header/>
        <main className="pt-20 md:pt-24">
        <Routers />
      </main>
              {/* <Footer/> */}
<Footer/>
    </>
  )
}

export default Layout;