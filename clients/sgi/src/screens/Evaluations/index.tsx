import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  FormContainer,
  LogoHeader,
  Button,
  ModalInfo,
  ContainerPage
} from '@shared/components'
import { StyleSheet } from 'react-native'
import Autocomplete from 'react-native-autocomplete-input'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { api } from '@shared/services'

import * as S from './styles'

interface CustumerProps {
  nome: string
  cpfcnpj: string
  email: string
  celular: string
  telefone: string
}

const Evaluations: React.FC = () => {
  const [allCustomers, setAllCustomers] = useState('')
  const [customer, setCustomer] = useState('')
  const [query, setQuery] = useState('')

  const [selectCustomer, setSelectCustomer] = useState<CustumerProps>('')
  const [selected, setSelected] = useState(true)
  const navigation = useNavigation()

  async function handleCreateCustumers() {
    navigation.navigate('CreateCustomers')
  }

  async function allCostumersRequest() {
    const response = await api.get('/customer')
    setAllCustomers(response.data)
  }

  async function filterQuery(query) {
    if (query === '') {
      return []
    }

    const regex = new RegExp(`${query.trim()}`, 'i')
    const filter = await allCustomers.filter(
      user => user.nome.search(regex) >= 0
    )
    setCustomer(filter)
  }

  async function handleSelectCustomer(item: CustumerProps) {
    setSelectCustomer(item)
    setSelected(false)
  }

  async function handleNewEvaluation() {
    if (selectCustomer === '') {
      return
    }

    navigation.navigate('BaseInfoEvaluations', selectCustomer)
  }

  useEffect(() => {
    allCostumersRequest()
  }, [])

  return (
    <ContainerPage>
      <LogoHeader isBack />
      <FormContainer>
        <S.TitleHeader>Solicitar Nova Avaliação</S.TitleHeader>
        <S.Info>Informe o nome do cliente</S.Info>
        {selected ? (
          <>
            <Autocomplete
              autoCapitalize="sentences"
              autoCorrect={false}
              data={customer}
              defaultValue={query}
              inputContainerStyle={styles.container}
              listStyle={styles.listStyle}
              containerStyle={styles.autocompleteContainer}
              listContainerStyle={styles.listContainer}
              style={styles.descriptionContainer}
              onChangeText={text => filterQuery(text)}
              placeholder="Digite o nome do Cliente"
              renderItem={({ item }) => (
                <S.ContainerButton onPress={() => handleSelectCustomer(item)}>
                  <S.Title> {item.nome}</S.Title>
                  <MaterialCommunityIcons
                    name="account-arrow-right"
                    size={20}
                  />
                </S.ContainerButton>
              )}
            />
            <S.ContainerPaddingButton>
              <Button onPress={() => handleCreateCustumers()}>
                Cadastrar Novo Cliente
              </Button>
            </S.ContainerPaddingButton>
          </>
        ) : (
          <>
            <S.Info>1 cliente(s) encontrado(s):</S.Info>
            <S.InfoContainer>
              <S.CustomerTitle>INFORMAÇÕES DO CLIENTE</S.CustomerTitle>
              <S.Action onPress={() => setSelected(true)}>
                <MaterialCommunityIcons
                  name="close-circle"
                  size={30}
                  color="#C6D6E2"
                />
              </S.Action>
              <S.InfoContainerBox>
                <S.InfoCustomer>
                  <S.CustomerTitle>Nome do Cliente : </S.CustomerTitle>
                  <S.Title>{selectCustomer.nome}</S.Title>
                </S.InfoCustomer>

                <S.InfoCustomer>
                  <S.CustomerTitle>CPF ou CNPJ : </S.CustomerTitle>
                  <S.Title>{selectCustomer.cpfcnpj}</S.Title>
                </S.InfoCustomer>

                <S.InfoCustomer>
                  <S.CustomerTitle>E-mail : </S.CustomerTitle>
                  <S.Title>{selectCustomer.email}</S.Title>
                </S.InfoCustomer>

                <S.InfoCustomer>
                  <S.CustomerTitle>Celular : </S.CustomerTitle>
                  <S.Title>{selectCustomer.celular}</S.Title>
                </S.InfoCustomer>

                <S.InfoCustomer>
                  <S.CustomerTitle>Telefone : </S.CustomerTitle>
                  <S.Title>{selectCustomer.telefone}</S.Title>
                </S.InfoCustomer>
              </S.InfoContainerBox>
            </S.InfoContainer>

            <S.ContainerPaddingButton>
              <Button onPress={() => handleNewEvaluation()}>
                SELECIONAR CLIENTE
              </Button>
            </S.ContainerPaddingButton>

            <S.Info>Você pode também:</S.Info>
            <S.ContainerPaddingButton>
              <Button onPress={() => handleCreateCustumers()}>
                CADASTRAR NOVO
              </Button>
            </S.ContainerPaddingButton>
          </>
        )}
      </FormContainer>
    </ContainerPage>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderColor: '#f1f1f1',
    marginBottom: 5,
    borderRadius: 10
  },

  autocompleteContainer: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 10
  },

  descriptionContainer: {
    justifyContent: 'center',
    borderColor: '#000'
  },

  listStyle: {
    marginLeft: 0,
    marginRight: 0,
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: '#f2f3f6'
  },

  listContainer: {},

  itemText: {
    // padding: 10,
    backgroundColor: '#000'
  },

  infoText: {
    textAlign: 'center',
    fontSize: 16,
    padding: 10
  }
})

export default Evaluations
