import React from "react"
import { SiteProvider } from "./src/components/context/index.js"

export const wrapRootElement = ({ element }) => (
  <SiteProvider>{element}</SiteProvider>
)

// export const onClientEntry = () => {
//   // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
//   if (!(`IntersectionObserver` in window)) {
//     import(`intersection-observer`)
//     console.log(`# IntersectionObserver is polyfilled!`)
//   }
// }
