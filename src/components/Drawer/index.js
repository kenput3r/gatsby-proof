import React, { useContext } from "react"
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
  @media (max-width: 991px) {
    overflow-y: scroll;
  }
  .close-nav {
    text-align: right;
    margin-top: -27px;
    margin-left: auto;

    @media (max-width: 991px) {
      margin-top: 30px;
      margin-bottom: 30px;
      button.close-drawer {
        position: absolute;
        margin-top: -80px;
        margin-left: -20px;
        padding: 10px;

        svg {
          width: 30px;
          height: 30px;
        }
      }
    }

    button {
      background-color: transparent;
      border: 0;
      color: #fff;
      &.active {
        border-bottom: 2px solid #fff;
      }
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
  .mobile-tabs {
    @media (min-width: 992px) {
      display: none;
    }
  }
`

const Drawer = () => {
  const { isDrawerOpen, isActive, setIsActive, closeDrawer } = useContext(
    SiteContext
  )
  return (
    <Container isDrawerOpen={isDrawerOpen}>
      <div className="close-nav">
        <div className="mobile-tabs">
          <button
            onClick={() => setIsActive("shop")}
            className={isActive === "shop" ? "active" : ""}
            title="Shop menu"
          >
            SHOP
          </button>{" "}
          |{" "}
          <button
            onClick={() => setIsActive("newReleases")}
            className={isActive === "newReleases" ? "active" : ""}
            title="New releases menu"
          >
            NEW
          </button>{" "}
          |
          <button
            onClick={() => setIsActive("resources")}
            className={isActive === "resources" ? "active" : ""}
            title="Resources menu"
          >
            RESOURCES
          </button>
        </div>
        <button className="close-drawer" onClick={closeDrawer} title="close">
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
