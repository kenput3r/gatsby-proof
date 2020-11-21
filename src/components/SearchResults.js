import React, { useState, useEffect, useRef, useContext } from "react"
import styled from "styled-components"
import SiteContext from "./context/"

// styled components
const Wrapper = styled.div`
  position: relative;
`
const FlexGrid = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  width: 100%;
  background-color: #fff;
  color: #000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1000;
  border: 1px solid #000;
`
const FlexItem = styled.div`
  flex: 25% 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  text-align: left;
  font-size: 12px;
  padding: 10px;
  box-sizing: border-box;
  @media (max-width: 800px) {
    flex: 100% 0;
  }
`
const Pagination = styled.div`
  flex: 100% 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  text-align: left;
  font-size: 12px;
  padding: 10px;
  box-sizing: border-box;
  @media (max-width: 800px) {
    flex: 100% 0;
  }
  a {
    padding: 7px;
    box-sizing: border-box;
    text-decoration: none;
  }
  hr {
    color: #000;
    width: 100%;
  }
`
const ProductImg = styled.div`
  flex: 30% 0;
  img {
    width: 100%;
  }
`
const ProductInfo = styled.div`
  flex: 70% 0;
  padding: 5px;
  box-sizing: border-box;
  a {
    text-decoration: none;
  }
`
const Clearer = styled.div`
  clear: both;
`

const Search = () => {
  const { searchData, setSearchData } = useContext(SiteContext)
  const defaultData = {
    hits: [],
    hitsPerPage: 0,
    nbHits: 0,
    nbPages: 0,
    page: 0,
  }

  // state
  const [query, setQuery] = useState(null)
  const [visibility, setVisibility] = useState(false)

  // handle input change
  const handleChange = event => {
    setQuery(event.target.value)
    search(event.target.value)
  }

  // handle pagination
  const handlePage = (query, page) => {
    search(query, page)
  }
  // pagination vars
  const currentPage = searchData.page
  const numPages = searchData.nbPages
  const isFirst = currentPage === 0
  const isLast = currentPage + 1 === numPages
  const prevPage = currentPage === 0 ? 0 : currentPage - 1
  const nextPage = currentPage + 1

  // display price range
  const price = (min, max) => {
    if (min !== max) {
      return `$${min} - $${max}`
    } else {
      return `$${min}`
    }
  }

  // algolia search
  const search = async (query, page) => {
    const response = await fetch(
      "https://81AQ1JJ6IF-dsn.algolia.net/1/indexes/shopify_products/query",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "X-Algolia-Application-Id": "81AQ1JJ6IF",
          "X-Algolia-API-Key": "7b66384f9802b4fa12be15e8da9db51f", // search only api key
        },
        body: JSON.stringify({ query, hitsPerPage: 8, page: page ? page : 0 }),
      }
    )
    const data = await response.json()
    setSearchData(data)
    setVisibility(true)
  }

  // handle click outside
  const wrapperRef = useRef(null)
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false)
    return () => {
      document.removeEventListener("click", handleClickOutside, false)
    }
  }, [])

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setData(defaultData)
      document.getElementById("search").reset()
      setVisibility(false)
    }
  }

  const renderSearchResults = () => {
    if (visibility) {
      return (
        <Wrapper>
          <FlexGrid>
            {searchData.hits.length > 0 &&
              searchData.hits.map(hit => (
                // Result
                <FlexItem key={hit.id}>
                  <ProductImg>
                    <img src={hit.image} alt={hit.title} />
                  </ProductImg>
                  <ProductInfo>
                    <p>
                      <a href={`https://suavecito.com/products/${hit.handle}`}>
                        <b>{hit.title}</b>
                      </a>
                    </p>
                    <p>by {hit.vendor}</p>
                    <p>
                      {price(hit.variants_min_price, hit.variants_max_price)}
                    </p>
                  </ProductInfo>
                </FlexItem>
                // Result
              ))}
            {searchData.hits.length > 0 && (
              <Pagination>
                <hr />
                {!isFirst && (
                  <a
                    href="#"
                    onClick={() => handlePage(query, prevPage)}
                    rel="prev"
                  >
                    ← Previous Page
                  </a>
                )}
                {Array.from({ length: numPages }, (_, i) => (
                  <a
                    key={`pagination-number${i + 1}`}
                    href="#"
                    onClick={() => handlePage(query, i + 1)}
                    className={i + 1 === currentPage ? "active" : ""}
                  >
                    {i + 1}
                  </a>
                ))}
                {!isLast && (
                  <a
                    href="#"
                    onClick={() => handlePage(query, nextPage)}
                    rel="next"
                  >
                    Next Page →
                  </a>
                )}
              </Pagination>
            )}
          </FlexGrid>
        </Wrapper>
      )
    }
  }

  return (
    <div ref={wrapperRef}>
      <form id="search">
        <input type="text" onChange={handleChange} placeholder="Search..." />
      </form>
      {renderSearchResults()}
      <Clearer />
    </div>
  )
}

export default Search
