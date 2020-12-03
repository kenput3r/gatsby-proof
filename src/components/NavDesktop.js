import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { SiteContext } from "./context"
import suavecitoLogo from "../images/suavecito-script.png"
import {
  MdHome as Home,
  MdShoppingCart as Cart,
  MdPerson as Account,
  MdSms as Chat,
  MdAccessibility as Accessibility,
} from "react-icons/md"
import SearchForm from "./SearchForm"

const Container = styled.div`
  position: relative;
  z-index: 11;
  @media (max-width: 991px) {
    display: none;
  }
`
const BrandNav = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  font-size: 0.75rem;
  width: 100%;

  .message {
    flex: 2;
  }
  .links {
    display: flex;
    flex: 3;
    flex-direction: row;
    justify-content: flex-end;
    a {
      display: block;
      font-family: NexaRust;
      color: var(--s-red);
      text-decoration: none;
      padding: 0 5px;
      margin-left: 5px;
    }
  }
`
const PrimaryNav = styled.div`
  background-color: #212121;
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

  nav {
    display: flex;
    flex-direction: row;
    flex: 9;
    justify-content: flex-end;
    align-items: center;

    button,
    .button,
    a {
      color: #fff;
      background-color: transparent;
      border: none;
      font-family: NexaRust;
      font-size: 0.8rem;
      margin-left: 5px;
      text-decoration: none;
    }
    a {
      display: flex;
      align-content: center;
      font-size: 1rem;
      padding: 5px;
    }
  }
`
const NavDesktop = () => {
  const { isDrawerOpen, setIsDrawerOpen, setIsActive } = useContext(SiteContext)
  const triggerDrawer = isActive => {
    setIsActive(isActive)
    if (!isDrawerOpen) {
      setIsDrawerOpen(true)
    }
  }
  return (
    <Container>
      <BrandNav>
        <div className="message">
          FREE SHIPPING WHEN YOU SPEND $25, $75 CANADA &amp; MEXICO
        </div>
        <nav aria-label="Brands" className="links">
          <Link to="/">Suavecito</Link>
          <Link to="/">Suavecita</Link>
          <Link to="/">Premium Blends</Link>
          <Link to="/">Firme Club</Link>
          <Link to="/">Speed</Link>
          <Link to="/">Tres Noir</Link>
        </nav>
      </BrandNav>
      <PrimaryNav>
        <div className="logo">
          <Link to="/">
            <img
              src={suavecitoLogo}
              alt="Suavecito"
              style={{ marginBottom: 0 }}
            />
          </Link>
        </div>
        <nav aria-label="Primary Navigation">
          <button onClick={() => triggerDrawer("newReleases")}>
            New Releases
          </button>
          <button onClick={() => triggerDrawer("shop")}>Shop</button>
          <button onClick={() => triggerDrawer("resources")}>Resources</button>
          <a className="button" href="https://wholesale.suavecito.com">
            Wholesale
          </a>
          <Link to="/">
            <Home />
          </Link>
          <Link to="/cart">
            <Cart />
          </Link>
          <Link to="/">
            <Account />
          </Link>
          <Link to="/">
            <Chat />
          </Link>
          <Link to="/">
            <Accessibility />
          </Link>
        </nav>
        <SearchForm />
      </PrimaryNav>
    </Container>
  )
}

export default NavDesktop
