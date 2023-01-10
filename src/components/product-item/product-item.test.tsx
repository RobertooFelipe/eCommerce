import { renderWithRedux } from '../../helpers/test.helpers'
import ProductItem from './product-item.component'

describe('Product Item', () => {
  it('should show correct product', () => {
    const product = {
      id: '1',
      imageUrl: 'image_url',
      name: 'Camisa',
      price: 100,
      quantity: 10
    }

    const { getByText } = renderWithRedux(<ProductItem product={product} />, {})

    getByText(/camisa/i)
    getByText('R$100')
  })
})
