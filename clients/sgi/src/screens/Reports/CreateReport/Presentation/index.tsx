/* eslint-disable no-unused-expressions */
import React, { useEffect, useCallback, useState, useRef } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import {
  LogoHeader,
  Button,
  SelectOptions,
  ContainerPage
} from '@shared/components'

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import selectPresentation from './selectPresentation.json'

import * as S from './styles'

const Presentation: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const navigation = useNavigation()

  const [longDiantDireit, setLongDiantDireit] = useState('')
  const [longDiantEsquer, setLongDiantEsquer] = useState('')
  const [longTraseDireit, setLongTraseDireit] = useState('')
  const [longTraseEsquer, setLongTraseEsquer] = useState('')
  const [colunaDiantDireit, setColuneDiantDireit] = useState('')
  const [colunaDiantEsquer, setColunaDiantEsquer] = useState('')
  const [colunaCentralDireit, setColunaCentralDireit] = useState('')
  const [colunaCentralEsquer, setColunaCentralEsquer] = useState('')
  const [colunaTraseiDireita, setColunaTraseiDireit] = useState('')
  const [colunaTraseiEsquerda, setColunaTraseiEsquer] = useState('')
  const [painelFrontal, setPainelFrontal] = useState('')
  const [painelTraseir, setPainelTrasei] = useState('')

  const [baseData, setBaseData] = useState({})

  const { params } = useRoute()

  const routeParams = params

  async function handlePresentations (data) {
    const dataPresentation = {
      originEstrutura: {
        longDiantDireit,
        longDiantEsquer,
        longTraseDireit,
        longTraseEsquer,
        colunaDiantDireit,
        colunaDiantEsquer,
        colunaCentralDireit,
        colunaCentralEsquer,
        colunaTraseiDireita,
        colunaTraseiEsquerda,
        painelFrontal,
        painelTraseir
      },
      ...baseData
    }
    navigation.navigate('Painting', dataPresentation)
  }

  async function hasBaseData () {
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
        <ScrollView>
          <S.ContainerHeader>
            <S.Title>Orig Estrutura</S.Title>
          </S.ContainerHeader>
          <Form ref={formRef} onSubmit={handlePresentations}>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Longarina Dianteira Direita</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPresentation}
                  onValueChange={value => setLongDiantDireit(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Longarina Dianteira Esquer.</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPresentation}
                  onValueChange={value => setLongDiantEsquer(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Longarina Traseira Direita</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPresentation}
                  onValueChange={value => setLongTraseDireit(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Longarina Traseira Esquer.</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPresentation}
                  onValueChange={value => setLongTraseEsquer(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Coluna Dianteira Direita</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPresentation}
                  onValueChange={value => setColuneDiantDireit(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Coluna Dianteira Esquerda</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPresentation}
                  onValueChange={value => setColunaDiantEsquer(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Coluna Central Direita</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPresentation}
                  onValueChange={value => setColunaCentralDireit(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Coluna Central Esquerda</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPresentation}
                  onValueChange={value => setColunaCentralEsquer(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Coluna Traseira Direita</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPresentation}
                  onValueChange={value => setColunaTraseiDireit(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Coluna Traseira Esquerda</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPresentation}
                  onValueChange={value => setColunaTraseiEsquer(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Painel Frontal</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPresentation}
                  onValueChange={value => setPainelFrontal(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Painel Traseiro</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPresentation}
                  onValueChange={value => setPainelTrasei(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
          </Form>
        </ScrollView>
      </S.Container>
    </ContainerPage>
  )
}

export default Presentation
