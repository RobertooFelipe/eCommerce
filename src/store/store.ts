import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
// @ts-expect-error
import storage from 'redux-persist/lib/storage'
// @ts-expect-error
import persistReducer from 'redux-persist/es/persistReducer'
// @ts-expect-error
import persistStore from 'redux-persist/es/persistStore'

import rootReducer from './root-reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer']
}

const persistRootReducer: typeof rootReducer = persistReducer(
  persistConfig,
  rootReducer
)

export const store = configureStore({
  reducer: persistRootReducer,
  middleware: [thunk, logger]
})

export const persitedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
