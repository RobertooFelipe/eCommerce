import { FunctionComponent, InputHTMLAttributes } from 'react'

// Styles
import { InputErrorMessageContainer } from './input-error-message.styles'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputErrorMessage: FunctionComponent<CustomInputProps> = ({
  children
}) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}

export default InputErrorMessage
