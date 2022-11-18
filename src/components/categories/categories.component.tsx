import { useEffect, useState } from 'react'
import axios from 'axios'

// Components
import CategoryItem from '../category-item/category-item.component'

// Styles
import './categories.styles.css'

// Utilities
import env from '../../config/env.config'
import Category from '../../types/category.types'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCaterogies = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)

      setCategories(data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log({ categories })

  useEffect(() => {
    fetchCaterogies()
  }, [])

  return (
    <div className="categories-container">
      <div className="categories-content">
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
