import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog"
import "swiper/swiper-bundle.min.css"

const Wrapper = styled.div`
  .swiper-container {
    padding-left: 20px;
    padding-right: 20px;

    a:hover {
      cursor: pointer;
    }

    a:focus {
      outline: 3px dashed var(--s-yellow);
    }
  }
  .gatsby-image-wrapper {
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
  }
  .swiper-button-next,
  .swiper-button-prev {
    ::after {
      color: #000;
    }
  }
  .swiper-button-prev {
    margin-left: -10px;
  }
  .swiper-button-next {
    margin-right: -10px;
  }
  .swiper-slide-active {
    &::before {
      content: "";
      z-index: 1;
      position: absolute;
      width: 30%;
      height: 100%;
      pointer-events: none;
      top: 0;
      background: linear-gradient(90deg, #fff 0%, hsla(0, 0%, 100%, 0) 100%);
    }
  }
  .swiper-slide-last-visible {
    &::after {
      content: "";
      z-index: 1;
      position: absolute;
      width: 30%;
      height: 100%;
      pointer-events: none;
      top: 0;
      right: 0;
      background: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0%, #fff 100%);
    }
  }
  .swiper-slide {
    @media (max-width: 428px) {
      &::before {
        content: "";
        z-index: 1;
        position: absolute;
        width: 5%;
        height: 100%;
        pointer-events: none;
        top: 0;
        background: linear-gradient(90deg, #fff 0%, hsla(0, 0%, 100%, 0) 100%);
      }

      &::after {
        content: "";
        z-index: 1;
        position: absolute;
        width: 5%;
        height: 100%;
        pointer-events: none;
        top: 0;
        right: 0;
        background: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0%, #fff 100%);
      }
    }
  }

  [data-reach-dialog-overlay] {
    z-index: 2;
  }
`
const CloseDialog = styled.button`
  margin-top: 5px;
  margin-left: 3px;
  border: 0;
  background-color: var(--s-red);
  color: #fff;
`

SwiperCore.use([Navigation])

const SideScroll = ({ data }) => {
  const [lastVisible, setLastVisible] = useState(3)
  const [accessibleRange, setAccessibleRange] = useState([0, 3])
  const [showDialog, setShowDialog] = useState(false)
  const [dialogImage, setDialogImage] = useState({})
  const updateLastVisibleClass = () => {
    const slides = document.getElementsByClassName("swiper-slide-visible")
    const firstIndex = parseInt(slides[0].dataset.swiperSlideIndex)
    const lastIndex = parseInt(
      slides[slides.length - 1].dataset.swiperSlideIndex
    )
    for (let slide of slides) {
      slide.classList.remove("swiper-slide-last-visible")
      //slide.querySelector("a").removeAttribute("tabindex")
    }
    setLastVisible(lastIndex)
    setAccessibleRange([firstIndex, lastIndex])
  }
  const handleOpen = image => {
    setDialogImage(image)
    setShowDialog(true)
  }
  const handleClose = () => setShowDialog(false)
  const breakpoints = {
    428: {
      slidesPerView: 4,
    },
  }
  return (
    <Wrapper>
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={21}
        navigation
        watchSlidesVisibility
        onTransitionStart={updateLastVisibleClass}
        breakpoints={breakpoints}
      >
        {data.map((image, i) => (
          <SwiperSlide
            key={`image${i}`}
            className={lastVisible === i ? "swiper-slide-last-visible" : ""}
          >
            <a
              className="open-full"
              role="button"
              tabIndex={
                i >= accessibleRange[0] && i <= accessibleRange[1] ? "0" : ""
              }
              onClick={() => handleOpen(image)}
            >
              <Img fluid={image.fluid} alt={image.alt} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <Dialog isOpen={showDialog} aria-label="picture">
        <Img fluid={dialogImage.fluid} alt={dialogImage.alt} />
        <CloseDialog onClick={handleClose}>Close</CloseDialog>
      </Dialog>
    </Wrapper>
  )
}

export default SideScroll
