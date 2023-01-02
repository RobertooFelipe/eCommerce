import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import CategoryContextProvider from './contexts/category.context'
import CartContextProvider from './contexts/cart.context'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CategoryContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </CategoryContextProvider>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
