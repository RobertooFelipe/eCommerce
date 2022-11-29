import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'

// Components
import Header from '../../components/header/header.component'
import CategoryDetails from '../../components/category-details/category-details.component'

const CategoryDetailsPage: FunctionComponent = () => {
  const { id } = useParams()

  if (!id) return null

  return (
    <>
      <Header />
      <CategoryDetails categoryId={id} />
    </>
  )
}

export default CategoryDetailsPage
