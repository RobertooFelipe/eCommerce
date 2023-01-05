import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CategoryItem from './category-item.component'

describe('Category Item', () => {
  it('should render category correctly', () => {
    const category = {
      id: '1',
      displayName: 'Lorem ipsum',
      imageUrl: 'image_url',
      name: 'lorem-ipsum',
      products: []
    }

    const { getByText } = render(
      <BrowserRouter>
        <CategoryItem category={category} />
      </BrowserRouter>
    )

    getByText('Lorem ipsum')
    getByText('Explorar')
  })
})
