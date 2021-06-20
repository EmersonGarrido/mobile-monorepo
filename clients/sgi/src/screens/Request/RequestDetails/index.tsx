import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { upperFirst } from 'lodash'
import {
  LogoHeader,
  ContainerPage,
  Loading,
  ModalInfo
} from '@shared/components'

import { api } from '@shared/services'

import { normalizeMoney, normalizeNumberFormat } from '@shared/helpers'

import * as S from './styles'

interface DataProps {
  id: number
  username: string
  marca: string
  modelo: string
  ano: string
  cor: string
  cambio: string
  combustivel: string
  km: number
  valorfipe: string
  valorcliente: number
  estado: string
  status: 'pendente' | 'aguardando' | 'comprado'
}

interface RouteParams {
  // eslint-disable-next-line camelcase
  car_id: number
}

const RequestDetails: React.FC = () => {
  const [carList, setCarList] = useState<DataProps>({} as DataProps)
  const [user, setUser] = useState('')
  const [loading, setLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const { params } = useRoute()

  const routeParams = params as RouteParams

  async function getCarInfoDatailes() {
    const response = await api.get(`/carlist/${routeParams.car_id}`)
    setUser(response.data)
    setCarList(response.data.car)
  }

  useEffect(() => {
    setLoading(true)

    getCarInfoDatailes().then(() => setLoading(false))
  }, [])

  const toggleModal = useCallback(() => {
    setModalVisible(state => !state)
  }, [])

  const formattedMoney = useMemo(() => {
    return normalizeMoney(carList.valorcliente)
  }, [carList])

  const formattedKM = useMemo(() => {
    return normalizeNumberFormat(carList.km)
  }, [carList])

  const formattedStatusLabel = useMemo(() => {
    return upperFirst(carList.status)
  }, [carList])

  return (
    <ContainerPage>
      <LogoHeader isBack />
      <S.Container>
        {loading ? (
          <Loading />
        ) : (
          <ScrollView>
            <S.TitleContainer>
              <S.Title>{carList.marca}</S.Title>
              <S.StatusContainer status={carList.status} onPress={toggleModal}>
                <S.Status>{formattedStatusLabel}</S.Status>
              </S.StatusContainer>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Solicitado por :</S.SubTitle>
              <S.SubTitle>{user.username}</S.SubTitle>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Valor Fipe :</S.SubTitle>
              <S.SubTitle>{carList.valorfipe}</S.SubTitle>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Valor Cliente :</S.SubTitle>
              <S.SubTitle>{formattedMoney}</S.SubTitle>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Modelo :</S.SubTitle>
              <S.SubTitle>{carList.modelo}</S.SubTitle>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Ano :</S.SubTitle>
              <S.SubTitle>{carList.ano}</S.SubTitle>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Quilômetragem :</S.SubTitle>
              <S.SubTitle> {formattedKM} KM</S.SubTitle>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Cor :</S.SubTitle>
              <S.SubTitle>{carList.cor}</S.SubTitle>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Câmbio :</S.SubTitle>
              <S.SubTitle>{carList.cambio}</S.SubTitle>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Cambutível :</S.SubTitle>
              <S.SubTitle>{carList.combustivel}</S.SubTitle>
            </S.TitleContainer>
            <S.Line />
            <S.TitleContainer>
              <S.SubTitle>Estado :</S.SubTitle>
              <S.SubTitle>{carList.estado}</S.SubTitle>
            </S.TitleContainer>
            <ModalInfo
              title="Atualizar Status"
              isVisible={modalVisible}
              onBackdropPress={toggleModal}
            >
              <S.ModalMessage>
                Deseja atualizar o status desse veículo?
              </S.ModalMessage>
            </ModalInfo>
          </ScrollView>
        )}
      </S.Container>
    </ContainerPage>
  )
}

export default RequestDetails
