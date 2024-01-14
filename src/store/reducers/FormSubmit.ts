import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '../store'

export const inputChange = (input: FormState) => (dispatch: AppDispatch) => {
  dispatch(formSlice.actions.inputChange(input))
}

interface FormState {
  status: string
  gender: string
  name: string
  species: string
  type: string
}

const initialState: FormState = {
  status: '',
  gender: '',
  name: '',
  species: '',
  type: '',
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    inputChange(state, action: PayloadAction<FormState>) {
      state.status = action.payload.status
      state.gender = action.payload.gender
      state.name = action.payload.name
      state.species = action.payload.species
      state.type = action.payload.type
    },
  },
})

export default formSlice.reducer
