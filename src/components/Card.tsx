import React from 'react'
import imgPlaceholder from '../images/No_Image.png'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { storeBook } from '../store/reducers/BookDescription'
import toOneString from '../utils/ToOneString'

const Card = ({ bookPosition }: { bookPosition: number }) => {
  const { books } = useAppSelector((state) => state.bookReducer)
  const dispatch = useAppDispatch()
  return (
    <div
      className="card"
      onClick={() => dispatch(storeBook(books[bookPosition].volumeInfo))}
    >
      {!books.length ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {books[bookPosition].volumeInfo.imageLinks ? (
            <img
              src={books[bookPosition].volumeInfo.imageLinks.thumbnail}
              alt=""
            />
          ) : (
            <img src={imgPlaceholder} alt="" />
          )}
          {books[bookPosition].volumeInfo.categories ? (
            <h3>{books[bookPosition].volumeInfo.categories[0]}</h3>
          ) : null}
          <h2>{books[bookPosition].volumeInfo.title}</h2>
          <h3>{toOneString(books[bookPosition].volumeInfo.authors)}</h3>
        </>
      )}
    </div>
  )
}

export default Card
