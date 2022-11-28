import { FunctionComponent } from 'react'
import Category from '../../types/category.types'

// Styles
import {
  CategoryContainer,
  ProductsContainer,
  CategoryTitle
} from './category-overview.styles'

interface CategoryOverviewProps {
  category: Category
}

const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({
  category
}) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>

      <ProductsContainer></ProductsContainer>
    </CategoryContainer>
  )
}

export default CategoryOverview
