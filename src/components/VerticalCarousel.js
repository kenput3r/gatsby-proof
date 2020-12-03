import React, { useState } from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import cn from "classnames"
import { BsChevronUp as Prev, BsChevronDown as Next } from "react-icons/bs"
import styled from "styled-components"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"

const Container = styled.div``

const Carousel = styled.div`
  max-width: 640px;
  margin: auto;
  display: flex;
  overflow: hidden;

  > div {
    flex: 1;
    padding: 10px;
  }

  button {
    cursor: pointer;
  }

  .carousel-wrapper {
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 0;
    p,
    .carousel-item {
      font-weight: 700;
      font-size: 20px;
      color: #fff;
      line-height: 1.3;
      height: 200px;
      width: 100%;

      .gatsby-image-wrapper {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

  .content {
    background: #fff;
    flex: 3;
    padding: 3px;

    .preview-image {
      background-color: transparent;
      border: 0;
      width: 100%;
      height: 100%;
      padding: 0;
    }

    .gatsby-image-wrapper {
      &[style] {
        width: 100% !important;
        height: 100% !important;
      }
    }
  }

  .carousel {
    height: 100%;
    display: flex;
    flex: 5;
    align-items: center;
    color: #fff;
  }

  .slides {
    align-self: flex-start;
    flex: 1;
    width: 100%;
    overflow: hidden;
  }

  .carousel-inner {
    position: relative;
    max-height: 100%;
    height: 500px;

    &::before,
    &::after {
      content: "";
      z-index: 1;
      position: absolute;
      width: 100%;
      height: 110px;
      pointer-events: none;
    }

    &::before {
      top: 0;
      background: linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, #fff 100%);
    }

    &::after {
      bottom: 0;
      background: linear-gradient(0deg, #fff 0%, hsla(0, 0%, 100%, 0) 100%);
    }
  }

  .carousel-item {
    position: absolute;
    background: none;
    border: none;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    padding: 0;
    margin: 0;
    top: 112px;
    transition: transform 0.4s ease, opacity 0.4s ease;
  }
`
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 640px;
  width: 100%;
  margin: 0 auto;

  .button-container {
    flex: 1;
    text-align: center;

    .carousel-button {
      background-color: transparent;
      border: 0;
      display: flex;
      align-self: center;
      padding: 0 10px;
      max-width: 50px;
      margin: 0 auto;
      :hover {
        cursor: pointer;
      }

      &.prev {
        margin-bottom: 3px;
      }

      &.next {
        margin-top: 3px;
      }

      svg {
        height: 26px;
        width: 26px;
      }

      path {
        fill: #000;
      }
    }
  }

  .spacer {
    flex: 3;
  }
`
const CloseDialog = styled.button`
  margin-top: 5px;
  margin-left: 3px;
  border: 0;
  background-color: var(--s-red);
  color: #fff;
`

const VerticalCarousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showDialog, setShowDialog] = useState(false)
  const halfwayIndex = Math.ceil(data.length / 2)
  const itemHeight = 200
  const shuffleThreshold = halfwayIndex * itemHeight

  const handleClick = direction => {
    setActiveIndex(prevIndex => {
      if (direction === "next") {
        if (prevIndex + 1 > data.length - 1) {
          return 0
        }
        return prevIndex + 1
      }

      if (prevIndex - 1 < 0) {
        return data.length - 1
      }

      return prevIndex - 1
    })
    return
  }

  const determinePlacement = itemIndex => {
    // Position item in the center of list
    if (activeIndex === itemIndex) return 0
    // Targeting items in the second part of the list
    if (itemIndex >= halfwayIndex) {
      // If moving backwards from index 0 to the last item, move the value downwards
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight
      } else {
        // Negative value moves upwards towards the top of the list
        return -(data.length + activeIndex - itemIndex) * itemHeight
      }
    }
    // Spacing for items after the current index
    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight
    }
    // Spacing for items before the current index
    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight
      }
      return -(activeIndex - itemIndex) * itemHeight
    }
  }

  const openDialog = () => setShowDialog(true)
  const closeDialog = () => setShowDialog(false)

  return (
    <Container>
      <ButtonBox>
        <div className="button-container">
          <button
            type="button"
            className="carousel-button prev"
            onClick={() => handleClick("prev")}
          >
            <Prev />
          </button>
        </div>
        <div className="spacer"></div>
      </ButtonBox>
      <Carousel>
        <div className="carousel-wrapper">
          <div className="carousel">
            <div className="slides">
              <div className="carousel-inner">
                {data.map((item, i) => (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={cn("carousel-item", {
                      active: activeIndex === i,
                    })}
                    key={"image" + i}
                    style={{
                      transform: `translateY(${determinePlacement(i)}px)`,
                    }}
                  >
                    <Img fixed={item.images.preview} alt={item.alt} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <button className="preview-image" onClick={openDialog}>
            <Img
              fixed={data[activeIndex].images.preview}
              alt={data[activeIndex].alt}
            />
          </button>
        </div>
      </Carousel>
      <ButtonBox>
        <div className="button-container">
          <button
            type="button"
            className="carousel-button next"
            onClick={() => handleClick("next")}
          >
            <Next />
          </button>
        </div>
        <div className="spacer"></div>
      </ButtonBox>
      <Dialog isOpen={showDialog} aria-label="picture">
        <Img
          fluid={data[activeIndex].images.full}
          alt={data[activeIndex].alt}
        />
        <CloseDialog onClick={closeDialog}>Close</CloseDialog>
      </Dialog>
    </Container>
  )
}

VerticalCarousel.propTypes = {
  data: PropTypes.array.isRequired,
}

export default VerticalCarousel
