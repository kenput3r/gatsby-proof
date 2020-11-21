import React from "react"
import styled from "styled-components"

import mediumHold from "../../images/medium-hold.png"
import highShine from "../../images/high-shine.png"
import oilBased from "../../images/oil-based.png"
import thickHair from "../../images/thick-hair.png"
import wavyHair from "../../images/wavy-hair.png"
import curlyHair from "../../images/curly-hair.png"
import jellyRoll from "../../images/jelly-roll.png"
import pompadour from "../../images/pompadour.png"
import slickback from "../../images/slickback.png"

const Section = styled.section`
  .grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 30px;

    &.space-around {
      justify-content: space-around;
    }

    &.border-bottom {
      border-bottom: 2px solid #000000;
    }
  }

  .grid-item {
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (max-width: 428px) {
      width: 100%;

      &:nth-of-type(1) {
        border-right: none !important;
      }
    }

    &:nth-of-type(1) {
      border-right: 1px solid #000000;
    }

    &.full {
      align-items: center;
      border-right: 0;
      width: 100%;

      .h3 {
        width: 100%;
      }
    }

    &.auto {
      border-right: 0;
      justify-content: flex-end;
      width: auto;

      div {
        text-align: center;
      }

      img {
        margin-bottom: 0;
      }
    }

    .h3 {
      color: var(--s-yellow);
      text-align: center;

      @media (max-width: 428px) {
        padding-top: 20px;
        border-top: 1px solid #000000;
      }
    }
  }
`

const DetailsGrid = () => {
  return (
    <Section>
      <div className="grid">
        <div className="grid-item">
          <div className="h3">THE FACTS</div>
          <div className="grid space-around">
            <div className="grid-item auto">
              <div>
                <img src={mediumHold} alt="Flexing Skeleton Arm" />
              </div>
              <div>Medium Hold</div>
            </div>
            <div className="grid-item auto">
              <div>
                <img src={highShine} alt="Shine sparkles" />
              </div>
              <div>High Shine</div>
            </div>
            <div className="grid-item auto">
              <div>
                <img src={oilBased} alt="Flexing Skeleton Arm" />
              </div>
              <div>Oil Based</div>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="h3">USE FOR</div>
          <div className="grid space-around">
            <div className="grid-item auto">
              <div>
                <img src={thickHair} alt="Three thick straight lines" />
              </div>
              <div>Thick Hair</div>
            </div>
            <div className="grid-item auto">
              <div>
                <img src={wavyHair} alt="Three wavy lines" />
              </div>
              <div>Wavy Hair</div>
            </div>
            <div className="grid-item auto">
              <div>
                <img src={curlyHair} alt="Line wrapping in a swirl" />
              </div>
              <div>Curly Hair</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid border-bottom">
        <div className="grid-item full">
          <div className="h3">SUGGESTED STYLES</div>
          <div className="grid space-around">
            <div className="grid-item auto">
              <div>
                <img
                  src={jellyRoll}
                  alt="Skeleton head with jelly roll style hair"
                />
              </div>
              <div>Jelly Roll</div>
            </div>
            <div className="grid-item auto">
              <div>
                <img
                  src={pompadour}
                  alt="Skeleton head with pompadour style hair"
                />
              </div>
              <div>Pompadour</div>
            </div>
            <div className="grid-item auto">
              <div>
                <img
                  src={slickback}
                  alt="Skeleton head with slickback style hair"
                />
              </div>
              <div>Slickback</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default DetailsGrid
