import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"
import NavDesktop from "./NavDesktop"
import NavMobile from "./NavMobile"
import SearchResults from "./SearchResults"

const StyledHeader = styled.header`
  position: sticky;
  top: -26px;
  z-index: 11;
  @media (max-width: 991px) {
    top: 0;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <NavDesktop />
    <NavMobile />
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
