export default function setInitialState(data) {
  const metafields = {
    yotpo: {
      reviews_average: 0,
      reviews_count: 0,
    },
  }
  const variants = {}
  for (let metafield of data.metafields) {
    const namespace = metafield.namespace
    const key = metafield.key
    if (namespace === "yotpo" && key === "reviews_count") {
      metafields.yotpo.reviews_count = metafield.value
    } else if (namespace === "yotpo" && key === "reviews_average") {
      metafields.yotpo.reviews_average = metafield.value
    }
  }
  for (let variant of data.variants) {
    const sku = variant.sku
    const quantityAvailable = variant.availableForSale ? 30 : 0
    variants[sku] = { quantityAvailable }
  }
  return { metafields, variants }
}
