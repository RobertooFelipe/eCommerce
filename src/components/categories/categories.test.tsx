import * as firestore from 'firebase/firestore'
import { renderWithRedux } from '../../helpers/test.helpers'
import Categories from './categories.component'
jest.mock('firebase/firestore')

describe('Categories', () => {
  it('should fetch and show categories', async () => {
    const mockedFirestore = firestore as any
    mockedFirestore.getDocs.mockImplementation(() => [
      {
        data() {
          return {
            id: '1',
            displayName: 'Lorem ipsum'
          }
        }
      }
    ])

    mockedFirestore.collection.mockImplementation(() => ({
      withConverter: () => {}
    }))

    const { findByText, getByText } = renderWithRedux(<Categories />, {})

    await findByText('Lorem ipsum')
    getByText(/explorar/i)
  })
})
