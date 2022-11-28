import { FunctionComponent, useContext, useEffect } from 'react'

// Utilities
import { CategoryContext } from '../../contexts/category.context'

// Styles
import { Container } from './categories-overview.styles'

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
        <p key={category.id}>{category.displayName}</p>
      ))}
    </Container>
  )
}

export default CategoriesOverview
