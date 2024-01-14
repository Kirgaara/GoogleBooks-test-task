import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import charactersReducer from './reducers/CharactersFetch'
import formReducer from './reducers/FormSubmit'
import characterPopupReducer from './reducers/CharacterPopup'

const rootReducer = combineReducers({
  charactersReducer,
  formReducer,
  characterPopupReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
