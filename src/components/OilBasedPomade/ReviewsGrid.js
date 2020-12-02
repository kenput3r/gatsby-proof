import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { BsChevronDown } from "react-icons/bs"
import StarRating from "../starRating"

const Section = styled.section`
  .wrapper {
    width: 320px;
    max-width: 100%;
    margin: 0 auto 1.45rem;
  }
  h3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0;
    span {
      color: var(--s-yellow);
    }
    small {
      font-family: Arial, Helvetica, sans-serif;
      font-weight: normal;
    }
  }
  .star-row {
    margin-bottom: 10px;
  }
  .bar-container {
    border: 1px solid #000;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .featured-review {
    text-align: center;
    h4 {
      color: var(--s-yellow);
      margin-bottom: 0;
    }
  }
  .more-reviews {
    h6 {
      color: var(--s-red);
      text-align: center;
    }
  }
  .reviews {
    height: 200px;
    overflow-y: scroll;
  }
  .review {
    margin-bottom: 1.45rem;
    p {
      margin-bottom: 0;
    }
    .footer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    span {
      display: inline-block;
      padding: 5px;
    }
    ::after {
      border-bottom: 1px solid #000;
      content: "";
      display: table;
      margin: 0 auto;
      width: 80%;
    }
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => (props.flex ? props.flex : 1)};
`
const StarBar = styled.div`
  background-color: var(--s-yellow);
  height: 100%;
  width: ${props => (props.percentage ? props.percentage : 0)}%;
`
const Button = styled.button`
  background-color: var(--s-red);
  color: #ffffff;
  border: 0;
  border-radius: 2px;
  box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.3);
  font-family: NexaRust;
  text-transform: uppercase;
  padding: 10px;
`

const getLegacyId = async id => {
  const url = `https://api.suavecito.com/api/shopify/retail/product/legacy-id`
  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  })
  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ id }),
  })
  const response_json = await response.json()
  return response_json
}

const getReviews = async url => {
  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  })
  const data = await fetch(url, { headers: headers })
  const reviews = await data.json()
  console.log(reviews)
  return reviews.response
}

const ReviewsGrid = ({ product_id, reviewsState, setReviewsState }) => {
  const [legacyId, setLegacyId] = useState(null)
  const [page, setPage] = useState(1)
  const app_key = "q7EYKyLuCq4wDQ7s0M36GkawfE2I4JDL9gg4wvGY"
  const url = `https://api.yotpo.com/v1/widget/${app_key}/products/${legacyId}/reviews.json?page=${page}&per_page=24`
  useEffect(() => {
    ;(async () => {
      const legacy_id = await getLegacyId(product_id)
      setLegacyId(legacy_id.data.product.legacyResourceId)
      if (legacyId !== null && !reviewsState.bottomline.total_review) {
        const reviews = await getReviews(url)
        setReviewsState(reviews)
      }
    })()
  }, [legacyId])
  const { bottomline, pagenation, reviews } = reviewsState
  return (
    <Section>
      <Row>
        <Col>
          <div className="wrapper">
            <h3>
              <span>{bottomline.average_score.toPrecision(2)}</span>{" "}
              <StarRating number={bottomline.average_score} />{" "}
              <small>{bottomline.total_review} Reviews</small>
            </h3>
          </div>
          <div className="wrapper">
            <Row className="star-row">
              <Col>5 Star</Col>
              <Col flex={3}>
                <div className="bar-container">
                  <StarBar
                    percentage={
                      (bottomline.star_distribution[5] /
                        bottomline.total_review) *
                      100
                    }
                  />
                </div>
              </Col>
            </Row>
            <Row className="star-row">
              <Col>4 Star</Col>
              <Col flex={3}>
                <div className="bar-container">
                  <StarBar
                    percentage={
                      (bottomline.star_distribution[4] /
                        bottomline.total_review) *
                      100
                    }
                  />
                </div>
              </Col>
            </Row>
            <Row className="star-row">
              <Col>3 Star</Col>
              <Col flex={3}>
                <div className="bar-container">
                  <StarBar
                    percentage={
                      (bottomline.star_distribution[3] /
                        bottomline.total_review) *
                      100
                    }
                  />
                </div>
              </Col>
            </Row>
            <Row className="star-row">
              <Col>2 Star</Col>
              <Col flex={3}>
                <div className="bar-container">
                  <StarBar
                    percentage={
                      (bottomline.star_distribution[2] /
                        bottomline.total_review) *
                      100
                    }
                  />
                </div>
              </Col>
            </Row>
            <Row className="star-row">
              <Col>1 Star</Col>
              <Col flex={3}>
                <div className="bar-container">
                  <StarBar
                    percentage={
                      (bottomline.star_distribution[1] /
                        bottomline.total_review) *
                      100
                    }
                  />
                </div>
              </Col>
            </Row>
          </div>
          <Row className="wrapper">
            <Col></Col>
            <Col flex={3}>
              <Button>WRITE A REVIEW</Button>
            </Col>
          </Row>
        </Col>
        <Col>
          <div className="featured-review">
            <h4>0 STARS</h4>
            <div>
              <StarRating number={0} />
            </div>
            <p>
              "A featured review - something good we would pin to the top of
              this page!"
            </p>
          </div>
          <div className="more-reviews">
            <h6>
              MORE REVIEWS <BsChevronDown />
            </h6>
            <div className="reviews">
              {reviewsState.reviews.map(review => (
                <div className="review" key={review.id}>
                  <p>{review.content}</p>
                  <div className="footer">
                    <StarRating number={review.score} />
                    <span>{review.user.display_name}</span>
                    <span>{new Date(review.created_at).toDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Section>
  )
}

export default ReviewsGrid
