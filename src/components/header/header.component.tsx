import { signOut } from 'firebase/auth'
import { BsCart3 } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// Utilities
import { auth } from '../../config/firebase.config'
import { logoutUser } from '../../store/toolkit/user/user.slice'
import { toggleCart } from '../../store/toolkit/cart/cart.slice'
import { selectProductsCount } from '../../store/reducers/cart/cart.selectors'
import { useAppSelector } from '../../hooks/redux.hooks'

// Styles
import {
  HeadeContainer,
  HeaderItems,
  HeaderItem,
  HeaderTitle
} from './header.styles'

const Header = () => {
  const navigate = useNavigate()

  const { isAuthenticated } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  )
  const dispatch = useDispatch()

  const productsCount = useAppSelector(selectProductsCount)

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSingUpClick = () => {
    navigate('/sign-up')
  }

  const handleExploreClick = () => {
    navigate('/explore')
  }

  const handleSignOutClick = () => {
    dispatch(logoutUser())
    signOut(auth)
  }

  const handleCartClick = () => {
    dispatch(toggleCart())
  }

  return (
    <HeadeContainer>
      <HeaderTitle>E-Commerce</HeaderTitle>

      <HeaderItems>
        <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSingUpClick}>Criar Conta</HeaderItem>
          </>
        )}
        {isAuthenticated && (
          <>
            <HeaderItem onClick={handleSignOutClick}>Sair</HeaderItem>
          </>
        )}
        <HeaderItem onClick={handleCartClick}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>{productsCount}</p>
        </HeaderItem>
      </HeaderItems>
    </HeadeContainer>
  )
}

export default Header
