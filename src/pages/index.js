import React from "react"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled(BackgroundImage)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
`

const Button = styled(Link)`
  background-color: var(--s-red);
  color: #ffffff;
  display: inline-block;
  border: 0;
  border-radius: 2px;
  box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.3);
  font-family: NexaRust;
  text-transform: uppercase;
  padding: 10px;
  margin-top: 20px;
  margin-right: 20px;
  text-decoration: none;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container
        Tag="div"
        className="container"
        fluid={data.backgroundImage.childImageSharp.fluid}
      >
        <Button to="/products/oil-based-pomade">BUY</Button>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "oil-based-background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
