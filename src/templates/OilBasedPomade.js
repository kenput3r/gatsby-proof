import React, { useState, useEffect, useContext } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import { SiteContext } from "../components/context/index.js"
import SEO from "../components/seo"
import HTML from "../components/HTML"
import StarRating from "../components/starRating"
import fetchCurrentProductData from "../functions/fetchCurrentProductData"
import setInitialState from "../functions/setInitialState"
import newQuantitySelectArray from "../functions/newQuantitySelectArray"
import VerticalCarousel from "../components/VerticalCarousel"
import DetailsGrid from "../components/OilBasedPomade/DetailsGrid"
import ReviewsGrid from "../components/OilBasedPomade/ReviewsGrid"
import CompareGrid from "../components/OilBasedPomade/CompareGrid"
import GalleryGrid from "../components/OilBasedPomade/GalleryGrid"
import UseGrid from "../components/OilBasedPomade/UseGrid"

const description =
  "It’s finally here. Suavecito Oil Based Pomade has been long-requested by those who want a pliable, but long-lasting hold with an old school feel. Three simple ingredients expertly blended together to create a pomade that will help you achieve your perfect look. This Oil Based Pomade provides a healthy shine and a controlled hold on any hair type. Use it on even the most unruly, thick hair to achieve your desired style - from a smooth slickback to a perfect pomp. We already know what your next question is, and yes, this has our original Suavecito scent."

const Container = styled.div`
  padding: 0px 60px 30px;
  max-width: 1218px;
  margin: 0 auto;

  @media (max-width: 1217px) {
    max-width: 100vw;
  }

  @media (max-width: 428px) {
    padding: 10px;
  }

  .star-container {
    display: flex;
    align-items: center;
    a {
      color: var(--s-yellow);
      display: inline-block;
      padding: 5px;
    }
  }
`
const ProductInfoGrid = styled.div`
  border-bottom: 2px solid #000000;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 60px;
  margin-bottom: 30px;
  width: 100%;

  .grid-item {
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (max-width: 428px) {
      width: 100%;
    }

    &.product-text {
      padding: 20px;
    }
  }

  h1 {
    margin-bottom: 0.6rem;
  }

  .description {
    margin-bottom: 1rem;
    font-size: 14px;
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
  min-width: 63px;
`
const GridWrapper = styled.div`
  //height: 600px;
  //overflow-y: scroll;

  /* @media (max-width: 428px) {
    height: auto;
    overflow-y: visible;
  } */
`
const ProductDetailsGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .tabs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 30px;
    margin-top: 3px;
    width: 100%;
    button {
      background-color: #ffffff;
      border: 0;
      color: var(--s-red);
      border-radius: 3px;
      display: inline-block;
      padding: 5px 7px;
      &.active {
        background-color: var(--s-red);
        color: #ffffff;
        &:hover {
          outline: 3px dashed var(--s-yellow);
        }
      }
      &:hover {
        cursor: pointer;
        outline: 3px dashed var(--s-red);
      }
    }
  }
`
const defaultReviewsObject = {
  bottomline: {
    average_score: 0,
    star_distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    total_review: 0,
  },
  pagination: {},
  reviews: [],
}

const OilBasedPomade = ({ data }) => {
  const { shopifyProduct: product } = data
  const { addProductToCart } = useContext(SiteContext)
  const initialData = setInitialState(product)
  const [currentData, setCurrentData] = useState(initialData)
  const [isActive, setIsActive] = useState("details")
  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const [quantityAvailable, setQuantityAvailable] = useState([1])
  const [reviewsObject, setReviewsObject] = useState(defaultReviewsObject)
  const selectedVariant = product.variants[0].sku
  const selectedId = product.variants[0].shopifyId
  useEffect(() => {
    async function fetchData() {
      const fetchedData = await fetchCurrentProductData(product.handle)
      setCurrentData(fetchedData)
      newQuantitySelectArray(
        fetchedData.variants[selectedVariant].quantityAvailable,
        setQuantityAvailable
      )
    }
    fetchData()
  }, [product.handle, selectedVariant])

  const slider_data = {
    slides: [
      {
        alt: "Oil Based Pomade can, closed",
        images: {
          preview: data.image1.childImageSharp.fixed,
          full: data.image1.childImageSharp.fluid,
        },
      },
      {
        alt: "Barber Holding Oil Based Pomade can, open",
        images: {
          preview: data.image2.childImageSharp.fixed,
          full: data.image2.childImageSharp.fluid,
        },
      },
      {
        alt: "A scoop of the Oil Based Pomade",
        images: {
          preview: data.image3.childImageSharp.fixed,
          full: data.image3.childImageSharp.fluid,
        },
      },
    ],
  }

  return (
    <Layout>
      <SEO title={product.title} />
      <Container>
        <ProductInfoGrid>
          <div className="grid-item">
            <VerticalCarousel data={slider_data.slides} />
          </div>
          <div className="grid-item product-text">
            <div>Hair Products</div>
            <h1>{product.title}</h1>
            <div className="h2">3 OZ (85G)</div>
            <div className="star-container">
              <StarRating
                number={currentData.metafields.yotpo.reviews_average}
              />
              <a href="/">
                {currentData.metafields.yotpo.reviews_count} Reviews
              </a>
            </div>
            <HTML className="description">{description}</HTML>
            <div className="h2">
              ${product.priceRange.minVariantPrice.amount}{" "}
              {product.priceRange.minVariantPrice.currencyCode}
            </div>
            <div>
              <QuantitySelect
                onChange={e => setSelectedQuantity(parseInt(e.target.value))}
                title="Quantity"
              >
                {quantityAvailable.map(value => (
                  <option value={value} key={`qtysel` + value}>
                    {value}
                  </option>
                ))}
              </QuantitySelect>
              <Button
                onClick={() => addProductToCart(selectedId, selectedQuantity)}
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </ProductInfoGrid>
        <ProductDetailsGrid>
          <div className="tabs">
            <button
              className={`h2 ${isActive === "details" ? "active" : ""}`}
              onClick={() => {
                setIsActive("details")
              }}
            >
              DETAILS
            </button>
            <button
              className={`h2 ${isActive === "use" ? "active" : ""}`}
              onClick={() => {
                setIsActive("use")
              }}
            >
              HOW TO USE
            </button>
            <button
              className={`h2 ${isActive === "gallery" ? "active" : ""}`}
              onClick={() => {
                setIsActive("gallery")
              }}
            >
              GALLERY
            </button>
            <button
              className={`h2 ${isActive === "compare" ? "active" : ""}`}
              onClick={() => {
                setIsActive("compare")
              }}
            >
              COMPARE
            </button>
            <button
              className={`h2 ${isActive === "reviews" ? "active" : ""}`}
              onClick={() => {
                setIsActive("reviews")
              }}
            >
              REVIEWS
            </button>
          </div>
          <GridWrapper>
            {isActive === "details" && <DetailsGrid />}
            {isActive === "use" && <UseGrid />}
            {isActive === "gallery" && <GalleryGrid />}
            {isActive === "compare" && <CompareGrid />}
            {isActive === "reviews" && (
              <ReviewsGrid
                product_id={product.shopifyId}
                reviewsState={reviewsObject}
                setReviewsState={setReviewsObject}
              />
            )}
          </GridWrapper>
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
      shopifyId
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
        sku
        shopifyId
      }
    }
    image1: file(relativePath: { eq: "oil-based-1.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 500, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "oil-based-2.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 500, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "oil-based-3.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 500, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
