import * as firestore from 'firebase/firestore'
import { renderWithRedux } from '../../helpers/test.helpers'
import Category from '../../types/category.types'
import CategoriesOverview from './categories-overview.component'

jest.mock('firebase/firestore')

describe('Categories Overview', () => {
  it('should fetch and show categories', async () => {
    const mockedFirestore = firestore as any

    mockedFirestore.getDocs.mockImplementation(async () => [
      {
        data(): Category {
          return {
            id: '1',
            displayName: 'Lorem ipsum',
            imageUrl: 'image_url',
            name: 'lorem ipsum',
            products: [
              { id: '1', name: 'boné', price: 100, imageUrl: 'image_url' }
            ]
          }
        }
      }
    ])

    mockedFirestore.collection.mockImplementation(() => ({
      withConverter: () => {}
    }))

    const { getByText, findByText } = renderWithRedux(
      <CategoriesOverview />,
      {}
    )

    await findByText(/boné/i)
    getByText('Lorem ipsum')
    getByText('R$100')
  })
})
