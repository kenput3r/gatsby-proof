import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
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

  &.main {
    height: 100%;
  }
`
const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => (props.flex ? props.flex : "none")};
  height: 100%;

  &.featured {
    border-right: 1px solid #fff;
    padding-right: 2rem;

    .gatsby-image-wrapper {
      border: 4px solid #fff;
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  &.offset-fix {
    padding-left: 1rem;
    &:nth-of-type(1) {
      margin-left: -1rem;
    }
  }

  .nav-title {
    border-bottom: 1px solid #fff;
    padding: 5px;
    font-size: 0.8rem;
  }

  nav {
    padding-top: 10px;
    li {
      list-style-type: none;
    }
  }
`

const NewReleases = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "back-to-the-future.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "suavecito-for-president.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 320) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "wwe.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 320) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Grid className="main">
        <GridItem flex={3} className="featured">
          <Grid>
            <Img
              fluid={data.image1.childImageSharp.fluid}
              alt="Suavecito X Back To The Future"
            />
          </Grid>
          <Grid>
            <GridItem flex={1} className="offset-fix">
              <Img
                fluid={data.image2.childImageSharp.fluid}
                alt="Suavecito For President"
              />
            </GridItem>
            <GridItem flex={1} className="offset-fix">
              <Img
                fluid={data.image3.childImageSharp.fluid}
                alt="Suavecito X WWE"
              />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem flex={2} className="links">
          <div className="nav-title">
            <Link to="/">&rarr; Shop All New Releases</Link>
          </div>
          <nav aria-label="New products by category">
            <ul>
              <li>
                <Link to="/">For Men</Link>
              </li>
              <li>
                <Link to="/">For Women</Link>
              </li>
              <li>
                <Link to="/">For Kids</Link>
              </li>
              <li>
                <Link to="/">For Hair</Link>
              </li>
              <li>
                <Link to="/">For Face</Link>
              </li>
              <li>
                <Link to="/">For Body</Link>
              </li>
            </ul>
          </nav>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default NewReleases
