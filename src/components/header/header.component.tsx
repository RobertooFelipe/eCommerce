import { signOut } from 'firebase/auth'
import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebase.config'

import {
  HeadeContainer,
  HeaderItems,
  HeaderItem,
  HeaderTitle
} from './header.styles'

const Header = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSingUpClick = () => {
    navigate('/sign-up')
  }

  return (
    <HeadeContainer>
      <HeaderTitle>E-Commerce</HeaderTitle>

      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
        <HeaderItem onClick={handleSingUpClick}>Criar Conta</HeaderItem>
        <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
        <HeaderItem>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeadeContainer>
  )
}

export default Header
