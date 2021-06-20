/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState, useEffect } from 'react'
import {
  LogoHeader,
  Button,
  InputPlate,
  SelectOptions,
  ContainerPage,
  SplashLoading
} from '@shared/components'
import { Form } from '@unform/mobile'
import { useNavigation } from '@react-navigation/native'

import { api, carfects } from '@shared/services'

import * as S from './styles'
import selectState from './selectStates.json'

const CheckPlate: React.FC = ({ route }) => {
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef(null)
  const navigation = useNavigation()
  const [plateNational, setPlateNational] = useState(true)
  const [plate, setPlate] = useState('')
  const [stateSelected, setStateSelected] = useState('')
  const [tokenCarfects, setTokenCarfects] = useState('')

  const [userCarfects, setUserCarfects] = useState(
    'logistica.rabrasil@gmail.com'
  )
  const [passCarfects, setPassCarfects] = useState('SNFREITAS2020')

  async function handleSubmit(data) {
    setIsLoading(true)
    try {
      const dataPlate = {
        plate,
        stateSelected
      }
      const Placa = plate.substring(0, 7)
      const UF = stateSelected.substring(0, 2)

      const response = await api.post('/laudo', {
        Placa,
        UF,
        tokenCarfects
      })

      navigation.navigate('CreateReport', response)
      setIsLoading(false)
    } catch (error) {
      return error
    }
  }

  async function handleGetToken () {
    const token = await carfects.post('/auth/login', {
      Email: userCarfects,
      Senha: passCarfects
    })

    setTokenCarfects(token.data.Token)
  }

  useEffect(() => {
    handleGetToken()
  }, [])

  return (
    <>
      <ContainerPage>
        <LogoHeader isBack />
        <S.Container>
          <S.ContainerTitle>
            <S.Title>Informe a Placa e Estado</S.Title>
          </S.ContainerTitle>
          <S.ToggleContainer>
            <S.ToggleOption onPress={() => setPlateNational(true)}>
              <S.ToggleOptionText active={plateNational}>
                {'Nacional'.toUpperCase()}
              </S.ToggleOptionText>
            </S.ToggleOption>

            <S.ToggleIndication active={plateNational} />

            <S.ToggleOption onPress={() => setPlateNational(false)}>
              <S.ToggleOptionText active={!plateNational}>
                {'Merco Sul'.toUpperCase()}
              </S.ToggleOptionText>
            </S.ToggleOption>
          </S.ToggleContainer>
          <S.FormContainer>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <InputPlate
                name="licensePlate"
                maskType="custom"
                maskToptions={{
                  mask: plateNational ? 'AAA9999' : 'AAA9A99'
                }}
                value={plate}
                onChangeText={text => setPlate(text)}
                placeholder={plateNational ? 'Ex: XXX9999' : 'Ex: XXX9X99'}
                autoCapitalize="characters"
                centered
              />
              <SelectOptions
                items={selectState}
                onValueChange={value => setStateSelected(value)}
              />
              <S.ContainerState>
                {isLoading ? (
                  <SplashLoading />
                ) : (
                  <Button
                    onPress={() => {
                      formRef.current?.submitForm()
                    }}
                  >
                    Prosseguir
                  </Button>
                )}
              </S.ContainerState>
            </Form>
          </S.FormContainer>
        </S.Container>
      </ContainerPage>
    </>
  )
}

export default CheckPlate
