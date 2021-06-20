import React, { useState, useEffect, useRef, useCallback } from 'react'
import { ScrollView, Switch, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import Constants from 'expo-constants'

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import {
  LogoHeader,
  Button,
  FormContainer,
  Loading,
  InputCustom,
  ModalInfo,
  Select,
  Camera,
  ContainerPage
} from '@shared/components'

import * as S from './styles'

import OptionsNegociation from './SelectOptionsNegociation.json'
import SelectZeroKm from './SelectZeroKm.json'

interface CustomerProps {
  nome: string
  email: string
  cpfcnpj: string
  celular: string
  telefone: string
}
interface PicturesDataProps {
  name?: string
  type: string
  uri: string
}

const BaseInfoEvaluations: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()
  const [base, setBase] = useState<CustomerProps>()
  const { params } = useRoute()

  const [negociation, setNegociation] = useState()
  const [zeroKm, setZeroKm] = useState()
  const [viewDetails, setViewDetails] = useState(false)
  const [pictureCamera, setPictureCamera] = useState(state => !state)

  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  const routeParams = params

  const [documento, setDocumento] = useState<PicturesDataProps>('')

  async function getPermissions() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA)
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!')
      }
    }
  }

  async function handleImageGaleriaDocumento() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [2, 2],
      quality: 0.5
    })
    setDocumento(data)
    setModalVisible(false)
  }

  async function handleImageCameraDocumento() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    const data = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [2, 2],
      quality: 0.5
    })
    setDocumento(data)
    setModalVisible(false)
  }

  async function handleParams () {
    const baseData = await routeParams

    setBase(baseData)
  }

  async function handleRequestPlateCar() {}

  const toggleModal = useCallback(() => {
    setModalVisible(state => !state)
  }, [])

  useEffect(() => {
    handleParams().then(() => setLoading(false))
    getPermissions()
  }, [])

  return (
    <>
      {loading ? (
        <ContainerPage>
          <LogoHeader isBack />
          <FormContainer>
            <S.Container>
              {/* <S.ContainerCustomer>
            <S.Title>Cliente</S.Title>
            <S.Name>{base.nome}</S.Name>
            <S.ActionsInfoCustomer>
              {viewDetails ? (
                <S.ViewDetails onPress={() => setViewDetails(false)}>
                  <MaterialCommunityIcons
                    name="eye-off"
                    size={22}
                    color="#1976D2"
                  />
                  <S.TitleAction>Ocultar Perfil</S.TitleAction>
                </S.ViewDetails>
              ) : (
                <S.ViewDetails onPress={() => setViewDetails(true)}>
                  <MaterialCommunityIcons
                    name="eye-plus-outline"
                    size={22}
                    color="#1976D2"
                  />
                  <S.TitleAction>Exibir Perfil</S.TitleAction>
                </S.ViewDetails>
              )}
              {viewDetails ? (
                <S.InfoContainerBox>
                  <S.InfoCustomer>
                    <S.CustomerTitle>Nome do Cliente : </S.CustomerTitle>
                    <S.Title>{base.nome}</S.Title>
                  </S.InfoCustomer>

                  <S.InfoCustomer>
                    <S.CustomerTitle>CPF ou CNPJ : </S.CustomerTitle>
                    <S.Title>{base.cpfcnpj}</S.Title>
                  </S.InfoCustomer>

                  <S.InfoCustomer>
                    <S.CustomerTitle>E-mail : </S.CustomerTitle>
                    <S.Title>{base.email}</S.Title>
                  </S.InfoCustomer>

                  <S.InfoCustomer>
                    <S.CustomerTitle>Celular : </S.CustomerTitle>
                    <S.Title>{base.celular}</S.Title>
                  </S.InfoCustomer>

                  <S.InfoCustomer>
                    <S.CustomerTitle>Telefone : </S.CustomerTitle>
                    <S.Title>{base.telefone}</S.Title>
                  </S.InfoCustomer>
                </S.InfoContainerBox>
              ) : (
                <S.Non></S.Non>
              )}
            </S.ActionsInfoCustomer>
          </S.ContainerCustomer> */}
            </S.Container>
          </FormContainer>
        </ContainerPage>
      ) : (
        <Loading />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  }
})

export default BaseInfoEvaluations
