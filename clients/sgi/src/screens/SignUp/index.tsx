/* eslint-disable camelcase */
import React, { useState, useRef, useCallback } from 'react'
import { TextInput, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import Icon from '@expo/vector-icons/build/Feather'
import { Button, FormContainer, Input } from '@shared/components'

import { getValidationErrors } from '@shared/helpers'

import { useAuth } from '../../hooks/auth'

import * as S from './styles'

interface SignUpFormData {
  first_name: string
  last_name: string
  email: string
  password: string
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const emailInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)
  const [hidePassword, setHidePassword] = useState(true)
  const navigation = useNavigation()

  const { signUp } = useAuth()

  const handleSignIn = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        first_name: Yup.string().required('Nome é origatório'),
        email: Yup.string()
          .required('E-mail é origatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      signUp({
        first_name: data.first_name,
        email: data.email,
        password: data.password
      })
    } catch (err) {
      const errors = getValidationErrors(err)

      formRef.current?.setErrors(errors)
    }
  }, [])

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#003f82" />
      <FormContainer>
        <S.Container>
          <S.ContainerLogo>
            <S.Logo />
          </S.ContainerLogo>
          <Form ref={formRef} onSubmit={handleSignIn}>
            <Input
              name="first_name"
              icon="user"
              placeholder="Nome"
              autoCapitalize="words"
              returnKeyType="next"
              onSubmitEditing={() => {
                emailInputRef.current?.focus()
              }}
            />
            <Input
              ref={emailInputRef}
              name="email"
              icon="envelope"
              placeholder="E-mail"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current?.focus()
              }}
            />
            <Input
              ref={passwordInputRef}
              name="password"
              icon="lock"
              placeholder="Senha"
              viewPass={hidePassword ? 'eye-slash' : 'eye'}
              handleViewPass={() => setHidePassword(!hidePassword)}
              secureTextEntry={hidePassword}
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current?.submitForm()
              }}
            />
            <Button
              onPress={() => {
                formRef.current?.submitForm()
              }}
            >
              Cadastrar
            </Button>
          </Form>
        </S.Container>
        <S.BackToSigInButton onPress={() => navigation.navigate('SignIn')}>
          <Icon name="arrow-left" size={20} color="#003f82" />
          <S.BackToSigInButtonText>Voltar para login</S.BackToSigInButtonText>
        </S.BackToSigInButton>
      </FormContainer>
    </>
  )
}

export default SignUp
