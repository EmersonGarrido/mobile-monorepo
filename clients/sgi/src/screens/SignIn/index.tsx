/* eslint-disable no-unused-expressions */
import React, { useState, useRef, useCallback } from 'react'
import { TextInput, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import Icon from '@expo/vector-icons/build/Feather'
import {
  Button,
  FormContainer,
  Input,
  ContainerPage,
  SplashLoading
} from '@shared/components'

import { getValidationErrors } from '@shared/helpers'

import { useAuth } from '../../hooks/auth'

import * as S from './styles'

interface SignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)
  const [hidePassword, setHidePassword] = useState(true)
  const navigation = useNavigation()

  const { signIn } = useAuth()

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é origatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('A Senha é obrigatória')
        })

        await schema.validate(data, {
          abortEarly: false
        })
        setIsLoading(true)
        signIn({
          email: data.email,
          password: data.password
        })
      } catch (err) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)
      }
    },
    [signIn]
  )

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#003f82" />
      <ContainerPage>
        <FormContainer>
          <S.Container>
            <S.ContainerLogo>
              <S.Logo />
            </S.ContainerLogo>

            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
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
              {isLoading ? (
                <SplashLoading />
              ) : (
                <Button
                  onPress={() => {
                    formRef.current?.submitForm()
                  }}
                >
                  Entrar
                </Button>
              )}
            </Form>
          </S.Container>

          <S.CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
            <Icon name="log-in" size={20} color="#003f82" />
            <S.CreateAccountButtonText>
              Criar uma nova conta
            </S.CreateAccountButtonText>
          </S.CreateAccountButton>
        </FormContainer>
      </ContainerPage>
    </>
  )
}

export default SignIn
