import CartProduct from '../../../types/cart.types'
import CartActionTypes from './cart.action-types'
import { CartActions } from './cart.actions'

interface InitialState {
  isVisible: boolean
  productsTotalPrice: number
  productsCount: number
  products: CartProduct[]
}

const initialState: InitialState = {
  isVisible: false,
  productsTotalPrice: 0,
  productsCount: 0,
  products: []
}

const cartReducer = (
  state = initialState,
  action: CartActions
): InitialState => {
  switch (action.type) {
    case CartActionTypes.toggleCart:
      return { ...state, isVisible: !state.isVisible }

    case CartActionTypes.addToCart: {
      const product = action.payload

      const productAlreadyInCart = state.products.some(
        (item) => item.id === product.id
      )

      if (productAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }

      return {
        ...state,
        products: [...state.products, { ...product, quantity: 1 }]
      }
    }
    default:
      return { ...state }
  }
}

export default cartReducer
