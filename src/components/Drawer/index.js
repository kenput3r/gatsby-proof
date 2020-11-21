import React, { useContext, useState } from "react"
import styled from "styled-components"
import { SiteContext } from "../context"
import NewReleases from "./NewReleases"
import Shop from "./Shop"
import Resources from "./Resources"
import { MdClose as Close } from "react-icons/md"

const Container = styled.div`
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--s-black);
  height: 100vh;
  max-height: 100vh;
  font-family: NexaRust;
  text-align: left;
  padding: 2rem;
  padding-top: calc(2rem + 86px);
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isDrawerOpen }) =>
    isDrawerOpen ? "translateX(0)" : "translateX(-100%)"};
  width: 80vw;
  z-index: 10;
  @media (max-width: 399px) {
    width: 100%;
  }
  .close-nav {
    text-align: right;
    margin-top: -27px;
    margin-left: auto;

    button {
      background-color: transparent;
      border: 0;
      color: #fff;
    }
  }
  a {
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 767px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`

const Drawer = () => {
  const { isDrawerOpen, isActive, closeDrawer } = useContext(SiteContext)
  return (
    <Container isDrawerOpen={isDrawerOpen}>
      <div className="close-nav">
        <button onClick={closeDrawer}>
          <Close />
        </button>
      </div>
      {isActive === "newReleases" && <NewReleases />}
      {isActive === "shop" && <Shop />}
      {isActive === "resources" && <Resources />}
    </Container>
  )
}

export default Drawer
