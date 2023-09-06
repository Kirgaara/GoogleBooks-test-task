import React from 'react'
import { useAppSelector } from '../hooks/redux'

const BookDescription = () => {
  const { image, title, categories, authors, description } = useAppSelector(
    (state) => state.bookDescriptionReducer
  )

  return (
    <div className="book_description">
      <img src={image} alt="" id="description_image" />
      <h2 id="description_title">{title}</h2>
      <h3 id="description_categories">{categories}</h3>
      <h3 id="description_authors">{authors}</h3>
      <h3 id="description_description">{description}</h3>
    </div>
  )
}

export default BookDescription
