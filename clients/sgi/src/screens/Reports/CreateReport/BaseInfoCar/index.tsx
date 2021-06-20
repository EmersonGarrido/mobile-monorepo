import React, { useState, useEffect, useRef } from 'react'
import {
  LogoHeader,
  Button,
  InputPlate,
  SelectOptions,
  ContainerPage,
  Loading
} from '@shared/components'

import { api } from '@shared/services'

import { Form } from '@unform/mobile'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Image, ScrollView, YellowBox } from 'react-native'
import * as S from './styles'

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state'
])

interface RouteParams {
  laudo_id: number
}

const BaseInfoCar: React.FC = () => {
  const formRef = useRef(null)
  const navigation = useNavigation()
  const [base, setBase] = useState({})
  const [loading, setLoading] = useState(false)

  const { params } = useRoute()

  const routeParams = params as RouteParams

  async function hasReport() {
    const response = await api.get(`/laudo/${routeParams.data.id}`)
    setBase(response.data)
  }

  async function handleSubmit(data) {
    navigation.navigate('SecurityItens', base)
  }

  useEffect(() => {
    setLoading(true)
    hasReport().then(() => setLoading(false))
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ContainerPage>
          <S.Container>
            <ScrollView showsHorizontalScrollIndicator={false}>
              {/* <S.ContainerHeader>
                <S.Title> Informações </S.Title>
              </S.ContainerHeader> */}
              <Form ref={formRef} onSubmit={handleSubmit}>
                <S.ContainerItems>
                  <S.ContainerItem>
                    <S.TitleItem>Placa :</S.TitleItem>
                  </S.ContainerItem>
                  <S.ContainerItem>
                    <S.TextInfo>{base.placa}</S.TextInfo>
                  </S.ContainerItem>
                </S.ContainerItems>

                <S.ContainerItems>
                  <S.ContainerItem>
                    <S.TitleItem>Municipio :</S.TitleItem>
                  </S.ContainerItem>
                  <S.ContainerItem>
                    <S.TextInfo>{base.uf}</S.TextInfo>
                  </S.ContainerItem>
                </S.ContainerItems>

                <S.ContainerItems>
                  <S.ContainerItem>
                    <S.TitleItem>Marca :</S.TitleItem>
                  </S.ContainerItem>
                  <S.ContainerItem>
                    <S.TextInfo>{base.marca}</S.TextInfo>
                  </S.ContainerItem>
                </S.ContainerItems>

                <S.ContainerItems>
                  <S.ContainerItem>
                    <S.TitleItem>Modelo :</S.TitleItem>
                  </S.ContainerItem>
                  <S.ContainerItem>
                    <S.TextInfo>{base.modelo}</S.TextInfo>
                  </S.ContainerItem>
                </S.ContainerItems>

                <S.ContainerItems>
                  <S.ContainerItem>
                    <S.TitleItem>Procedência :</S.TitleItem>
                  </S.ContainerItem>
                  <S.ContainerItem>
                    <S.TextInfo>{base.procedencia}</S.TextInfo>
                  </S.ContainerItem>
                </S.ContainerItems>

                <S.ContainerItems>
                  <S.ContainerItem>
                    <S.TitleItem>Categoria :</S.TitleItem>
                  </S.ContainerItem>
                  <S.ContainerItem>
                    <S.TextInfo>{base.categoria}</S.TextInfo>
                  </S.ContainerItem>
                </S.ContainerItems>

                <S.ContainerItems>
                  <S.ContainerItem>
                    <S.TitleItem>Tipo :</S.TitleItem>
                  </S.ContainerItem>
                  <S.ContainerItem>
                    <S.TextInfo>{base.tipo}</S.TextInfo>
                  </S.ContainerItem>
                </S.ContainerItems>

                <S.ContainerItems>
                  <S.ContainerItem>
                    <S.TitleItem>Espécie :</S.TitleItem>
                  </S.ContainerItem>
                  <S.ContainerItem>
                    <S.TextInfo>{base.especie}</S.TextInfo>
                  </S.ContainerItem>
                </S.ContainerItems>

                <S.ContainerItems>
                  <S.ContainerItem>
                    <S.TitleItem>Combústivel :</S.TitleItem>
                  </S.ContainerItem>
                  <S.ContainerItem>
                    <S.TextInfo>{base.combustivel}</S.TextInfo>
                  </S.ContainerItem>
                </S.ContainerItems>

                <S.ContainerItems>
                  <S.ContainerItem>
                    <S.TitleItem>Ano Modelo :</S.TitleItem>
                  </S.ContainerItem>
                  <S.ContainerItem>
                    <S.TextInfo>{base.ano_modelo}</S.TextInfo>
                  </S.ContainerItem>
                </S.ContainerItems>

                <S.ContainerItems>
                  <S.ContainerItem>
                    <S.TitleItem>Ano Fabricação :</S.TitleItem>
                  </S.ContainerItem>
                  <S.ContainerItem>
                    <S.TextInfo>{base.ano_fabricacao}</S.TextInfo>
                  </S.ContainerItem>
                </S.ContainerItems>
              </Form>
            </ScrollView>
          </S.Container>
        </ContainerPage>
      )}
    </>
  )
}

export default BaseInfoCar
