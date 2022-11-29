import Product from './products.types'

interface CartProduct extends Product {
  quantity: number
}

export default CartProduct
