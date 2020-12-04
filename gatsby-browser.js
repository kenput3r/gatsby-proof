import React from "react"
import { SiteProvider } from "./src/components/context/index.js"

export const wrapRootElement = ({ element }) => (
  <SiteProvider>{element}</SiteProvider>
)
