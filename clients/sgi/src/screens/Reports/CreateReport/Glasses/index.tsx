/* eslint-disable no-unused-expressions */
import React, { useEffect, useState, useRef, useCallback } from 'react'
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
import selectGlasses from './selectGlasses.json'

import * as S from './styles'

const Glasses: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const navigation = useNavigation()

  const [parabrisas, setParabrisas] = useState('')
  const [portaDianteiraEsquerda, setPortaDianteiraEsquerda] = useState('')
  const [portaTraseiraEsquerda, setPortaTraseiraEsquerda] = useState('')
  const [lateralEsquerdo, setLateralEsquerdo] = useState('')
  const [lateralDireito, setLateralDireito] = useState('')
  const [portaTraseiraDireita, setPortaTraseiraDireita] = useState('')
  const [portaDianteiraDireita, setPortaDianteiraDireita] = useState('')

  const [baseData, setBaseData] = useState({})

  const { params } = useRoute()

  const routeParams = params

  async function handleGlasses(data) {
    const dataGlasses = {
      analiseDeVidros: {
        parabrisas,
        portaDianteiraEsquerda,
        portaTraseiraEsquerda,
        lateralEsquerdo,
        lateralDireito,
        portaTraseiraDireita,
        portaDianteiraDireita
      },
      ...baseData
    }
    navigation.navigate('Presentation', dataGlasses)
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
        <ScrollView>
          <S.ContainerHeader>
            <S.Title>Analise de Vidros</S.Title>
          </S.ContainerHeader>
          <Form ref={formRef} onSubmit={handleGlasses}>
            <S.ContainerItems>
              <S.ContainerItem>
                <S.TitleItem>Parabrisas</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectGlasses}
                  onValueChange={value => setParabrisas(value)}
                />
              </S.ContainerItem>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.ContainerItem>
                <S.TitleItem>Porta Dianteira Esquerda</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectGlasses}
                  onValueChange={value => setPortaDianteiraEsquerda(value)}
                />
              </S.ContainerItem>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.ContainerItem>
                <S.TitleItem>Porta Traseira Esquerda</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectGlasses}
                  onValueChange={value => setPortaTraseiraEsquerda(value)}
                />
              </S.ContainerItem>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.ContainerItem>
                <S.TitleItem>Lateral Esquerdo</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectGlasses}
                  onValueChange={value => setLateralEsquerdo(value)}
                />
              </S.ContainerItem>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.ContainerItem>
                <S.TitleItem>Lateral Direito</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectGlasses}
                  onValueChange={value => setLateralDireito(value)}
                />
              </S.ContainerItem>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.ContainerItem>
                <S.TitleItem>Porta Traseira Direita</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectGlasses}
                  onValueChange={value => setPortaTraseiraDireita(value)}
                />
              </S.ContainerItem>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.ContainerItem>
                <S.TitleItem>Porta Dianteira Direita</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectGlasses}
                  onValueChange={value => setPortaDianteiraDireita(value)}
                />
              </S.ContainerItem>
            </S.ContainerItems>
          </Form>
        </ScrollView>
      </S.Container>
    </ContainerPage>
  )
}

export default Glasses
