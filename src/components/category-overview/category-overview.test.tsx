import { renderWithRedux } from '../../helpers/test.helpers'
import Category from '../../types/category.types'
import CategoryOverview from './category-overview.component'

describe('Category Overview', () => {
  it('should show correct category and its products', () => {
    const category: Category = {
      displayName: 'Lorem ipsum',
      id: '1a',
      imageUrl: 'image_url',
      name: 'lorem ipsum',
      products: [
        {
          id: '1',
          imageUrl: 'image_url',
          name: 'Lorem',
          price: 123
        },
        {
          id: '2',
          imageUrl: 'image_url',
          name: 'Ipsum',
          price: 22
        },
        {
          id: '3',
          imageUrl: 'image_url',
          name: 'Dolor',
          price: 42
        },
        {
          id: '4',
          imageUrl: 'image_url',
          name: 'Sit',
          price: 74
        },
        {
          id: '5',
          imageUrl: 'image_url',
          name: 'Amet',
          price: 160
        }
      ]
    }
    const { getByText, queryByText } = renderWithRedux(
      <CategoryOverview category={category} />,
      {}
    )

    getByText(/Lorem ipsum/i)

    getByText('Lorem')
    getByText('R$123')

    getByText('Ipsum')
    getByText('R$22')

    getByText('Dolor')
    getByText('R$42')

    getByText('Sit')
    getByText('R$160')

    expect(queryByText('Amet')).toBeNull()
  })
})
