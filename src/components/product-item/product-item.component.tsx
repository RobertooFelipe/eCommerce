import { FunctionComponent } from 'react'

// Styles
import {
  ProductContainer,
  ProductInfo,
  ProductImage
} from './product-item.styles'

// Utilities
import Product from '../../types/products.types'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl} />

      <ProductInfo>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}

export default ProductItem
