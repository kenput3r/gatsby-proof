import React from "react"
import styled from "styled-components"

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;

  iframe,
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Video = ({ src, title }) => {
  return (
    <VideoWrapper>
      <iframe
        title={title}
        width="1920"
        height="1080"
        src={src + "?rel=0"}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </VideoWrapper>
  )
}

export default Video
