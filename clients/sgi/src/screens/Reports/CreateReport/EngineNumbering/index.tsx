import React, { useEffect, useState, useRef, useCallback } from 'react'
import { LogoHeader, Button, ContainerPage } from '@shared/components'
import { ScrollView } from 'react-native'
import { CheckBox } from 'react-native-elements'

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { useNavigation, useRoute } from '@react-navigation/native'

import * as S from './styles'

const EngineNumbering: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)

  const [
    motorcaractapartsemefabrisemvestadult,
    setMotorcaractapartsemefabrisemvestadult
  ] = useState(false)

  const [nummotorsemcaractbasenacia, setNummotorsemcaractbasenacia] = useState(
    false
  )

  const [
    veicunumdemotoracimadescritsemvestiadult,
    setVeicunumdemotoracimadescritsemvestiadult
  ] = useState(false)

  const [nummotordiverbasenacional, setNummotordiverbasenacional] = useState(
    false
  )
  const [
    veicusemnummotorblocoaparentvirgcomcaract,
    setVeicusemnummotorblocoaparentvirgcomcaract
  ] = useState(false)

  const [
    analiscaractadultdestrdoscaract,
    setAnaliscaractadultdestrdoscaract
  ] = useState(false)

  const [
    analiscomcaractadultporlixaouabrasao,
    setAnaliscomcaractadultporlixaouabrasao
  ] = useState(false)

  const [analicaractadultremarca, setAnalicaractadultremarca] = useState(false)

  const [
    analissemcaractaparentadult,
    setAnalissemcaractaparentadult
  ] = useState(false)

  const [aparentsemefabric, setaparentsemefabric] = useState(false)

  const [
    comadiantprocesdeoxisemcaractadult,
    setComadiantprocesdeoxisemcaractadult
  ] = useState(false)

  const [nmotorsemcondidevisualiz, setNmotorsemcondidevisualiz] = useState(
    false
  )

  const [motoraprecaractdepecarepo, setMotoraprecaractdepecarepo] = useState(
    false
  )

  const [
    remarspconfdocumecrvlapresent,
    setRemarspconfdocumecrvlapresent
  ] = useState(false)

  const [semplaqueidenti, setSemplaqueidenti] = useState(false)

  const [baseData, setBaseData] = useState({})
  const { params } = useRoute()
  const routeParams = params

  async function handleEngineNumbering(data) {
    const dataEngineNumbering = {
      numeroDoMotor: {
        motorcaractapartsemefabrisemvestadult,
        nummotorsemcaractbasenacia,
        veicunumdemotoracimadescritsemvestiadult,
        nummotordiverbasenacional,
        veicusemnummotorblocoaparentvirgcomcaract,
        analiscaractadultdestrdoscaract,
        analiscomcaractadultporlixaouabrasao,
        analicaractadultremarca,
        analissemcaractaparentadult,
        aparentsemefabric,
        comadiantprocesdeoxisemcaractadult,
        nmotorsemcondidevisualiz,
        motoraprecaractdepecarepo,
        remarspconfdocumecrvlapresent,
        semplaqueidenti
      },
      ...baseData
    }
    navigation.navigate('Pictures', dataEngineNumbering)
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
            <S.Title>Número motor</S.Title>
          </S.ContainerHeader>
          <S.ContainerItens>
            <CheckBox
              title="Motor Com Característica Aparentemente Semelhantes as do Fabricante, Sem Vestigios de Adulteração"
              checked={motorcaractapartsemefabrisemvestadult}
              onPress={() =>
                setMotorcaractapartsemefabrisemvestadult(
                  !motorcaractapartsemefabrisemvestadult
                )
              }
            />
            <CheckBox
              title="Nº de Motor sem Cadastro na Base Nacional"
              checked={nummotorsemcaractbasenacia}
              onPress={() =>
                setNummotorsemcaractbasenacia(!nummotorsemcaractbasenacia)
              }
            />
            <CheckBox
              title="Veículo com Nº de Motor Acima Descrito Sem Vestigios de Adulteração"
              checked={veicunumdemotoracimadescritsemvestiadult}
              onPress={() =>
                setVeicunumdemotoracimadescritsemvestiadult(
                  !veicunumdemotoracimadescritsemvestiadult
                )
              }
            />
            <CheckBox
              title="Nº de Motor Divergente da Base Nacional"
              checked={nummotordiverbasenacional}
              onPress={() =>
                setNummotordiverbasenacional(!nummotordiverbasenacional)
              }
            />
            <CheckBox
              title="Veiculo Sem Nº de Motor no Bloco Aparentemente Virgem, com Características"
              checked={veicusemnummotorblocoaparentvirgcomcaract}
              onPress={() =>
                setVeicusemnummotorblocoaparentvirgcomcaract(
                  !veicusemnummotorblocoaparentvirgcomcaract
                )
              }
            />
            <CheckBox
              title="Aparentemente Semelhantes as do Fabricante"
              checked={aparentsemefabric}
              onPress={() => setaparentsemefabric(!aparentsemefabric)}
            />

            <CheckBox
              title="Analisado com Características de Adulteração por Destruição dos Caracteres"
              checked={analiscaractadultdestrdoscaract}
              onPress={() =>
                setAnaliscaractadultdestrdoscaract(
                  !analiscaractadultdestrdoscaract
                )
              }
            />
            <CheckBox
              title="Analisado com Características de Adulteração por Lixamento/Abrasão"
              checked={analiscomcaractadultporlixaouabrasao}
              onPress={() =>
                setAnaliscomcaractadultporlixaouabrasao(
                  !analiscomcaractadultporlixaouabrasao
                )
              }
            />
            <CheckBox
              title="Analisado com Características de Adulteração por Remarcação"
              checked={analicaractadultremarca}
              onPress={() =>
                setAnalicaractadultremarca(!analicaractadultremarca)
              }
            />

            <CheckBox
              title="Analisado Sem Características Aparentes de Adulteração"
              checked={analissemcaractaparentadult}
              onPress={() =>
                setAnalissemcaractaparentadult(!analissemcaractaparentadult)
              }
            />
            <CheckBox
              title="Com Adiantado Processo de Oxidação Sem Características Adulteração"
              checked={comadiantprocesdeoxisemcaractadult}
              onPress={() =>
                setComadiantprocesdeoxisemcaractadult(
                  !comadiantprocesdeoxisemcaractadult
                )
              }
            />
            <CheckBox
              title="Nº do Motor Sem Condições de Visualização"
              checked={nmotorsemcondidevisualiz}
              onPress={() =>
                setNmotorsemcondidevisualiz(!nmotorsemcondidevisualiz)
              }
            />

            <CheckBox
              title="Motor Apresentava Caracteristica de Peça de Reposição"
              checked={motoraprecaractdepecarepo}
              onPress={() =>
                setMotoraprecaractdepecarepo(!motoraprecaractdepecarepo)
              }
            />
            <CheckBox
              title="Remarcado SP conforme Documento CRVL Apresentado"
              checked={remarspconfdocumecrvlapresent}
              onPress={() =>
                setRemarspconfdocumecrvlapresent(!remarspconfdocumecrvlapresent)
              }
            />

            <CheckBox
              title="Sem a Plaqueta de Identificação"
              checked={semplaqueidenti}
              onPress={() => setSemplaqueidenti(!semplaqueidenti)}
            />
          </S.ContainerItens>
        </ScrollView>
      </S.Container>
    </ContainerPage>
  )
}

export default EngineNumbering
