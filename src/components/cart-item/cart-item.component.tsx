import { FunctionComponent } from 'react'

// Utilites
import CartProduct from '../../types/cart.types'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'

// Styles
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './cart-item.styles'
import { useDispatch } from 'react-redux'
import {
  decreaseCartProductQuantity,
  increaseCartProductQuantity,
  removeProductFromCart
} from '../../store/toolkit/cart/cart.slice'

interface CartItemProps {
  product: CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleRemoveClick = () => {
    dispatch(removeProductFromCart(product.id))
  }

  const handleIncreaseClick = () => {
    dispatch(increaseCartProductQuantity(product.id))
  }

  const handleDecreaseClick = () => {
    dispatch(decreaseCartProductQuantity(product.id))
  }

  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus
            size={20}
            onClick={handleDecreaseClick}
            aria-label={`Decrease quantity of ${product.name}`}
          />
          <p>{product.quantity}</p>
          <AiOutlinePlus
            size={20}
            onClick={handleIncreaseClick}
            aria-label={`Increase quantity of ${product.name}`}
          />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton
        onClick={handleRemoveClick}
        aria-label={`Remove ${product.name}`}>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
