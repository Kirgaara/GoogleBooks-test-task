import React from 'react'
import { useAppSelector } from '../hooks/redux'

const ErrorBlock = () => {
  const { error } = useAppSelector((state) => state.charactersReducer)

  return (
    <div>
      <h1>Error!</h1>
      <h2>{error}</h2>
    </div>
  )
}

export default ErrorBlock
