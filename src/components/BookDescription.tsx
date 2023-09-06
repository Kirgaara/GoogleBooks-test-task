import React from 'react'
import { useAppSelector } from '../hooks/redux'

const BookDescription = () => {
  const { image, title, categories, authors, description } = useAppSelector(
    (state) => state.bookDescriptionReducer
  )

  return (
    <div className="book_description">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h2>{categories}</h2>
      <h3>{authors}</h3>
      <h3>{description}</h3>
    </div>
  )
}

export default BookDescription
