import React from "react"
import PropTypes from "prop-types"
import "./fonts.css"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built by @kenput3r
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
