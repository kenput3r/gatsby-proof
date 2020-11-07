import React from "react"
import styled from "styled-components"
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"

const StarStyles = styled.div`
  color: var(--s-yellow);
  svg {
    margin: 2px;
  }
  a {
    color: var(--s-yellow);
    display: inline-block;
    padding: 5px;
  }
`

const starRating = ({ number, reviewsCount }) => {
  const fullStars = []
  const emptyStars = []
  const emptyStarCount = 5 - number >= 1 ? 5 - number : 0
  const hasHalfStar = number % 1 > 0 ? true : false
  for (let i = 0; i < Math.floor(number); i++) {
    fullStars.push(i)
  }
  for (let i = 0; i < emptyStarCount; i++) {
    emptyStars.push(i)
  }
  return (
    <StarStyles>
      {fullStars.map(star => (
        <BsStarFill key={"full" + star} />
      ))}
      {hasHalfStar && <BsStarHalf />}
      {emptyStars.map(star => (
        <BsStar key={"empty" + star} />
      ))}
      <a href="/">{reviewsCount} Reviews</a>
    </StarStyles>
  )
}

export default starRating
