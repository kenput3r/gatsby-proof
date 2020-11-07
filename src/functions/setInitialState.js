export default function setInitialState(data) {
  const metafields = {
    yotpo: {
      reviews_average: 0,
      reviews_count: 0,
    },
  }
  for (let metafield of data.metafields) {
    const namespace = metafield.namespace
    const key = metafield.key
    if (namespace === "yotpo" && key === "reviews_count") {
      metafields.yotpo.reviews_count = metafield.value
    } else if (namespace === "yotpo" && key === "reviews_average") {
      metafields.yotpo.reviews_average = metafield.value
    }
  }
  return metafields
}
