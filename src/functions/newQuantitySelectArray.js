export default function newQuantitySelectArray(
  qtyAvailable,
  setQtyAvailableArray
) {
  const arr = []
  if (qtyAvailable < 1) {
    setQtyAvailableArray(arr)
  } else {
    for (let i = 1; i <= qtyAvailable && i <= 30; i++) {
      arr.push(i)
    }
    setQtyAvailableArray(arr)
  }
}
