const CartActionTypes = {
  toggleCart: 'cart/toggle' as const,
  addToCart: 'cart/addProduct' as const,
  removeProductFromCart: 'cart/removeProduct' as const,
  increaseCartProductQuantity: 'cart/increaseCartProductQuantity' as const,
  decreaseCartProductQuantity: 'cart/decreaseCartProductQuantity' as const,
  clearCartProducts: 'cart/dclearProducts' as const
}

export default CartActionTypes
