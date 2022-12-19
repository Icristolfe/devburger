import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Burguer from '../../assets/burgersignup.svg'
import Logo from '../../assets/logo.svg'
import { Button } from '../../components'
import api from '../../services/api.js'
import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SignUpLink,
  ErrorMessage
} from './styles'

export function Register() {
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter no mínimo 6 digitos'),
    passwordConfirmation: Yup.string()
      .required('A confirmação de senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )
      if (status === 200 || status === 201) {
        toast.success('Cadastro realizado com sucesso')
      } else if (status === 409) {
        toast.error('Email já cadastrado, faça login para continuar')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema, tente novamente')
    }

    navigate('/login')
  }

  return (
    <Container>
      <RegisterImage src={Burguer} alt="burguer-image" />

      <ContainerItens>
        <div>
          <img src={Logo} alt="logo-devburguer" />
          <h1>Cadastre-se</h1>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label error={errors.name?.message}>Nome</Label>
            <Input
              type="text"
              {...register('name')}
              error={errors.name?.message}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>

            <Label error={errors.email?.message}>Email</Label>
            <Input
              type="email"
              {...register('email')}
              error={errors.email?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label error={errors.password?.message}>Senha</Label>
            <Input
              type="password"
              {...register('password')}
              error={errors.password?.message}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Label error={errors.passwordConfirmation?.message}>
              Confirmar Senha
            </Label>
            <Input
              type="password"
              {...register('passwordConfirmation')}
              error={errors.passwordConfirmation?.message}
            />
            <ErrorMessage>{errors.passwordConfirmation?.message}</ErrorMessage>

            <Button type="submit" style={{ marginTop: 75, marginBottom: 25 }}>
              Sign In
            </Button>
          </form>
          <SignUpLink>
            Já possui conta? <a href={'/'}>Login</a>
          </SignUpLink>
        </div>
      </ContainerItens>
    </Container>
  )
}
