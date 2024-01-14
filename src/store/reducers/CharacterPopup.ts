import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from '../store'

export const pickCharacter = (character: any) => (dispatch: AppDispatch) => {
  dispatch(characterPopupSlice.actions.pickCharacter(character))
}
export const closePopup = () => (dispatch: AppDispatch) => {
  dispatch(characterPopupSlice.actions.closePopup())
}

interface CharacterPopupState {
  opened: boolean
  image: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: string
  location: string
  created: string
}

const initialState: CharacterPopupState = {
  opened: false,
  image: '',
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: '',
  location: '',
  created: '',
}

export const characterPopupSlice = createSlice({
  name: 'characterPopup',
  initialState,
  reducers: {
    pickCharacter(state, action) {
      state.opened = true
      state.image = action.payload.image
      state.name = action.payload.name
      state.status = action.payload.status
      state.species = action.payload.species
      state.type = action.payload.type
      state.gender = action.payload.gender
      state.origin = action.payload.origin.name
      state.location = action.payload.location.name
      state.created = action.payload.created
    },
    closePopup(state) {
      state.opened = false
      state.image = ''
      state.name = ''
      state.status = ''
      state.species = ''
      state.type = ''
      state.gender = ''
      state.origin = ''
      state.location = ''
      state.created = ''
    },
  },
})

export default characterPopupSlice.reducer
