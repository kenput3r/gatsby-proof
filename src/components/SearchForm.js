import React, { useContext, useState } from "react"
import styled from "styled-components"
import { SiteContext } from "./context"
import { MdSearch as Search } from "react-icons/md"

const Form = styled.form`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 0;
  padding: 5px;

  input[type="search"] {
    background-color: transparent;
    color: #fff;
    border: none;
    border-bottom: 1px solid #fff;
    padding: 2px 5px;
    font-family: NexaRust;
    font-size: 0.75rem;
    &:focus {
      border-bottom: none;
      outline: 3px dashed var(--s-yellow);
    }
  }
  button {
    color: #fff;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
  }
`

const SearchForm = () => {
  const { setSearchQuery, searchFunction, setSearchVisibility } = useContext(
    SiteContext
  )

  const handleChange = event => {
    setSearchQuery(event.target.value)
    if (event.target.value === "" || event.target.value === null) {
      setSearchVisibility(false)
    } else {
      searchFunction()
    }
  }

  return (
    <Form id="AlgoliaSearchForm">
      <input
        type="search"
        placeholder="Search"
        onChange={event => handleChange(event)}
      />
      <button>
        <Search />
      </button>
    </Form>
  )
}

export default SearchForm
