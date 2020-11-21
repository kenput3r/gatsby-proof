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
  const closeDrawer = () => {
    setIsDrawerOpen(false)
    setTimeout(() => {
      setIsActive("")
    }, 500)
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
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}
