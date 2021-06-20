/* eslint-disable no-unused-expressions */
import React, { useEffect, useState, useRef, useCallback } from 'react'
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

import selectPainting from './selectPainting.json'

import * as S from './styles'

const Painting: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const navigation = useNavigation()

  const [capo, setCapo] = useState('')
  const [paraLamaDiantDireito, setParaLamaDiantDireito] = useState('')
  const [paraLamaDiantEsquerdo, setParaLamaDiantEsquerdo] = useState('')
  const [portaDiantDireita, setPortaDiantDireita] = useState('')
  const [portaDiantEsqueda, setPortaDiantEsquerda] = useState('')
  const [portaTraseiraDireita, setPortaTraseiraDireita] = useState('')
  const [portaTraseiraEsquerda, setPortaTraseiraEsquerda] = useState('')
  const [lateralTraseiraEsquerda, setLateralTraseiraEsquerda] = useState('')
  const [lateralTraseiraDireito, setLateralTraseiraDireito] = useState('')
  const [capoTraseiro, setCapoTraseiro] = useState('')
  const [teto, setTeto] = useState('')
  const [parachoqueDianteiro, setParachoqueDianteiro] = useState('')
  const [parachoqueTraseiro, setParachoqueTraseiro] = useState('')

  const [baseData, setBaseData] = useState({})
  const { params } = useRoute()
  const routeParams = params

  async function handlePaiting (data) {
    const dataHandle = {
      pintura: {
        capo,
        paraLamaDiantDireito,
        paraLamaDiantEsquerdo,
        portaDiantDireita,
        portaDiantEsqueda,
        portaTraseiraDireita,
        portaTraseiraEsquerda,
        lateralTraseiraEsquerda,
        lateralTraseiraDireito,
        capoTraseiro,
        teto,
        parachoqueDianteiro,
        parachoqueTraseiro
      },
      ...baseData
    }

    navigation.navigate('Internal', dataHandle)
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
            <S.Title>Pintura</S.Title>
          </S.ContainerHeader>
          <Form ref={formRef} onSubmit={handlePaiting}>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Capô</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPainting}
                  onValueChange={value => setCapo(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Para-lama Dian. Direito</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPainting}
                  onValueChange={value => setParaLamaDiantDireito(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Para-lama Dian. Esquer.</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPainting}
                  onValueChange={value => setParaLamaDiantEsquerdo(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Porta Dianteira Direita</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPainting}
                  onValueChange={value => setPortaDiantDireita(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Porta Dianteira Esquerda</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPainting}
                  onValueChange={value => setPortaDiantEsquerda(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Porta Traseira Direita</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPainting}
                  onValueChange={value => setPortaTraseiraDireita(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Porta Traseira Esquerda</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPainting}
                  onValueChange={value => setPortaTraseiraEsquerda(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Lateral Traseira Esquerda</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPainting}
                  onValueChange={value => setLateralTraseiraEsquerda(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Lateral Traseira Direito</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPainting}
                  onValueChange={value => setLateralTraseiraDireito(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Capô Traseiro</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPainting}
                  onValueChange={value => setCapoTraseiro(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Teto</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPainting}
                  onValueChange={value => setTeto(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Para-choque Dianteiro</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPainting}
                  onValueChange={value => setParachoqueDianteiro(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Para-choque Traseiro</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectPainting}
                  onValueChange={value => setParachoqueTraseiro(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
          </Form>
        </ScrollView>
      </S.Container>
    </ContainerPage>
  )
}

export default Painting
