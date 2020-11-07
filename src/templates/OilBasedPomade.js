import React, { useState, useContext, useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HTML from "../components/HTML"
import StarRating from "../components/starRating"
import fetchCurrentProductData from "../functions/fetchCurrentProductData"
import setInitialState from "../functions/setInitialState"

import mediumHold from "../images/medium-hold.png"
import highShine from "../images/high-shine.png"
import oilBased from "../images/oil-based.png"
import thickHair from "../images/thick-hair.png"
import wavyHair from "../images/wavy-hair.png"
import curlyHair from "../images/curly-hair.png"
import jellyRoll from "../images/jelly-roll.png"
import pompadour from "../images/pompadour.png"
import slickback from "../images/slickback.png"

const Container = styled.div`
  padding: 60px;
`
const ProductInfoGrid = styled.div`
  border-bottom: 2px solid #000000;
  display: flex;
  flex-direction: row;
  padding-bottom: 60px;
  margin-bottom: 30px;
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
const ProductDetailsGrid = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  width: 100%;

  .tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 30px;
    width: 100%;
    button {
      background-color: #ffffff;
      border: 0;
      border-radius: 3px;
      display: inline-block;
      padding: 5px 7px;
      &.active {
        background-color: var(--s-red);
        color: #ffffff;
      }
    }
  }

  .grid {
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;

    &.space-around {
      justify-content: space-around;
    }

    &.border-bottom {
      border-bottom: 2px solid #000000;
    }
  }

  .grid-item {
    display: flex;
    flex-direction: column;
    width: 50%;

    &:nth-of-type(1) {
      border-right: 1px solid #000000;
    }

    &.full {
      align-items: center;
      border-right: 0;
      width: 100%;
    }

    &.auto {
      border-right: 0;
      justify-content: flex-end;
      width: auto;

      div {
        text-align: center;
      }

      img {
        margin-bottom: 0;
      }
    }

    .h3 {
      color: var(--s-yellow);
      text-align: center;
    }
  }
`
const OilBasedPomade = ({ data }) => {
  const { shopifyProduct: product } = data
  const initialData = { metafields: setInitialState(product) }
  const [currentData, setCurrentData] = useState(initialData)
  const [isActive, setIsActive] = useState("details")
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
            <div>
              <Img fixed={data.image2.childImageSharp.fixed} />
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
        <ProductDetailsGrid>
          <div className="tabs">
            <button className={`h2 ${isActive === "details" ? "active" : ""}`}>
              DETAILS
            </button>
            <button className={`h2 ${isActive === "use" ? "active" : ""}`}>
              HOW TO USE
            </button>
            <button className={`h2 ${isActive === "gallery" ? "active" : ""}`}>
              GALLERY
            </button>
            <button className={`h2 ${isActive === "compare" ? "active" : ""}`}>
              COMPARE
            </button>
            <button className={`h2 ${isActive === "reviews" ? "active" : ""}`}>
              REVIEWS
            </button>
          </div>
          <div className="grid">
            <div className="grid-item">
              <div className="h3">THE FACTS</div>
              <div className="grid space-around">
                <div className="grid-item auto">
                  <div>
                    <img src={mediumHold} alt="Flexing Skeleton Arm" />
                  </div>
                  <div>Medium Hold</div>
                </div>
                <div className="grid-item auto">
                  <div>
                    <img src={highShine} alt="Shine sparkles" />
                  </div>
                  <div>High Shine</div>
                </div>
                <div className="grid-item auto">
                  <div>
                    <img src={oilBased} alt="Flexing Skeleton Arm" />
                  </div>
                  <div>Oil Based</div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="h3">USE FOR</div>
              <div className="grid space-around">
                <div className="grid-item auto">
                  <div>
                    <img src={thickHair} alt="Three thick straight lines" />
                  </div>
                  <div>Thick Hair</div>
                </div>
                <div className="grid-item auto">
                  <div>
                    <img src={wavyHair} alt="Three wavy lines" />
                  </div>
                  <div>Wavy Hair</div>
                </div>
                <div className="grid-item auto">
                  <div>
                    <img src={curlyHair} alt="Line wrapping in a swirl" />
                  </div>
                  <div>Curly Hair</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid border-bottom">
            <div className="grid-item full">
              <div className="h3">SUGGESTED STYLES</div>
              <div className="grid space-around">
                <div className="grid-item auto">
                  <div>
                    <img
                      src={jellyRoll}
                      alt="Skeleton head with jelly roll style hair"
                    />
                  </div>
                  <div>Jelly Roll</div>
                </div>
                <div className="grid-item auto">
                  <div>
                    <img
                      src={pompadour}
                      alt="Skeleton head with pompadour style hair"
                    />
                  </div>
                  <div>Pompadour</div>
                </div>
                <div className="grid-item auto">
                  <div>
                    <img
                      src={slickback}
                      alt="Skeleton head with slickback style hair"
                    />
                  </div>
                  <div>Slickback</div>
                </div>
              </div>
            </div>
          </div>
        </ProductDetailsGrid>
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
    image1: file(relativePath: { eq: "oil-based-1.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 500, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image2: file(relativePath: { eq: "oil-based-2.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 500, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image3: file(relativePath: { eq: "oil-based-3.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 500, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
