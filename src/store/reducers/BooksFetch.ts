import axios from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '../store'

export const booksFetch =
  (
    search: string,
    category: string,
    order: 'newest' | 'relevance',
    startIndex: number
  ) =>
  async (dispatch: AppDispatch) => {
    if (search)
      try {
        dispatch(bookSlice.actions.bookFetching())
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}${
            category !== 'all' ? `+subject:${category}` : ''
          }&maxResults=30&startIndex=${startIndex}&orderBy=${order}&key=AIzaSyCLDqt2nXteLKjlvIYjHCfMvLnLLk4vu4g`
        )
        if (startIndex === 0) {
          dispatch(bookSlice.actions.bookFetchingSuccess(response.data))
        } else {
          dispatch(bookSlice.actions.bookLoadMore(response.data))
        }
      } catch (e) {
        if (e instanceof Error) {
          dispatch(bookSlice.actions.bookFetchingError(e.message))
        }
      }
  }

interface BookState {
  books: any
  booksTotal: number
  isLoading: boolean
  error: string
}

const initialState: BookState = {
  books: {},
  booksTotal: 0,
  isLoading: false,
  error: '',
}

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookFetching(state) {
      state.isLoading = true
    },
    bookFetchingSuccess(state, action) {
      state.isLoading = false
      state.error = ''
      state.booksTotal = action.payload.totalItems
      state.books = action.payload.items
    },
    bookLoadMore(state, action) {
      state.isLoading = false
      state.error = ''
      state.books = [...state.books, ...action.payload.items]
    },
    bookFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default bookSlice.reducer
