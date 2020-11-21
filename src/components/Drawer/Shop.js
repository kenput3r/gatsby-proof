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

const Shop = () => {
  return (
    <Container>
      <Grid>
        <GridItem flex={1}>
          <div class="list-title">For Men</div>
          <nav aria-label="Shop for men">
            <ul>
              <li>
                <Link to="/">Hair</Link>
              </li>
              <li>
                <Link to="/">Beard &amp; Stache</Link>
              </li>
              <li>
                <Link to="/">Shave</Link>
              </li>
              <li>
                <Link to="/">All Men's Grooming</Link>
              </li>
              <li>
                <Link to="/">Apparel</Link>
              </li>
            </ul>
          </nav>
        </GridItem>
        <GridItem flex={1}>
          <div class="list-title">For Women</div>
          <nav aria-label="Shop for women">
            <ul>
              <li>
                <Link to="/">Hair</Link>
              </li>
              <li>
                <Link to="/">Hair Color</Link>
              </li>
              <li>
                <Link to="/">Eye Brows</Link>
              </li>
              <li>
                <Link to="/">Lipsticks</Link>
              </li>
              <li>
                <Link to="/">All Beauty</Link>
              </li>
              <li>
                <Link to="/">Apparel</Link>
              </li>
            </ul>
          </nav>
        </GridItem>
        <GridItem flex={1}>
          <div class="list-title">For Kids</div>
          <nav aria-label="Shop for kids">
            <ul>
              <li>
                <Link to="/">Apparel</Link>
              </li>
              <li>
                <Link to="/">Toys</Link>
              </li>
            </ul>
          </nav>
        </GridItem>
      </Grid>
      <Grid>
        <GridItem flex={1}>
          <div class="list-title">By Category</div>
          <nav aria-label="Shop by category">
            <ul>
              <li>
                <Link to="/">All Products</Link>
              </li>
              <li>
                <Link to="/">Accessories</Link>
              </li>
              <li>
                <Link to="/">Apparel</Link>
              </li>
              <li>
                <Link to="/">Beard &amp; Mustache</Link>
              </li>
              <li>
                <Link to="/">Collectibles</Link>
              </li>
              <li>
                <Link to="/">Combs &amp; Brushes</Link>
              </li>
              <li>
                <Link to="/">Pomades</Link>
              </li>
            </ul>
          </nav>
        </GridItem>
        <GridItem flex={2}>
          <div class="list-title">By Brand</div>
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
              <li>
                <Link to="/">Tres Noir</Link>
              </li>
            </ul>
          </nav>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Shop
