import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Colors from '../../theme/theme.colors'
import CustomInput from './custom-input.component'

describe('Custom Input', () => {
  it('should render with erroe if hasError is true', () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="Lorem ipsum" hasError={true} />
    )

    const input = getByPlaceholderText('Lorem ipsum')

    expect(input).toHaveStyle({ border: `2px solid ${Colors.error}` })
  })

  it('should render without error if hasError is false', () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="Lorem ipsum" hasError={false} />
    )

    const input = getByPlaceholderText('Lorem ipsum')

    expect(input).toHaveStyle({ border: 'none' })
  })

  it('shold change value when user types', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <CustomInput placeholder="Lorem ipsum" hasError={false} />
    )

    const input = getByPlaceholderText('Lorem ipsum')

    userEvent.type(input, 'Dolor sit')

    getByDisplayValue('Dolor sit')
  })
})
