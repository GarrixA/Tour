import { Outlet } from "react-router-dom"
import Navbar from "./Bars/Navbar"
import Footer from "./Bars/Footer"

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
