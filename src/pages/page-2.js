import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VerticalCarousel from "../components/VerticalCarousel"

const SecondPage = ({ data }) => {
  const slider_data = {
    slides: [
      {
        alt: "Oil Based Pomade can, closed",
        images: {
          preview: data.image1.childImageSharp.fixed,
          thumb: data.image1.childImageSharp.fluid,
          full: "",
        },
      },
      {
        alt: "Barber Holding Oil Based Pomade can, open",
        images: {
          preview: data.image2.childImageSharp.fixed,
          thumb: data.image2.childImageSharp.fluid,
          full: "",
        },
      },
      {
        alt: "A scoop of the Oil Based Pomade",
        images: {
          preview: data.image3.childImageSharp.fixed,
          thumb: data.image3.childImageSharp.fluid,
          full: "",
        },
      },
    ],
  }
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>The slider page</h1>
      <VerticalCarousel data={slider_data.slides} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "oil-based-1.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 500, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
        fluid(maxHeight: 200, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "oil-based-2.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 500, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
        fluid(maxHeight: 200, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "oil-based-3.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 500, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
        fluid(maxHeight: 200, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
