/**
 * Used for converting stringified HTML into
 * rendered HTML
 */
import React from "react"

const HTML = props => {
  function createMarkup() {
    return { __html: props.children }
  }
  return (
    <div className={props.className} dangerouslySetInnerHTML={createMarkup()} />
  )
}

export default HTML
