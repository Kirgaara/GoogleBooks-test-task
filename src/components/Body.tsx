import React, { useEffect, useState } from 'react'
import '../styles/Content.css'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import Card from './Card'
import { booksFetch } from '../store/reducers/BooksFetch'
import BookDescription from './BookDescription'
import ErrorBlock from './ErrorBlock'

const Body = () => {
  const dispatch = useAppDispatch()
  const [counter, setCounter] = useState<number>(30)
  const { isLoading, error, books, booksTotal } = useAppSelector(
    (state) => state.bookReducer
  )
  const { search_input, category, sortBy } = useAppSelector(
    (state) => state.formReducer
  )
  const { opened } = useAppSelector((state) => state.bookDescriptionReducer)

  useEffect(() => {
    dispatch(booksFetch(search_input, category, sortBy, 0))
    setCounter(30)
  }, [category, dispatch, search_input, sortBy])

  return opened ? (
    <BookDescription />
  ) : (
    <>
      {!!booksTotal && !isLoading && !error && (
        <div className="counter">Found {booksTotal} results</div>
      )}
      {isLoading && <div className="loader"></div>}
      {error ? (
        <ErrorBlock />
      ) : (
        <div className="content">
          <>
            {!!books.length &&
              !isLoading &&
              books?.map((value: string, index: number) => (
                <Card key={index} bookPosition={index} />
              ))}
          </>
        </div>
      )}
      {!!booksTotal && !isLoading && !error && (
        <button
          className="load"
          onClick={() => {
            dispatch(booksFetch(search_input, category, sortBy, counter))
            setCounter(counter + 30)
          }}
        >
          Load more
        </button>
      )}
    </>
  )
}

export default Body
