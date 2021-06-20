import React, { useRef } from 'react'
import {
  ContainerPage,
  FormContainer,
  LogoHeader,
  Button,
  InputCustom
} from '@shared/components'
import { api } from '@shared/services'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import * as S from './styles'

const CreateCustomers: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const navigation = useNavigation()

  async function handleCreateCustumer(data) {
    const customerDate = {
      customer: {
        ...data
      }
    }

    const response = await api.post('/customer', customerDate)

    navigation.navigate('Evaluations')
  }
  return (
    <ContainerPage>
      <LogoHeader isBack />
      <S.Container>
        <FormContainer>
          <S.ContainerHeader>
            <S.ContainerItem>
              <MaterialCommunityIcons name="account-plus" size={18} />
            </S.ContainerItem>
            <S.ContainerItem>
              <S.Title>CADASTRAR NOVO CLIENTE</S.Title>
            </S.ContainerItem>
          </S.ContainerHeader>
          <S.ContainerInfos>
            <Form ref={formRef} onSubmit={handleCreateCustumer}>
              <InputCustom name="nome" label="Nome" />
              <InputCustom name="cpfcnpj" label="CPF ou CNPJ" />
              <InputCustom name="email" label="E-mail" />
              <InputCustom name="celular" label="Celular" />
              <InputCustom name="telefone" label="Telefone" />
              <Button
                onPress={() => {
                  formRef.current?.submitForm()
                }}
              >
                Cadastrar Cliente
              </Button>
            </Form>
          </S.ContainerInfos>
        </FormContainer>
      </S.Container>
    </ContainerPage>
  )
}

export default CreateCustomers
