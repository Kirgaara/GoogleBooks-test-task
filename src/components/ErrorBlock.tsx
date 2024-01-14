import React from 'react'
import { useAppSelector } from '../hooks/redux'

const ErrorBlock = () => {
  const { error } = useAppSelector((state) => state.bookReducer)

  return (
    <div className="error_block">
      <h1>Error!</h1>
      <h2>{error}</h2>
    </div>
  )
}

export default ErrorBlock
