const endpoint = process.env.GATSBY_ENDPOINT
const token = process.env.GATSBY_STORE_TOKEN
const headers = new Headers({
  "Content-type": "application/json",
  Accept: "application/json",
  "X-Shopify-Storefront-Access-Token": token,
})

export default async function fetchAvailableQty(handle) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query: query(handle) }),
  })
  const response_json = await response.json()
  const {
    variants: { edges },
  } = response_json.data.productByHandle
  return edges
}

const query = handle => `
{
  productByHandle(handle: "${handle}") {
    variants(first: 100) {
      edges {
        node {
          sku
          quantityAvailable
        }
      }
    }
  }
}
`
