import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"
import NavDesktop from "./NavDesktop"
import SearchResults from "./SearchResults"

const StyledHeader = styled.header`
  position: sticky;
  top: -26px;
  z-index: 11;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <NavDesktop />
    <SearchResults />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
