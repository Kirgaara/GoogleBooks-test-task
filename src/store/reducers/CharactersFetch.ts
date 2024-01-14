import axios from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '../store'

export const charactersFetch =
  (
    page: number,
    status: string,
    gender: string,
    name: string,
    species: string,
    type: string
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(charactersSlice.actions.charactersFetching())
      let URL = `https://rickandmortyapi.com/api/character/?page=${page}`
      if (status) {
        URL += `&status=${status}`
      }
      if (gender) {
        URL += `&gender=${gender}`
      }
      if (name) {
        URL += `&name=${name}`
      }
      if (species) {
        URL += `&species=${species}`
      }
      if (type) {
        URL += `&type=${type}`
      }
      const response = await axios.get(URL)
      if (page === 1) {
        dispatch(
          charactersSlice.actions.charactersFetchingSuccess(response.data)
        )
      } else {
        dispatch(charactersSlice.actions.charactersLoadMore(response.data))
      }
    } catch (e) {
      if (e instanceof Error) {
        if (e.message === 'Request failed with status code 404') {
          dispatch(charactersSlice.actions.charactersNotFound())
        } else {
          dispatch(charactersSlice.actions.charactersFetchingError(e.message))
        }
      }
    }
  }

interface CharactersState {
  characters: any
  isLoading: boolean
  error: string
}

const initialState: CharactersState = {
  characters: '',
  isLoading: false,
  error: '',
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    charactersFetching(state) {
      state.isLoading = true
    },
    charactersFetchingSuccess(state, action) {
      state.isLoading = false
      state.error = ''
      state.characters = action.payload.results
    },
    charactersLoadMore(state, action) {
      state.isLoading = false
      state.error = ''
      state.characters = [...state.characters, ...action.payload.results]
    },
    charactersNotFound(state) {
      state.isLoading = false
      state.error = 'There are no characters under those filters'
      state.characters = ''
    },
    charactersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default charactersSlice.reducer
