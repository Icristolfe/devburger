import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Burguer from '../../assets/burguer.svg'
import Logo from '../../assets/logo.svg'
import Button from '../../components/Button/index.js'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api.js'
import {
  Container,
  BurgerImage,
  ContainerItens,
  Label,
  Input,
  SignUpLink,
  ErrorMessage
} from './styles'

function Login() {
  const navigate = useNavigate()

  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('digite um e-mail válido')
      .required('o e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter no mínimo 6 digitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja Bem Vindo(a)',
        error: 'Verifique seu email e senha'
      }
    )

    putUserData(data)

    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  return (
    <Container>
      <BurgerImage src={Burguer} alt="burguer-image" />

      <ContainerItens>
        <div>
          <img src={Logo} alt="logo-devburguer" />
          <h1>Login</h1>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label>Email</Label>
            <Input
              type="email"
              {...register('email')}
              error={errors.email?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label>Senha</Label>
            <Input
              type="password"
              {...register('password')}
              error={errors.email?.message}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Button
              type="submit"
              style={{
                marginTop: 75,
                marginBottom: 25
              }}
            >
              Login
            </Button>
          </form>
          <SignUpLink>
            Não possui conta? <a href={'/register'}>Registre-se</a>
          </SignUpLink>
        </div>
      </ContainerItens>
    </Container>
  )
}

export default Login
