import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from '../store'
import toOneString from '../../utils/ToOneString'

export const storeBook = (book: any) => (dispatch: AppDispatch) => {
  dispatch(bookDescriptionSlice.actions.storeBook(book))
}
export const closeDescription = () => (dispatch: AppDispatch) => {
  dispatch(bookDescriptionSlice.actions.closeDescription())
}

interface BookDescriptionState {
  opened: boolean
  image: string
  title: string
  categories: string
  authors: string
  description: string
}

const initialState: BookDescriptionState = {
  opened: false,
  image: '',
  title: '',
  categories: '',
  authors: '',
  description: '',
}

export const bookDescriptionSlice = createSlice({
  name: 'bookDescription',
  initialState,
  reducers: {
    storeBook(state, action) {
      state.opened = true
      action.payload.imageLinks.thumbnail
        ? (state.image = action.payload.imageLinks.thumbnail)
        : (state.image = '../images/No_Image.png')
      action.payload.title
        ? (state.title = action.payload.title)
        : (state.title = 'no title')
      action.payload.categories
        ? (state.categories = toOneString(action.payload.categories))
        : (state.categories = 'no categories')
      action.payload.authors
        ? (state.authors = toOneString(action.payload.authors))
        : (state.authors = 'no authors')
      action.payload.description
        ? (state.description = action.payload.description)
        : (state.description = 'no description')
    },
    closeDescription(state) {
      state.opened = false
      state.image = ''
      state.title = ''
      state.categories = ''
      state.authors = ''
      state.description = ''
    },
  },
})

export default bookDescriptionSlice.reducer
