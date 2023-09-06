import React, { useState } from 'react'
import { GiArchiveResearch } from 'react-icons/gi'
import { useAppDispatch } from '../hooks/redux'
import {
  inputChange,
  categoryChange,
  sortByChange,
} from '../store/reducers/FormSubmit'
import { closeDescription } from '../store/reducers/BookDescription'

const Header = () => {
  const dispatch = useAppDispatch()

  type SearchParams = {
    input: string
    categories: string
    sortBy: 'relevance' | 'newest'
  }
  const [searchParams, setSearchParams] = useState<SearchParams>({
    input: '',
    categories: 'all',
    sortBy: 'relevance',
  })

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    dispatch(closeDescription())
    dispatch(inputChange(searchParams.input))
    dispatch(categoryChange(searchParams.categories))
    dispatch(sortByChange(searchParams.sortBy))
  }

  return (
    <header className="header">
      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <h1>Search for books</h1>
          <div className="header_row">
            <input
              type="text"
              className="search_input"
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  input: (e.target as HTMLInputElement).value,
                })
              }
            ></input>
            <button type="submit" className="submit_button">
              <GiArchiveResearch className="search_icon" />
            </button>
          </div>
          <div className="header_row">
            <h2>Categories</h2>
            <select
              onChange={(e) =>
                setSearchParams({ ...searchParams, categories: e.target.value })
              }
            >
              <option>all</option>
              <option>art</option>
              <option>biography</option>
              <option>computers</option>
              <option>history</option>
              <option>medical</option>
              <option>poetry</option>
            </select>
            <h2>Sorting by</h2>
            <select
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  sortBy: e.target.value as 'relevance' | 'newest',
                })
              }
            >
              <option>relevance</option>
              <option>newest</option>
            </select>
          </div>
        </form>
      </div>
    </header>
  )
}

export default Header
