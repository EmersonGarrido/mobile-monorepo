/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import { ScrollView, YellowBox } from 'react-native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import {
  FormContainer,
  LogoHeader,
  ContainerPage,
  Select,
  Input,
  Button
} from '@shared/components'

import { fipe, api } from '@shared/services'

import * as S from './styles'
import SelectExchange from './services/json/selectExchange.json'
import SelectState from './services/json/selectState.json'
import SelectColors from './services/json/selectColors.json'
import SelectBodywork from './services/json/selectBodywork.json'

interface BrandsProps {
  label: string
  value: number
}
interface FipeProps {
  nome: string
  codigo: number
}

interface CarOptionsProps {
  AnoModelo: number
  CodigoFipe: string
  Combustivel: string
  Marca: string
  MesReferencia: string
  Modelo: string
  SiglaCombustivel: string
  TipoVeiculo: number
  Valor: string
}

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state'
])

const RequestCar: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()

  const [brandsAll, setBrandsAll] = useState<BrandsProps[]>([])
  const [brandSelected, setBrandSelected] = useState('')

  const [modelsAll, setModelsAll] = useState<BrandsProps[]>([])
  const [modelSelected, setModelSelected] = useState('')

  const [yearsAll, setYearsAll] = useState<BrandsProps[]>([])
  const [yearsSelected, setYearsSelected] = useState('')

  const [enableModelSelect, setEnableModelSelect] = useState(true)
  const [enableYearsSelect, setEnableYearsSelect] = useState(true)

  const [optionsCar, setOptionsCar] = useState<CarOptionsProps>('')
  const [cambio, setCambio] = useState('')
  const [estado, setEstado] = useState('')
  const [cor, setCor] = useState('')

  const { params } = useRoute()
  const routeParams = params

  function alterArray (data: FipeProps[]) {
    return data.map(item => {
      return {
        label: item.nome,
        value: item.codigo
      }
    })
  }

  async function handleGetBrands () {
    const response = await fipe.get('/carros/marcas')
    setBrandsAll(alterArray(response.data))
  }

  async function handleGetModels () {
    const response = await fipe.get(`/carros/marcas/${brandSelected}/modelos`)
    setModelsAll(alterArray(response.data.modelos))
    setEnableModelSelect(false)
  }

  async function handleGetYears () {
    const response = await fipe.get(
      `/carros/marcas/${brandSelected}/modelos/${modelSelected}/anos`
    )
    setYearsAll(alterArray(response.data))
    setEnableYearsSelect(false)
  }

  async function handleGetCar () {
    const response = await fipe.get(
      `/carros/marcas/${brandSelected}/modelos/${modelSelected}/anos/${yearsSelected}`
    )
    setOptionsCar(response.data)
  }

  async function handleRequestCar (data) {
    const requestCar = {
      marca: optionsCar.Marca,
      modelo: optionsCar.Modelo,
      valorfipe: optionsCar.Valor,
      valorcliente: data.valorcliente,
      combustivel: optionsCar.Combustivel,
      ano: optionsCar.AnoModelo,
      cambio: cambio,
      estado: estado,
      cor: cor,
      km: data.km
    }

    const response = await api.post('/carlist', requestCar)
    navigation.navigate('RequestFinish', response)

    return response
  }

  useEffect(() => {
    handleGetBrands()
  }, [])

  useEffect(() => {
    handleGetModels()
  }, [brandSelected])

  useEffect(() => {
    handleGetYears()
  }, [modelSelected])

  useEffect(() => {
    handleGetCar()
  }, [yearsSelected])

  return (
    <ContainerPage>
      <LogoHeader isBack />
      <FormContainer>
        <ScrollView>
          <S.Container>
            <Form ref={formRef} onSubmit={handleRequestCar}>
              <Select
                label="Marca"
                items={brandsAll}
                onValueChange={label => setBrandSelected(label)}
              />
              <Select
                label="Modelo"
                items={modelsAll}
                disabled={enableModelSelect}
                onValueChange={value => setModelSelected(value)}
              />
              <Select
                label="Ano"
                items={yearsAll}
                disabled={enableYearsSelect}
                onValueChange={value => setYearsSelected(value)}
              />
              <Select
                label="Câmbio"
                items={SelectExchange.exchange}
                onValueChange={value => setCambio(value)}
              />
              <Input
                icon="car"
                label="Combustivel"
                name="combustivel"
                value={optionsCar.Combustivel}
              />
              <Select
                label="Estado"
                items={SelectState.state}
                onValueChange={value => setEstado(value)}
              />
              <Select
                label="Cor"
                items={SelectColors.colorsCar}
                onValueChange={value => setCor(value)}
              />
              <Input icon="dashboard" label="KM" name="km" />

              <Input
                icon="money"
                label="Valor Fipe Carro "
                name="mediadepreco"
                value={optionsCar.Valor}
              />
              <Input
                icon="money"
                label="Valor Disponive Cliente"
                name="valorcliente"
              />
              <Button
                onPress={() => {
                  formRef.current?.submitForm()
                }}
              >
                Solicitar Carro
              </Button>
            </Form>
          </S.Container>
        </ScrollView>
      </FormContainer>
    </ContainerPage>
  )
}

export default RequestCar
