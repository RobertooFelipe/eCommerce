import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
// @ts-expect-error
import { PersistGate } from 'redux-persist/integration/react'

import CategoryContextProvider from './contexts/category.context'
import { store, persitedStore } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persitedStore}>
        <CategoryContextProvider>
          <App />
        </CategoryContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
