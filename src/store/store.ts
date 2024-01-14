import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import bookReducer from './reducers/BooksFetch'
import formReducer from './reducers/FormSubmit'
import bookDescriptionReducer from './reducers/BookDescription'

const rootReducer = combineReducers({
  bookReducer,
  formReducer,
  bookDescriptionReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
