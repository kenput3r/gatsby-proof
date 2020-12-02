import React, { createContext, useState } from "react"

export const SiteContext = createContext({})

export const SiteProvider = ({ children }) => {
  const defaultData = {
    hits: [],
    hitsPerPage: 0,
    nbHits: 0,
    nbPages: 0,
    page: 0,
  }
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isActive, setIsActive] = useState("")
  const [searchData, setSearchData] = useState(defaultData)
  const [searchQuery, setSearchQuery] = useState(null)
  const [searchVisibility, setSearchVisibility] = useState(false)
  const closeDrawer = () => {
    setIsDrawerOpen(false)
    setTimeout(() => {
      setIsActive("")
    }, 500)
  }
  const searchFunction = async page => {
    const response = await fetch(
      "https://81AQ1JJ6IF-dsn.algolia.net/1/indexes/shopify_products/query",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "X-Algolia-Application-Id": "81AQ1JJ6IF",
          "X-Algolia-API-Key": "7b66384f9802b4fa12be15e8da9db51f", // search only api key
        },
        body: JSON.stringify({
          query: searchQuery,
          hitsPerPage: 8,
          page: page ? page : 0,
        }),
      }
    )
    const data = await response.json()
    setSearchData(data)
    setSearchVisibility(true)
  }
  return (
    <SiteContext.Provider
      value={{
        isDrawerOpen,
        setIsDrawerOpen,
        isActive,
        setIsActive,
        closeDrawer,
        searchData,
        setSearchData,
        searchQuery,
        setSearchQuery,
        searchVisibility,
        setSearchVisibility,
        searchFunction,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}
