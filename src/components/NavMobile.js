import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GiHamburgerMenu as Burger } from "react-icons/gi"
import { SiteContext } from "./context/index.js"
import suavecitoLogo from "../images/suavecito-script.png"

const Container = styled.div`
  position: relative;
  z-index: 11;
  @media (min-width: 992px) {
    display: none;
  }
`
const PrimaryNav = styled.div`
  background-color: #212121;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  .logo {
    flex: 2;
    img {
      height: 54px;
      margin-bottom: 0;
    }
  }

  .burger-container {
    display: flex;
    align-items: center;
    padding: 7px;
    button {
      background-color: transparent;
      color: #fff;
      display: flex;
      align-items: center;
      padding: 0;
      border: 0;
    }
    svg {
      width: 40px;
      height: 40px;
    }
  }
`

const NavMobile = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useContext(SiteContext)
  const triggerDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }
  return (
    <Container>
      <PrimaryNav>
        <div className="logo">
          <Link to="/">
            <img src={suavecitoLogo} alt="Suavecito" />
          </Link>
        </div>
        <div className="burger-container">
          <button onClick={() => triggerDrawer("shop")}>
            <Burger />
          </button>
        </div>
      </PrimaryNav>
    </Container>
  )
}

export default NavMobile
