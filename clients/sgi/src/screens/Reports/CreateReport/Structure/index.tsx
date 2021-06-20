import React, { useEffect, useState, useRef, useCallback } from 'react'

import { LogoHeader, Button, ContainerPage } from '@shared/components'
import { ScrollView } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import * as S from './styles'

const Structure: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)

  const [cortreparo, setCortReparo] = useState(false)
  const [colisao, setColisao] = useState(false)
  const [emendatetodiant, setEmendaTetoDian] = useState(false)
  const [emendadiant, setEmendadiant] = useState(false)
  const [emendatetotrase, setEmendaTetoTrase] = useState(false)
  const [emendatrase, setEmendatrase] = useState(false)
  const [emendateto, setEmendateto] = useState(false)
  const [emendalateraldireit, setEmendalateraldireit] = useState(false)
  const [emendalateralesque, setEmendalateralesque] = useState(false)
  const [colisaoserreparado, setColisaoserreparado] = useState(false)

  const [baseData, setBaseData] = useState({})

  const { params } = useRoute()

  const routeParams = params

  async function handleStruture (data) {
    const strutureData = {
      estrutura: {
        cortreparo,
        colisao,
        emendatetodiant,
        emendadiant,
        emendatetotrase,
        emendatrase,
        emendateto,
        emendalateraldireit,
        emendalateralesque,
        colisaoserreparado
      },
      ...baseData
    }
    navigation.navigate('Chassi', strutureData)
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
            <S.Title>Estrutura Do Veiculo</S.Title>
          </S.ContainerHeader>
          <Form ref={formRef} onSubmit={handleStruture}>
            <S.ContainerItens>
              <CheckBox
                title="Estrutura Não Apresenta cortes e/ou reparos aparentes"
                checked={cortreparo}
                onPress={() => setCortReparo(!cortreparo)}
              />

              <CheckBox
                title="Não apresenta vestígio aparentes de colisão"
                checked={colisao}
                onPress={() => setColisao(!colisao)}
              />
              <CheckBox
                title="Apresenta existência de corte caracteriza emenda para substituição
                  da dianteira com teto"
                checked={emendatetodiant}
                onPress={() => setEmendaTetoDian(!emendatetodiant)}
              />

              <CheckBox
                title="Apresenta existência de corte que caracteriza emenda para substituição da dianteira"
                checked={emendadiant}
                onPress={() => setEmendadiant(!emendadiant)}
              />

              <CheckBox
                title="Apresenta existência de corte que caracteriza emenda para substituição da traseira com teto"
                checked={emendatetotrase}
                onPress={() => setEmendaTetoTrase(!emendatetotrase)}
              />

              <CheckBox
                title="Apresenta existência de corte que caracteriza emenda para substituição da traseira"
                checked={emendatrase}
                onPress={() => setEmendatrase(!emendatrase)}
              />

              <CheckBox
                title="Apresenta Existência de Corte que Caracteriza Emenda para Substituição do Teto"
                checked={emendateto}
                onPress={() => setEmendateto(!emendateto)}
              />

              <CheckBox
                title="Apresenta Existência de Corte que Caracteriza Emenda para Substituição da Lateral Direita"
                checked={emendalateraldireit}
                onPress={() => setEmendalateraldireit(!emendalateraldireit)}
              />

              <CheckBox
                title="Apresenta Existência de Corte que Caracteriza Emenda para Substituição da Lateral Esquerda"
                checked={emendalateralesque}
                onPress={() => setEmendalateralesque(!emendalateralesque)}
              />

              <CheckBox
                title="Com Vestígios Aparentes de Colisão Devendo ser Reparado"
                checked={colisaoserreparado}
                onPress={() => setColisaoserreparado(!colisaoserreparado)}
              />
            </S.ContainerItens>
          </Form>
        </ScrollView>
      </S.Container>
    </ContainerPage>
  )
}

export default Structure
