/* eslint-disable no-unused-expressions */
import React, { useEffect, useCallback, useState, useRef } from 'react'

import { ScrollView } from 'react-native'

import {
  LogoHeader,
  Button,
  SelectOptions,
  ContainerPage
} from '@shared/components'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { useNavigation, useRoute } from '@react-navigation/native'

import selectHangTags from './selectHangTags.json'
import * as S from './styles'

const HangTags: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const navigation = useNavigation()

  const [etiquetaColuna, setEtiquetaColuna] = useState('')
  const [etiquetaMotor, setEtiquetaMotor] = useState('')
  const [etiquetaPiso, setEtiquetaPiso] = useState('')

  const [baseData, setBaseData] = useState({})

  const { params } = useRoute()

  const routeParams = params

  async function handleHangTags(data) {
    const dataHangTags = {
      etiquetas: {
        etiquetaColuna,
        etiquetaMotor,
        etiquetaPiso
      },
      ...routeParams
    }

    navigation.navigate('CheckItens', dataHangTags)
  }

  async function hasBaseData() {
    const data = {
      routeParams
    }
    setBaseData(routeParams)
  }

  useEffect(() => {
    hasBaseData()
  }, [])

  return (
    <ContainerPage>
      <S.Container>
        <S.ContainerHeader>
          <S.Title>Etiquetas</S.Title>
        </S.ContainerHeader>
        <ScrollView>
          <Form ref={formRef} onSubmit={handleHangTags}>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Etiqueta Coluna</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectHangTags}
                  onValueChange={value => setEtiquetaColuna(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Etiqueta Motor</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectHangTags}
                  onValueChange={value => setEtiquetaMotor(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Etiqueta Piso</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectHangTags}
                  onValueChange={value => setEtiquetaPiso(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
          </Form>
        </ScrollView>
      </S.Container>
    </ContainerPage>
  )
}

export default HangTags
