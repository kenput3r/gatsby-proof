import React, { createContext, useState, useEffect } from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  domain: "suavecito.myshopify.com",
  storefrontAccessToken: process.env.GATSBY_STORE_TOKEN,
})

const isBrowser = typeof window !== "undefined"

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
  const [isActive, setIsActive] = useState("shop")
  const [searchData, setSearchData] = useState(defaultData)
  const [searchQuery, setSearchQuery] = useState(null)
  const [searchVisibility, setSearchVisibility] = useState(false)
  const [checkout, setCheckout] = useState({})
  const closeDrawer = () => {
    setIsDrawerOpen(false)
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

  /**
   * @function getCheckoutCookie - gets the current non-expired chechout cookie
   */
  const getCheckoutCookie = () => {
    const name = "shopifyCheckout="
    const decodedDocumentCookie = decodeURIComponent(document.cookie)
    const cookies = decodedDocumentCookie.split(";")
    for (let cookie of cookies) {
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1)
      }
      if (cookie.indexOf(name) === 0) {
        cookie = cookie.substring(name.length, cookie.length)
        return cookie
      }
    }
    return null
  }

  /**
   * @function getNewCheckout - creates a new Shopify checkout
   * and sets the shopifyCheckout cookie (Shopify checkout ID)
   */
  const getNewCheckout = async () => {
    try {
      const newCheckout = await client.checkout.create()
      if (isBrowser) {
        document.cookie = `shopifyCheckout=${newCheckout.id};max-age=2592000`
      }
      return newCheckout
    } catch (e) {
      console.error(e)
    }
  }

  /**
   * @function addProductToCart - Adds product to the current checkout
   * @param {String} variantId - shopifyId
   * @param {Int} quantity - quantity
   */
  const addProductToCart = async (variantId, quantity) => {
    try {
      const line_items = [
        {
          variantId,
          quantity,
        },
      ]
      const updatedCheckout = await client.checkout.addLineItems(
        checkout.id,
        line_items
      )
      console.log(updatedCheckout)
      setCheckout(updatedCheckout)
    } catch (e) {
      console.error(e)
    }
  }

  /**
   * @function removeProductFromCart - removes a line item from the current checkout
   * @param {String} lineItemId the ID of the line item to remove
   */
  const removeProductFromCart = async lineItemId => {
    try {
      const updatedCheckout = await client.checkout.removeLineItems(
        checkout.id,
        [lineItemId]
      )
      setCheckout(updatedCheckout)
    } catch (e) {
      console.error(e)
    }
  }

  /**
   * @function addDiscountCode - adds a discount code the the current checkout
   * @param {String} code - the code to add
   */
  const addDiscountCode = async code => {
    try {
      const updatedCheckout = await client.checkout.addDiscount(
        checkout.id,
        code
      )
      setCheckout(updatedCheckout)
    } catch (e) {
      console.error(e)
    }
  }

  /**
   * @function removeDiscountCode - removes a discount code from the current checkout
   * @param {String} code - the code to remove
   */
  const removeDiscountCode = async code => {
    try {
      const updatedCheckout = await client.checkout.removeDiscount(
        checkout.id,
        code
      )
      setCheckout(updatedCheckout)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    /**
     * @function initializeCheckout - fetches current or creates new Shopify checkout
     * sets checkout [setCheckout]
     */
    const initializeCheckout = async () => {
      try {
        //Check if checkout exists
        const checkoutId = isBrowser ? getCheckoutCookie() : null
        let checkout = null
        //if Checkout exists, fetch it from Shopify
        if (checkoutId) {
          checkout = await client.checkout.fetch(checkoutId)
          if (checkout.completedAt) {
            checkout = await getNewCheckout()
          }
          //if no Checkout exists, create a new one
        } else {
          checkout = await getNewCheckout()
        }
        setCheckout(checkout)
      } catch (e) {
        console.error(e)
      }
    }
    initializeCheckout()
  })

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
        checkout,
        addProductToCart,
        removeProductFromCart,
        addDiscountCode,
        removeDiscountCode,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}
