/* eslint-disable no-unused-expressions */
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { ScrollView } from 'react-native'
import {
  LogoHeader,
  SelectOptions,
  Button,
  ContainerPage
} from '@shared/components'

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { useNavigation, useRoute } from '@react-navigation/native'

import selectCheckItens from './selectChekItens.json'

import * as S from './styles'

const CheckItens: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const navigation = useNavigation()
  const [lateralDianteira, setLateralDianteira] = useState('')

  const [luzDeFreio, setLuzDeFreio] = useState('')
  const [luzDeRe, setLuzDeRe] = useState('')
  const [setas, setSetas] = useState('')
  const [piscaAlerta, setPiscaAlerta] = useState('')
  const [buzina, setBuzina] = useState('')
  const [limpadorDeParabrisa, setLimpadorDeParabrisa] = useState('')
  const [funelaria, setFunelaria] = useState('')
  const [pintura, setPintura] = useState('')
  const [extintor, setExtintor] = useState('')
  const [escapamento, setEscapamento] = useState('')
  const [placa, setPlacas] = useState('')
  const [suspensao, setSuspensao] = useState('')
  const [peliculaRefletiva, setPeliculaRefletiva] = useState('')
  const [tacografo, setTacografo] = useState('')
  const [macaco, setMacaco] = useState('')
  const [protetorDeRoda, setProtetorRoda] = useState('')
  const [numercaoDoChassi, setNumeracaoDoChassi] = useState('')
  const [encostoDeCabeca, setEncostoDeCabeca] = useState('')
  const [nChassiGravadaVidros, setNumChassiGravaVidro] = useState('')
  const [plaquetaDaCarroceria, setPlaquetaDaCarroceria] = useState('')
  const [numeracaoDoMotor, setNumeracaoDoMotor] = useState('')
  const [paraSolCondutor, setParaSolCondutor] = useState('')
  const [pneus, setPneus] = useState('')
  const [pneusDentroDoPadrao, setPneusDentroDoPadrao] = useState('')
  const [freioDeMao, setFreioDeMao] = useState('')
  const [lanternaTraseira, setLanternaTraseira] = useState('')
  const [farolBaixo, setFarolBaixo] = useState('')
  const [farolAlto, setFarolAlto] = useState('')
  const [estepe, setEstepe] = useState('')
  const [chaveDeRoda, setChaveDeRoda] = useState('')

  const [baseData, setBaseData] = useState({})

  const { params } = useRoute()

  const routeParams = params

  async function handleCheckItens (data) {
    const dataItens = {
      itensDeVerificacao: {
        lateralDianteira,
        luzDeFreio,
        luzDeRe,
        setas,
        piscaAlerta,
        buzina,
        limpadorDeParabrisa,
        funelaria,
        pintura,
        extintor,
        escapamento,
        placa,
        suspensao,
        peliculaRefletiva,
        tacografo,
        macaco,
        protetorDeRoda,
        numercaoDoChassi,
        encostoDeCabeca,
        nChassiGravadaVidros,
        plaquetaDaCarroceria,
        numeracaoDoMotor,
        paraSolCondutor,
        pneus,
        pneusDentroDoPadrao,
        freioDeMao,
        lanternaTraseira,
        farolBaixo,
        farolAlto,
        estepe,
        chaveDeRoda
      },
      ...routeParams
    }
    navigation.navigate('Glasses', dataItens)
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
            <S.Title>Itens de Verificação</S.Title>
          </S.ContainerHeader>
          <Form ref={formRef} onSubmit={handleCheckItens}>
            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Lateral Dianteira</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setLateralDianteira(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Luz de Freio</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setLuzDeFreio(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Luz de Ré</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setLuzDeRe(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Setas</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setSetas(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Pisca Alerta</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setPiscaAlerta(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Buzina</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setBuzina(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Limpador de Parabrisa</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setLimpadorDeParabrisa(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Funelaria</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setFunelaria(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Pintura</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setPintura(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Extintor</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setExtintor(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Escapamento</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setEscapamento(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Placas</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setPlacas(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Suspensão</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setSuspensao(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Película Refletiva</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setPeliculaRefletiva(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Tacógrafo</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setTacografo(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Macaco</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setMacaco(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Protetor de Roda/caminhão</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setProtetorRoda(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Numeração do Chassi</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setNumeracaoDoChassi(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Encosto de Cabeça</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setEncostoDeCabeca(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>N. Chassi Gravada/Vidros</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setNumChassiGravaVidro(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Plaqueta da Carroceria</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setPlaquetaDaCarroceria(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Numeração do Motor</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setNumeracaoDoMotor(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Para-sol Condutor</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setParaSolCondutor(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Pneus</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setPneus(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Pneus Dentro do Padrão</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setPneusDentroDoPadrao(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Freio de Mão</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setFreioDeMao(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Lanterna Traseira</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setLanternaTraseira(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Farol Baixo</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setFarolBaixo(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Farol Alto</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setFarolAlto(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Estepe</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setEstepe(value)}
                />
              </S.Item>
            </S.ContainerItems>

            <S.ContainerItems>
              <S.Item>
                <S.TitleItem>Chave de Roda</S.TitleItem>
              </S.Item>
              <S.Item>
                <SelectOptions
                  items={selectCheckItens}
                  onValueChange={value => setChaveDeRoda(value)}
                />
              </S.Item>
            </S.ContainerItems>
          </Form>
        </ScrollView>
      </S.Container>
    </ContainerPage>
  )
}

export default CheckItens
