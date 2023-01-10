import userEvent from '@testing-library/user-event'
import { renderWithRedux } from '../../helpers/test.helpers'
import SignUpPage from './sign-up.page'

jest.mock('firebase/auth')

describe('Sign Up', () => {
  it('should show error when trying to submit without filling all required fields', async () => {
    const { getByText, findByText } = renderWithRedux(<SignUpPage />, {})

    const submitButton = getByText('Criar conta', { selector: 'button' })

    userEvent.click(submitButton)

    await findByText(/O nome é obrigatório/i)
    getByText(/o sobrenome é obrigatório/i)
    getByText(/o e-mail é obrigatório/i)
    getByText(/a senha é obrigatória/i)
    getByText(/a confirmação de senha é obrigatória/i)
  })
})
