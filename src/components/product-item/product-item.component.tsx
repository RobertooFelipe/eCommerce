import { FunctionComponent, useContext } from 'react'
import { BsCartPlus } from 'react-icons/bs'

// Styles
import {
  ProductContainer,
  ProductInfo,
  ProductImage
} from './product-item.styles'

// Utilities
import Product from '../../types/products.types'
import CustomButton from '../custom-button/custum-buttom.component'
import { CartContext } from '../../contexts/cart.context'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const { addProductToCart } = useContext(CartContext)

  const handleAddToCartClick = () => {
    addProductToCart(product)
  }

  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleAddToCartClick}>
          Adicionar
        </CustomButton>
      </ProductImage>

      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}

export default ProductItem
