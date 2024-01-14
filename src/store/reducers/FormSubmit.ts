import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '../store'

export const inputChange = (input: string) => (dispatch: AppDispatch) => {
  dispatch(formSlice.actions.inputChange(input))
}
export const categoryChange = (input: string) => (dispatch: AppDispatch) => {
  dispatch(formSlice.actions.categoryChange(input))
}
export const sortByChange =
  (input: 'relevance' | 'newest') => (dispatch: AppDispatch) => {
    dispatch(formSlice.actions.sortByChange(input))
  }

interface FormState {
  search_input: string
  category: string
  sortBy: 'relevance' | 'newest'
}

const initialState: FormState = {
  search_input: '',
  category: 'all',
  sortBy: 'relevance',
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    inputChange(state, action: PayloadAction<string>) {
      state.search_input = action.payload
    },
    categoryChange(state, action: PayloadAction<string>) {
      state.category = action.payload
    },
    sortByChange(state, action: PayloadAction<'relevance' | 'newest'>) {
      state.sortBy = action.payload
    },
  },
})

export default formSlice.reducer
