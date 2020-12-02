import React, { useEffect, useRef, useContext } from "react"
import styled from "styled-components"
import { SiteContext } from "./context"

// styled components
const Wrapper = styled.div`
  position: relative;

  p {
    margin-bottom: 0;
  }

  .title {
    font-family: NexaRust;
    line-height: 1.4;
  }

  a {
    color: var(--s-red);
  }
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

const SearchResults = () => {
  const {
    searchData,
    setSearchData,
    searchVisibility,
    setSearchVisibility,
    searchFunction,
  } = useContext(SiteContext)

  const defaultData = {
    hits: [],
    hitsPerPage: 0,
    nbHits: 0,
    nbPages: 0,
    page: 0,
  }

  //handle pagination
  const handlePage = page => {
    searchFunction(page)
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
      setSearchData(defaultData)
      document.getElementById("AlgoliaSearchForm").reset()
      setSearchVisibility(false)
    }
  }

  return (
    <div ref={wrapperRef}>
      {searchVisibility && (
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
                    <p className="title">
                      <a href={`https://suavecito.com/products/${hit.handle}`}>
                        {hit.title}
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
                  <a href="#" onClick={() => handlePage(prevPage)} rel="prev">
                    ← Previous Page
                  </a>
                )}
                {Array.from({ length: numPages }, (_, i) => (
                  <a
                    key={`pagination-number${i + 1}`}
                    href="#"
                    onClick={() => handlePage(i + 1)}
                    className={i + 1 === currentPage ? "active" : ""}
                  >
                    {i + 1}
                  </a>
                ))}
                {!isLast && (
                  <a href="#" onClick={() => handlePage(nextPage)} rel="next">
                    Next Page →
                  </a>
                )}
              </Pagination>
            )}
          </FlexGrid>
        </Wrapper>
      )}
      <Clearer />
    </div>
  )
}

export default SearchResults
