import { FunctionComponent, useContext, useEffect } from 'react'

// Utilities
import { CategoryContext } from '../../contexts/category.context'

// Styles
import { Container } from './categories-overview.styles'

// Components
import CategoryOverview from '../category-overview/category-overview.component'

const CategoriesOverview: FunctionComponent = () => {
  const { categories, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])

  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </Container>
  )
}

export default CategoriesOverview
