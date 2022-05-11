import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'
import { Outlet} from "react-router-dom"

export default function Layout() {
  return (
    <div className="App">
        <Header title="Saharil TODO's" />
        <Nav />
        <Outlet />
        <Footer />
    </div>
  )
}
