import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import SideScroll from "../SideScroll"

const Section = styled.section`
  border-bottom: 2px solid #000;
  padding-bottom: 20px;
`

const GalleryGrid = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "headshots/image1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "headshots/image2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "headshots/image3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image4: file(relativePath: { eq: "headshots/image4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image5: file(relativePath: { eq: "headshots/image5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image6: file(relativePath: { eq: "headshots/image6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image7: file(relativePath: { eq: "headshots/image7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image8: file(relativePath: { eq: "headshots/image8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image9: file(relativePath: { eq: "headshots/image9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image10: file(relativePath: { eq: "headshots/image10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image11: file(relativePath: { eq: "headshots/image11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image12: file(relativePath: { eq: "headshots/image12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image13: file(relativePath: { eq: "headshots/image13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image14: file(relativePath: { eq: "headshots/image14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image15: file(relativePath: { eq: "headshots/image15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image16: file(relativePath: { eq: "headshots/image16.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image17: file(relativePath: { eq: "headshots/image17.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image18: file(relativePath: { eq: "headshots/image18.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image19: file(relativePath: { eq: "headshots/image19.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image20: file(relativePath: { eq: "headshots/image20.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image21: file(relativePath: { eq: "headshots/image21.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const images = []
  Object.keys(data).map((key, i) => {
    images.push({
      fluid: data[key].childImageSharp.fluid,
      alt: `headshot ${i}`,
    })
  })
  return (
    <Section>
      <SideScroll data={images} />
    </Section>
  )
}

export default GalleryGrid
