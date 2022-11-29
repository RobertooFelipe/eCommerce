import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import UserContextProvider from './contexts/user.context'
import CategoryContextProvider from './contexts/category.context'
import CartContextProvider from './contexts/cart.context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <CategoryContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </CategoryContextProvider>
    </UserContextProvider>
  </React.StrictMode>
)

reportWebVitals()
