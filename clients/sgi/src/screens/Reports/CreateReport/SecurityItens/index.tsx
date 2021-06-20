/* eslint-disable no-unused-expressions */
import React, { useEffect, useCallback, useState, useRef } from 'react'
import { ScrollView } from 'react-native'

import {
  LogoHeader,
  Button,
  SelectOptions,
  ContainerPage
} from '@shared/components'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import selectSecurityItens from './selectSecurityItens.json'

import * as S from './styles'

const SecurityItens: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const navigation = useNavigation()

  const [pneu, setPneu] = useState('')
  const [setas, setSetas] = useState('')
  const [luzDePosicao, setLuzDePosicao] = useState('')
  const [farois, setFarois] = useState('')
  const [extintorVencido, setExtintorVencido] = useState('')
  const [luzDeRe, setLuzDeRe] = useState('')
  const [luzDeFreio, setLuzDeFreio] = useState('')
  const [luzDePlaca, setLuzDePlaca] = useState('')
  const [buzina, setBuzina] = useState('')
  const [placa, setPlaca] = useState('')

  const [baseData, setBaseData] = useState({})

  const { params } = useRoute()

  const routeParams = params

  async function handleSecurityItens(data) {
    const dataSecurityItens = {
      itensSeguranca: {
        pneu,
        setas,
        luzDePosicao,
        farois,
        extintorVencido,
        luzDeRe,
        luzDeFreio,
        luzDePlaca,
        buzina,
        placa
      },
      base: {
        ...routeParams
      }
    }

    navigation.navigate('HangTags', dataSecurityItens)
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
            <S.Title>Itens de Segurança</S.Title>
          </S.ContainerHeader>
          <Form ref={formRef} onSubmit={handleSecurityItens}>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Pneu</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectSecurityItens}
                  onValueChange={value => setPneu(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Setas</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectSecurityItens}
                  onValueChange={value => setSetas(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Luz de Posição</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectSecurityItens}
                  onValueChange={value => setLuzDePosicao(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Faróis</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectSecurityItens}
                  onValueChange={value => setFarois(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Luz da Placa</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectSecurityItens}
                  onValueChange={value => setLuzDePlaca(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Extintor Vencido</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectSecurityItens}
                  onValueChange={value => setExtintorVencido(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Luz de Ré</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectSecurityItens}
                  onValueChange={value => setLuzDeRe(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Luz de Freio</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectSecurityItens}
                  onValueChange={value => setLuzDeFreio(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Buzina</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectSecurityItens}
                  onValueChange={value => setBuzina(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Placa</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectSecurityItens}
                  onValueChange={value => setPlaca(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
          </Form>
        </ScrollView>
      </S.Container>
    </ContainerPage>
  )
}

export default SecurityItens
