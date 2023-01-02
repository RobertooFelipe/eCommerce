import Product from '../../../types/products.types'
import CartActionTypes from './cart.action-types'

interface ToggleCartAction {
  type: typeof CartActionTypes.toggleCart
}

export const toggleCart = (): ToggleCartAction => ({
  type: CartActionTypes.toggleCart
})

interface AddProductToCartAction {
  type: typeof CartActionTypes.addToCart
  payload: Product
}

export const addProductToCart = (payload: Product): AddProductToCartAction => ({
  type: CartActionTypes.addToCart,
  payload
})

export type CartActions = ToggleCartAction | AddProductToCartAction
