import { onAuthStateChanged } from 'firebase/auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FunctionComponent, useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'

// Pages
import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.page'
import ExplorePage from './pages/explore/explore.page'
import CheckoutPage from './pages/checkout/checkout.page'
import CategoryDetailsPage from './pages/category-details/category-details.page'
import PaymentConfirmationPage from './pages/payment-confirmation/payment-confirmation.page'

// Utilities
import { auth, db } from './config/firebase.config'
import { loginUser, logoutUser } from './store/reducers/user/user.actions'
import { userConverter } from './converters/firestore.converters'

// Components
import AuthtenticationGuard from './guards/authtentication.guard'
import Loading from './components/loading/loading.component'
import Cart from './components/cart/cart.component'

const App: FunctionComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true)

  const dispatch = useDispatch()

  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const isSigningOut = isAuthenticated && !user

      if (isSigningOut) {
        dispatch(logoutUser())

        return setIsInitializing(false)
      }

      const isSiginigIn = !isAuthenticated && user

      if (isSiginigIn) {
        const querySnapshot = await getDocs(
          query(
            collection(db, 'users').withConverter(userConverter),
            where('id', '==', user.uid)
          )
        )

        const userFromFirestore = querySnapshot.docs[0]?.data()

        dispatch(loginUser(userFromFirestore))

        return setIsInitializing(false)
      }

      setIsInitializing(false)
    })
  }, [dispatch])

  if (isInitializing) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route
          path="/checkout"
          element={
            <AuthtenticationGuard>
              <CheckoutPage />
            </AuthtenticationGuard>
          }
        />
        <Route path="/category/:id" element={<CategoryDetailsPage />} />
        <Route
          path="/payment-confirmation"
          element={<PaymentConfirmationPage />}
        />
      </Routes>

      <Cart />
    </BrowserRouter>
  )
}

export default App
