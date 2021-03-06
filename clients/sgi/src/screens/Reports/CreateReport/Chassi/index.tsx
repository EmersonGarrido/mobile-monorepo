/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState, useRef, useCallback } from 'react'

import { ScrollView } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { LogoHeader, Button, ContainerPage } from '@shared/components'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { useNavigation, useRoute } from '@react-navigation/native'

import * as S from './styles'

const Chassi: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)

  const [
    comamassadodachapasuporteareagravacao,
    setcomamassadodachapasuporteareagravacao
  ] = useState(false)

  const [
    semcaracteconferebin,
    setsemcaracteconferebin
  ] = useState(false)

  const [
    comcaractadultporimplant,
    setcomcaractadultporimplant
  ] = useState(false)

  const [
    comcaracadultporremarca,
    setcomcaracadultporremarca
  ] = useState(false)

  const [
    comconcertdefunilaepintuchapasuportesemcaractadultconferebin,
    setcomconcertdefunilaepintuchapasuportesemcaractadultconferebin
  ] = useState(false)

  const [
    comconcertdefunilaepintuchapasuportesemcaractadultnaoconferebin,
    setcomconcertdefunilaepintuchapasuportesemcaractadultnaoconferebin
  ] = useState(false)

  const [
    cominiciooxinachapasuportesemcaractadultconferebin,
    setcominiciooxinachapasuportesemcaractadultconferebin
  ] = useState(false)

  const [
    comproceoxidadachapasuporteimpossibiconferenumeracao,
    setcomproceoxidadachapasuporteimpossibiconferenumeracao
  ] = useState(
    false

  )
  const [
    semcaracteaparentadultconferecombin,
    setsemcaracteaparentadultconferecombin
  ] = useState(
    false

  )
  const [
    semcaracteaparentadultnaoconferecombin,
    setsemcaracteaparentadultnaoconferecombin
  ] = useState(false)

  const [
    remarconformdocumentcrvlapresent,
    setremarconformdocumentcrvlapresent
  ] = useState(false)

  const [
    basegravacaodonumerochassiapresentamarcadelixaouabrasa,
    setbasegravacaodonumerochassiapresentamarcadelixaouabrasa
  ] = useState(false)

  const [
    comcaracadultporsubstchapasuport,
    setcomcaracadultporsubstchapasuport
  ] = useState(false)

  const [
    cominiciooxinachapasuportesemcaractadultnaoconferebin,
    setcominiciooxinachapasuportesemcaractadultnaoconferebin
  ] = useState(false)

  const [baseData, setBaseData] = useState({})

  const { params } = useRoute()

  const routeParams = params

  async function handleChassi (data) {
    const dataChassi = {
      chassi: {
        comamassadodachapasuporteareagravacao,
        semcaracteconferebin,
        comcaractadultporimplant,
        comcaracadultporremarca,
        comconcertdefunilaepintuchapasuportesemcaractadultconferebin,
        comconcertdefunilaepintuchapasuportesemcaractadultnaoconferebin,
        cominiciooxinachapasuportesemcaractadultconferebin,
        comproceoxidadachapasuporteimpossibiconferenumeracao,
        semcaracteaparentadultconferecombin,
        semcaracteaparentadultnaoconferecombin,
        remarconformdocumentcrvlapresent,
        basegravacaodonumerochassiapresentamarcadelixaouabrasa,
        comcaracadultporsubstchapasuport,
        cominiciooxinachapasuportesemcaractadultnaoconferebin
      },
      ...baseData
    }
    navigation.navigate('EngineNumbering', dataChassi)
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

          <S.HeaderTitle>
            <S.Title>Chassi</S.Title>
          </S.HeaderTitle>
          <Form ref={formRef} onSubmit={handleChassi}>
            <S.ContainerInfo>
              <S.ContainerItem>
                <CheckBox
                  title="Com Amassado da Chapa Suporte na ??rea de Grava????o"
                  checked={comamassadodachapasuporteareagravacao}
                  onPress={() => setcomamassadodachapasuporteareagravacao(!comamassadodachapasuporteareagravacao)}

                />
              </S.ContainerItem>

              <S.ContainerItem>
                <CheckBox
                  title="Sem Caracterizar Confere Bin"
                  checked={semcaracteconferebin}
                  onPress={() => setsemcaracteconferebin(!semcaracteconferebin)}

                />
              </S.ContainerItem>

              <S.ContainerItem>
                <CheckBox
                  title="Com Caracter??sticas de Adultera????o Por Implante"
                  checked={comcaractadultporimplant}
                  onPress={() => setcomcaractadultporimplant(!comcaractadultporimplant)}

                />
              </S.ContainerItem>

              <S.ContainerItem>
                <CheckBox
                  title="Com Caracter??sticas de Adultera????o Por Remarca????o"
                  checked={comcaracadultporremarca}
                  onPress={() => setcomcaracadultporremarca(!comcaracadultporremarca)}

                />
              </S.ContainerItem>

              <S.ContainerItem>
                <CheckBox
                  title="Com Caracter??sticas de Adultera????o Por Substitui????o da Chapa Suporte"
                  checked={comcaracadultporsubstchapasuport}
                  onPress={() => setcomcaracadultporsubstchapasuport(!comcaracadultporsubstchapasuport)}

                />
              </S.ContainerItem>

              <S.ContainerItem>
                <CheckBox
                  title="Com Concertos de Funelaria e Pintura Na Chapa Suporte Sem Caracterizar Adultera????o / N??o Confere Bin"
                  checked={comconcertdefunilaepintuchapasuportesemcaractadultnaoconferebin}
                  onPress={() =>
                    setcomconcertdefunilaepintuchapasuportesemcaractadultnaoconferebin(
                      !comconcertdefunilaepintuchapasuportesemcaractadultnaoconferebin
                    )}

                />
              </S.ContainerItem>

              <S.ContainerItem>
                <CheckBox
                  title="Com Concertos de Funelaria e Pintura Na Chapa Suporte Sem Caracterizar Adultera????o / Confere Bin"
                  checked={comconcertdefunilaepintuchapasuportesemcaractadultconferebin}
                  onPress={() =>
                    setcomconcertdefunilaepintuchapasuportesemcaractadultconferebin(
                      !comconcertdefunilaepintuchapasuportesemcaractadultconferebin
                    )}

                />
              </S.ContainerItem>

              <S.ContainerItem>
                <CheckBox
                  title="Com Inicio de Oxida????o na Chapa Suporte, Sem Caracterizar Adultera????o / Confere Bin"
                  checked={cominiciooxinachapasuportesemcaractadultconferebin}
                  onPress={() =>
                    setcominiciooxinachapasuportesemcaractadultconferebin(
                      !cominiciooxinachapasuportesemcaractadultconferebin
                    )}

                />
              </S.ContainerItem>

              <S.ContainerItem>
                <CheckBox
                  title="Com Inicio de Oxida????o na Chapa Suporte, Sem Caracterizar Adultera????o / N??o Confere Bin"
                  checked={cominiciooxinachapasuportesemcaractadultnaoconferebin}
                  onPress={() =>
                    setcominiciooxinachapasuportesemcaractadultnaoconferebin(
                      !cominiciooxinachapasuportesemcaractadultnaoconferebin
                    )}

                />
              </S.ContainerItem>

              <S.ContainerItem>
                <CheckBox
                  title="Com Processo de Oxida????o da Chapa Suporte, Impossibilitando Conferencia da Numera????o"
                  checked={comproceoxidadachapasuporteimpossibiconferenumeracao}
                  onPress={() =>
                    setcomproceoxidadachapasuporteimpossibiconferenumeracao(!comproceoxidadachapasuporteimpossibiconferenumeracao)}

                />
              </S.ContainerItem>

              <S.ContainerItem>
                <CheckBox
                  title="Sem Caracter??sticas Aparentes de Adultera????o / Confere Com a Bin"
                  checked={semcaracteaparentadultconferecombin}
                  onPress={() =>
                    setsemcaracteaparentadultconferecombin(!semcaracteaparentadultconferecombin)}

                />
              </S.ContainerItem>

              <S.ContainerItem>
                <CheckBox
                  title="Sem Caracter??sticas Aparentes de Adultera????o / N??o Confere Com a Bin"
                  checked={semcaracteaparentadultnaoconferecombin}
                  onPress={() =>
                    setsemcaracteaparentadultnaoconferecombin(!semcaracteaparentadultnaoconferecombin)}

                />
              </S.ContainerItem>

              <S.ContainerItem>
                <CheckBox
                  title="Remarcado (REM), Conforme Documento CRVL Apresentado"
                  checked={remarconformdocumentcrvlapresent}
                  onPress={() => setremarconformdocumentcrvlapresent(!remarconformdocumentcrvlapresent)}

                />
              </S.ContainerItem>

              <S.ContainerItem>
                <CheckBox
                  title="Base da Grava????o do Numero do Chassi Apresenta Marcas de Lixa e/ou Abras??o"
                  checked={basegravacaodonumerochassiapresentamarcadelixaouabrasa}
                  onPress={() =>
                    setbasegravacaodonumerochassiapresentamarcadelixaouabrasa(
                      !basegravacaodonumerochassiapresentamarcadelixaouabrasa
                    )}

                />
              </S.ContainerItem>
            </S.ContainerInfo>
          </Form>
        </ScrollView>
      </S.Container>
    </ContainerPage>
  )
}

export default Chassi
