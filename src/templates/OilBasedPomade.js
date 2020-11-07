import React, { useState, useContext, useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HTML from "../components/HTML"
import StarRating from "../components/starRating"
import fetchCurrentProductData from "../functions/fetchCurrentProductData"

const Container = styled.div`
  padding: 60px;
`
const ProductInfoGrid = styled.div`
  border-bottom: 2px solid #000000;
  display: flex;
  flex-direction: row;
  padding-bottom: 60px;
  width: 100%;

  .grid-item {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  h1 {
    margin-bottom: 0.6rem;
  }

  .description {
    margin-bottom: 1rem;
  }
`
const Button = styled.button`
  background-color: var(--s-red);
  color: #ffffff;
  border: 0;
  border-radius: 2px;
  box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.3);
  font-family: NexaRust;
  text-transform: uppercase;
  padding: 10px;
  margin-left: 10px;
`
const QuantitySelect = styled.select`
  padding: 10px;
`

const OilBasedPomade = ({ data }) => {
  const { shopifyProduct: product } = data
  const [currentData, setCurrentData] = useState({})
  useEffect(() => {
    async function fetchData() {
      const fetchedData = await fetchCurrentProductData(product.handle)
      setCurrentData(fetchedData)
    }
    fetchData()
  }, [product.handle])
  return (
    <Layout>
      <SEO title={product.title} />
      <Container>
        <ProductInfoGrid>
          <div className="grid-item">
            <div style={{ maxWidth: "480px" }}>
              <Img fluid={product.images[0].localFile.childImageSharp.fluid} />
            </div>
          </div>
          <div className="grid-item">
            <div>Hair Products</div>
            <h1>{product.title}</h1>
            <div className="h2">3 OZ (85G)</div>
            <StarRating
              number={currentData.metafields.yotpo.reviews_average}
              reviewsCount={currentData.metafields.yotpo.reviews_count}
            />
            <HTML className="description">{product.description}</HTML>
            <div className="h2">
              ${product.priceRange.minVariantPrice.amount}{" "}
              {product.priceRange.minVariantPrice.currencyCode}
            </div>
            <div>
              <QuantitySelect>
                <option value="1">1</option>
              </QuantitySelect>
              <Button>ADD TO CART</Button>
            </div>
          </div>
        </ProductInfoGrid>
      </Container>
    </Layout>
  )
}

export default OilBasedPomade

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      description
      priceRange {
        minVariantPrice {
          currencyCode
          amount
        }
      }
      metafields {
        id
        key
        namespace
        value
      }
      images {
        id
        altText
        localFile {
          childImageSharp {
            fluid(maxWidth: 2048, jpegProgressive: false) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      variants {
        availableForSale
        compareAtPriceV2 {
          amount
          currencyCode
        }
        id
        image {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 2048, jpegProgressive: false) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
