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

interface RemoveProductFromCart {
  type: typeof CartActionTypes.removeProductFromCart
  payload: string
}

export const removeProductFromCart = (
  payload: string
): RemoveProductFromCart => ({
  type: CartActionTypes.removeProductFromCart,
  payload
})

interface IncreaseCartProductQuantity {
  type: typeof CartActionTypes.increaseCartProductQuantity
  payload: string
}

export const increaseCartProductQuantity = (
  payload: string
): IncreaseCartProductQuantity => ({
  type: CartActionTypes.increaseCartProductQuantity,
  payload
})

interface DecreaseCartProductQuantity {
  type: typeof CartActionTypes.decreaseCartProductQuantity
  payload: string
}

export const decreaseCartProductQuantity = (
  payload: string
): DecreaseCartProductQuantity => ({
  type: CartActionTypes.decreaseCartProductQuantity,
  payload
})

interface ClearProducts {
  type: typeof CartActionTypes.clearCartProducts
}

export const clearProducts = (): ClearProducts => ({
  type: CartActionTypes.clearCartProducts
})

export type CartActions =
  | ToggleCartAction
  | AddProductToCartAction
  | RemoveProductFromCart
  | IncreaseCartProductQuantity
  | DecreaseCartProductQuantity
  | ClearProducts
