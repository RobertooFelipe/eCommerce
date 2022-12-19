import { onAuthStateChanged } from 'firebase/auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FunctionComponent, useContext, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'

// Pages
import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.page'
import ExplorePage from './pages/explore/explore.page'
import CheckoutPage from './pages/checkout/checkout.page'
import CategoryDetailsPage from './pages/category-details/category-details.page'

// Utilities
import { auth, db } from './config/firebase.config'
import { UserContext } from './contexts/user.context'

// Components
import Loading from './components/loading/loading.component'
import Cart from './components/cart/cart.component'

const App: FunctionComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true)
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user
    if (isSigningOut) {
      logoutUser()

      return setIsInitializing(true)
    }

    const isSiginigIn = !isAuthenticated && user
    if (isSiginigIn) {
      const querySnapshot = await getDocs(
        query(collection(db, 'users'), where('id', '==', user.uid))
      )

      const userFormFirestore = querySnapshot.docs[0]?.data()
      loginUser(userFormFirestore as any)

      return setIsInitializing(true)
    }

    setIsInitializing(false)
  })

  if (isInitializing) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/category/:id" element={<CategoryDetailsPage />} />
      </Routes>

      <Cart />
    </BrowserRouter>
  )
}

export default App
