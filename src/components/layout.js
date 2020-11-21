import React from "react"
import PropTypes from "prop-types"
import "./fonts.css"
import "./layout.css"
import Header from "./header"
import Footer from "./Footer"
import Drawer from "./Drawer/"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Drawer />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
