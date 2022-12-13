import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'

// Utilities
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item.component'

// Components
import CustomButton from '../custom-button/custum-buttom.component'

// Styles
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './cart.styles'

const Cart: FunctionComponent = () => {
  const { isVisible, products, toggleCart, productsTotalPrice, productsCount } =
    useContext(CartContext)

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        {productsCount > 0 && (
          <>
            <CartTotal>Total: R${productsTotalPrice}</CartTotal>
            <CustomButton startIcon={<BsCartCheck />}>
              Ir para o Checkout
            </CustomButton>
          </>
        )}
        {productsCount === 0 && <p>Ainda não há itens no seu carrinho :(</p>}
      </CartContent>
    </CartContainer>
  )
}

export default Cart
