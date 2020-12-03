import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`
const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  width: 100%;
`
const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => (props.flex ? props.flex : "none")};
  height: 100%;

  nav {
    padding-top: 10px;
    li {
      list-style-type: none;
    }
  }
`

const Resources = () => {
  return (
    <Container>
      <Grid>
        <GridItem flex={1}>
          <div className="list-title">Contact</div>
          <nav aria-label="Contact options">
            <ul>
              <li>
                <Link to="/">For Wholesale Info</Link>
              </li>
              <li>
                <Link to="/">For Help With An Order</Link>
              </li>
              <li>
                <Link to="/">For General Inquiries</Link>
              </li>
              <li>
                <Link to="/">For Personal Data Requests</Link>
              </li>
            </ul>
          </nav>
        </GridItem>
        <GridItem flex={1}>
          <div className="list-title">Product Education</div>
          <nav aria-label="Product Education">
            <ul>
              <li>
                <Link to="/">Educational Videos - Suavecito</Link>
              </li>
              <li>
                <Link to="/">Educational Videos - Suavecita</Link>
              </li>
              <li>
                <Link to="/">Educational Articles</Link>
              </li>
            </ul>
          </nav>
        </GridItem>
        <GridItem flex={1}>
          <div className="list-title">About</div>
          <nav aria-label="About our brands">
            <ul>
              <li>
                <Link to="/">Suavecito</Link>
              </li>
              <li>
                <Link to="/">Suavecita</Link>
              </li>
              <li>
                <Link to="/">Premium Blends</Link>
              </li>
              <li>
                <Link to="/">Firme Club</Link>
              </li>
              <li>
                <Link to="/">Speed Shop</Link>
              </li>
            </ul>
          </nav>
        </GridItem>
      </Grid>
      <Grid>
        <GridItem flex={1}>
          <div className="list-title">Information</div>
          <nav aria-label="General Information">
            <ul>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Rewards Program</Link>
              </li>
              <li>
                <Link to="/">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link to="/">Cookies &amp; Data</Link>
              </li>
            </ul>
          </nav>
        </GridItem>
        <GridItem flex={2}>
          <div className="list-title">Look Books</div>
          <nav aria-label="Shop by brand">
            <ul>
              <li>
                <Link to="/">Suavecito</Link>
              </li>
              <li>
                <Link to="/">Suavecita</Link>
              </li>
              <li>
                <Link to="/">Premium Blends</Link>
              </li>
              <li>
                <Link to="/">Firme Club</Link>
              </li>
              <li>
                <Link to="/">Speed Shop</Link>
              </li>
            </ul>
          </nav>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Resources
