/* eslint-disable no-unused-expressions */
import React, { useEffect, useState, useRef } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { SelectOptions, Button, ContainerPage } from '@shared/components'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { useNavigation, useRoute } from '@react-navigation/native'

import selectInternal from './selectInternal.json'

import * as S from './styles'

const Internal: React.FC = ({ state, dispatch }) => {
  const formRef = useRef<FormHandles>(null)
  const navigation = useNavigation()

  const [portaMotorista, setPortaMotorista] = useState('')
  const [portaCarona, setPortaCarona] = useState('')
  const [portaLuvas, setPortaLuvas] = useState('')
  const [portaTrazDireita, setPortaTrazDireita] = useState('')
  const [portaTrazEsquerda, setPortaTrazEsquerda] = useState('')
  const [autofalantesPortas, setAutofalantesPortas] = useState('')
  const [bancosDianteiros, setBancosDianteiros] = useState('')
  const [regulagemBancos, setRegulagemBancos] = useState('')
  const [enconstoCabeca, setEncostoCabeca] = useState('')
  const [cintoSeguranca, setCintoSeguranca] = useState('')
  const [tapetes, setTapetes] = useState('')
  const [borrachasPedal, setBorrachasPedal] = useState('')
  const [painelDianteiro, setPainelDianteiro] = useState('')
  const [saidasDeAr, setSaidasDeAr] = useState('')
  const [quebraSol, setQuebraSol] = useState('')
  const [tetoTecido, setTetoTecido] = useState('')
  const [luzInternas, setLuzInternas] = useState('')
  const [espelhoQuebraSol, setEspelhoQuebraSol] = useState('')
  const [portaOculos, setPortaOculos] = useState('')
  const [consoleCentral, setConsoleCentral] = useState('')
  const [tampaConsoleCentral, setTampaConsoleCentral] = useState('')
  const [freioDeMao, setFreioDeMao] = useState('')
  const [acendedorCigarro, setAcendedorCigarro] = useState('')
  const [usb, setUsb] = useState('')
  const [radio, setRadio] = useState('')
  const [midiaPlayer, setMidiaPlayer] = useState('')
  const [tela, setTela] = useState('')
  const [som, setSom] = useState('')
  const [volante, setVolante] = useState('')
  const [cambio, setCambio] = useState('')
  const [botoes, setBotoes] = useState('')
  const [arCondicionado, setArCondicionado] = useState('')
  const [buzina, setBuzina] = useState('')
  const [setas, setSetas] = useState('')
  const [vidrosEletricosDiant, setVidrosEletricosDiant] = useState('')
  const [vidrosEletricosTrase, setVidrosEletricosTrase] = useState('')
  const [faroiesXenon, setFaroisXenon] = useState('')
  const [alarme, setAlarme] = useState('')
  const [sensorDeRe, setSensorDeRe] = useState('')
  const [cameraRe, setCameraRe] = useState('')
  const [regulagemRetrovisor, setRegulagemRetrovisor] = useState('')
  const [funcionamento4x4, setFuncionamento4x4] = useState('')
  const [aberturaCapo, setAberturaCapo] = useState('')
  const [passagemMarchas, setPassagemMarchas] = useState('')
  const [luzDePainel, setLuzDePainel] = useState('')
  const [bancosTraseiros, setBancosTraseiros] = useState('')
  const [tetoSolar, setTetoSolar] = useState('')
  const [espelhoInterno, setEspelhoInterno] = useState('')
  const [alcasDeApoio, setAlcasDeApoio] = useState('')

  const [baseData, setBaseData] = useState({})
  const { params } = useRoute()
  const routeParams = params

  async function handleInternal(data) {
    const dataInternal = {
      areaInterna: {
        portaMotorista,
        portaCarona,
        portaLuvas,
        portaTrazDireita,
        portaTrazEsquerda,
        autofalantesPortas,
        bancosDianteiros,
        regulagemBancos,
        enconstoCabeca,
        cintoSeguranca,
        tapetes,
        borrachasPedal,
        painelDianteiro,
        saidasDeAr,
        quebraSol,
        tetoTecido,
        luzInternas,
        espelhoQuebraSol,
        portaOculos,
        consoleCentral,
        tampaConsoleCentral,
        freioDeMao,
        acendedorCigarro,
        usb,
        radio,
        midiaPlayer,
        tela,
        som,
        volante,
        cambio,
        botoes,
        arCondicionado,
        buzina,
        setas,
        vidrosEletricosDiant,
        vidrosEletricosTrase,
        faroiesXenon,
        alarme,
        sensorDeRe,
        cameraRe,
        regulagemRetrovisor,
        funcionamento4x4,
        aberturaCapo,
        passagemMarchas,
        luzDePainel,
        bancosTraseiros,
        tetoSolar,
        espelhoInterno,
        alcasDeApoio
      },
      ...baseData
    }

    navigation.navigate('Structure', dataInternal)
  }

  async function hasBaseData() {
    const data = {
      routeParams
    }
    setBaseData(routeParams)
  }

  function toggleInternal () {
    const areaInterna = {
      portaMotorista,
      portaCarona,
      portaLuvas,
      portaTrazDireita,
      portaTrazEsquerda,
      autofalantesPortas,
      bancosDianteiros,
      regulagemBancos,
      enconstoCabeca,
      cintoSeguranca,
      tapetes,
      borrachasPedal,
      painelDianteiro,
      saidasDeAr,
      quebraSol,
      tetoTecido,
      luzInternas,
      espelhoQuebraSol,
      portaOculos,
      consoleCentral,
      tampaConsoleCentral,
      freioDeMao,
      acendedorCigarro,
      usb,
      radio,
      midiaPlayer,
      tela,
      som,
      volante,
      cambio,
      botoes,
      arCondicionado,
      buzina,
      setas,
      vidrosEletricosDiant,
      vidrosEletricosTrase,
      faroiesXenon,
      alarme,
      sensorDeRe,
      cameraRe,
      regulagemRetrovisor,
      funcionamento4x4,
      aberturaCapo,
      passagemMarchas,
      luzDePainel,
      bancosTraseiros,
      tetoSolar,
      espelhoInterno,
      alcasDeApoio
    }

    return {
      type: 'TOGGLE_INTERNAL',
      areaInterna
    }
  }

  useEffect(() => {
    hasBaseData()
  }, [])

  return (
    <ContainerPage>
      <S.Container>
        <ScrollView>
          <S.HeaderTitle>
            <S.Title>Area Interna</S.Title>
          </S.HeaderTitle>

          <Form ref={formRef} onSubmit={handleInternal}>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Porta Motorista</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setPortaMotorista(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Porta Carona</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setPortaCarona(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Porta Luvas</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setPortaLuvas(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Porta Traz. Direita</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setPortaTrazDireita(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Porta Trazeira Esquerda</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setPortaTrazEsquerda(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Autofalantes Portas</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setAutofalantesPortas(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Bancos Dianteiros</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setBancosDianteiros(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Regulagem Bancos</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setRegulagemBancos(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Encosto Cabeca</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setEncostoCabeca(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Cinto Segurança</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setCintoSeguranca(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Tapetes</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setTapetes(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Painel Dianteiro</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setBorrachasPedal(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Borrachas Pedal</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setPainelDianteiro(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem> Saidas de ar</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setSaidasDeAr(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Quebra Sol</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setQuebraSol(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Teto Tecido</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setTetoTecido(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Luz Internas</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setLuzInternas(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Espelho do Quebra Sol</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setEspelhoQuebraSol(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Porta Óculos</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setPortaOculos(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Console Central</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setConsoleCentral(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Tampa Console Central</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setTampaConsoleCentral(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Freio de Mão</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setFreioDeMao(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Acendedor Cigarro</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setAcendedorCigarro(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Usb</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setUsb(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Radio</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setRadio(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Midia Player</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setMidiaPlayer(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Tela</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setTela(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Som</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setSom(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Volante</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setVolante(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Câmbio</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setCambio(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Botões</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setBotoes(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Ar Condicionado</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setArCondicionado(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Buzina</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setBuzina(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Setas</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setSetas(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Vidros Elétricos Diant</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setVidrosEletricosDiant(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Vidros Elétricos Tras</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setVidrosEletricosTrase(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Farois Xenon</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setFaroisXenon(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Alarme</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setAlarme(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Sensor de Ré</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setSensorDeRe(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Camera Ré</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setCameraRe(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Regulagem Retrovisor</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setRegulagemRetrovisor(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Funcionamento 4x4</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setFuncionamento4x4(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Abertura Capô</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setAberturaCapo(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Passagem Marchas</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setPassagemMarchas(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Luz de Painel</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setLuzDePainel(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Bancos Traseiros</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setBancosTraseiros(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Teto Solar</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setTetoSolar(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Espelhos Interno</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setEspelhoInterno(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>

            <S.ContainerInfo>
              <S.ContainerItem>
                <S.TitleItem>Alças de Apoio</S.TitleItem>
              </S.ContainerItem>
              <S.ContainerItem>
                <SelectOptions
                  items={selectInternal}
                  onValueChange={value => setAlcasDeApoio(value)}
                />
              </S.ContainerItem>
            </S.ContainerInfo>
          </Form>
          <Button onPress={() => dispatch(toggleInternal())}>Confirmar</Button>
        </ScrollView>
      </S.Container>
    </ContainerPage>
  )
}

export default connect(state => ({ state: state }))(Internal)
