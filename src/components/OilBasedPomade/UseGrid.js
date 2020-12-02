import React from "react"
import styled from "styled-components"
import Video from "../Video"
import suavecitoSkeleton from "../../images/suavecito-skeleton.png"
import talkBubble from "../../images/talk-bubble.png"

const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  border-bottom: 2px solid #000;

  .col {
    display: flex;
    flex-direction: column;
    flex: 1;
    &.full {
      @media (max-width: 428px) {
        flex: none;
        width: 100%;
      }
    }
  }

  .row {
    display: flex;
    flex-direction: row;
    flex: 1;
  }

  span {
    font-weight: bold;
    font-family: NexaRust;
  }

  img {
    margin-bottom: 0;
    margin-top: auto;
  }

  .talk-bubble {
    background-image: url(${talkBubble});
    background-size: 100% 100%;
    font-size: 14px;
    line-height: 1.2;
    padding: 10px 5px 25px 10px;
    margin-left: -35px;

    @media (max-width: 428px) {
      margin-left: -25px;
      margin-bottom: 50px;
    }
    span {
      color: var(--s-yellow);
    }
  }
`

const UseGrid = () => {
  return (
    <Section>
      <div className="col full">
        <p>
          <span>DIRECTIONS:</span> Start with a small amount and work into hair
          evenly. Style and add more as needed. Comb to perfection. Good job,
          you now look amazing.
        </p>
        <div className="row" style={{ paddingRight: 10 }}>
          <div className="col">
            <img src={suavecitoSkeleton} alt="The Suavecito Skeleton" />
          </div>
          <div className="col" style={{ paddingTop: 20 }}>
            <p className="talk-bubble">
              <span>STYLING TIP:</span>
              <br />
              Use a thin layer as a topper over one of our water-based pomades
              to add extra shine. Perfect for all the classics.
            </p>
          </div>
        </div>
      </div>
      <div className="col full" style={{ padding: "5px 0px 10px 5px" }}>
        <Video
          src="https://www.youtube.com/embed/pvd1JScceh4"
          title="How to use oil based pomade"
        />
      </div>
    </Section>
  )
}

export default UseGrid
