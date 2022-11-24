import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validate from 'validator'
import {
  AuthError,
  createUserWithEmailAndPassword,
  AuthErrorCodes
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

// Components
import CustomButton from '../../components/custom-button/custum-buttom.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import Header from '../../components/header/header.component'
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'

// Style
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './sign-up.styles'

// Utilities
import { auth, db } from '../../config/firebase.config'

interface SignUpForm {
  fistName: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
}

const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    watch,
    setError,
    handleSubmit
  } = useForm<SignUpForm>()

  const watchPassword = watch('password')

  const handleSubmitPress = async (data: any) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        fisrtName: data.fistName,
        lastName: data.lastName,
        email: userCredentials.user.email
      })
    } catch (error) {
      const _error = error as AuthError

      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError('email', { type: 'alreadyInUse' })
      }
    }
  }

  return (
    <>
      <Header />

      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Cria sua conta</SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              hasError={!!errors?.fistName}
              placeholder="Digite seu nome"
              {...register('fistName', { required: true })}
            />

            {errors?.fistName?.type === 'required' && (
              <InputErrorMessage>O nome é obrigatório</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              hasError={!!errors?.lastName}
              placeholder="Digite seu sobrenome"
              {...register('lastName', { required: true })}
            />

            {errors?.lastName?.type === 'required' && (
              <InputErrorMessage>O sobrenome é obrigatório</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors.email}
              placeholder="Digite seu e-mail"
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validate.isEmail(value)
                }
              })}
            />

            {errors?.email?.type === 'required' && (
              <InputErrorMessage>O e-mail é obrigatório</InputErrorMessage>
            )}
            {errors?.email?.type === 'alreadyInUse' && (
              <InputErrorMessage>Este e-mail já esta em uso</InputErrorMessage>
            )}
            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>
                Por favor, digite um e-mail válido
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors.password}
              placeholder="Digite sua senha"
              type="password"
              {...register('password', { required: true, minLength: 6 })}
            />

            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatório</InputErrorMessage>
            )}
            {errors?.password?.type === 'minLength' && (
              <InputErrorMessage>
                A senha deve ter no mínimo 6 caracteres
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirme sua senha</p>
            <CustomInput
              hasError={!!errors.passwordConfirmation}
              placeholder="Confirme sua senha"
              type="password"
              {...register('passwordConfirmation', {
                required: true,
                minLength: 6,
                validate: (value) => {
                  return value === watchPassword
                }
              })}
            />

            {errors?.passwordConfirmation?.type === 'required' && (
              <InputErrorMessage>
                A confirmação de senha é obrigatória
              </InputErrorMessage>
            )}
            {errors?.passwordConfirmation?.type === 'validate' && (
              <InputErrorMessage>As senhas não batem</InputErrorMessage>
            )}
            {errors?.passwordConfirmation?.type === 'minLength' && (
              <InputErrorMessage>
                A senha deve ter no mínimo 6 caracteres
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <CustomButton
            onClick={() => handleSubmit(handleSubmitPress)()}
            startIcon={<FiLogIn size={18} />}>
            Criar conta
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}

export default SignUpPage
