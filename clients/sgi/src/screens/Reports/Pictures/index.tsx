import React, { useState, useEffect, useRef } from 'react'
import { ScrollView } from 'react-native'
import {
  LogoHeader,
  Camera,
  Button,
  ContainerPage,
  Loading,
  ModalPicture
} from '@shared/components'
import { uploadReportPicture } from '@shared/helpers'
import Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import * as ImageManipulator from 'expo-image-manipulator'
import * as FileSystem from 'expo-file-system'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import Modal from 'react-native-modal'

import { useAuth } from '../../../hooks/auth'

import * as S from './styles'

interface PicturesDataProps {
  name: string | Blob
  type: string | Blob
  uri: string
}

interface ParamsProps {
  params: {
    base: {
      placa: string
      id: string
    }
  }
  name: string
  key: string
}

interface ImageDataProps {
  cancelled: boolean
  height: number
  type: string | Blob
  uri: string
  width: number
}

interface PositionProps {
  position: string
}

const Pictures: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)
  const [baseData, setBaseData] = useState<ParamsProps>('')
  const [loading, setLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const [frente, setFrente] = useState<PicturesDataProps>(' ')
  const [traseira, setTraseira] = useState<PicturesDataProps>(' ')
  const [lateraldireita, setLateralDireita] = useState<PicturesDataProps>(' ')
  const [lateralesquerda, setLateralEsquerda] = useState<PicturesDataProps>(' ')
  const [painel, setPainel] = useState<PicturesDataProps>(' ')
  const [hodrometro, setHodrometro] = useState<PicturesDataProps>(' ')
  const [motor, setMotor] = useState<PicturesDataProps>(' ')
  const [numeromotor, setNmotor] = useState<PicturesDataProps>(' ')
  const [nchassi, setNchassi] = useState<PicturesDataProps>(' ')
  const [crlv, setCrlv] = useState<PicturesDataProps>(' ')
  const [compartmotor, setCompartMotor] = useState<PicturesDataProps>(' ')
  const [lacreplaca, setLacrePlaca] = useState<PicturesDataProps>(' ')
  const [instrumentos, setInstrumentros] = useState<PicturesDataProps>(' ')
  const [placa, setPlaca] = useState<PicturesDataProps>(' ')
  const [ncambio, setNcambio] = useState<PicturesDataProps>(' ')
  const [chavereserva, setChaveReserva] = useState<PicturesDataProps>(' ')
  const [manualderevisao, setManualDeRevisao] = useState<PicturesDataProps>(' ')
  const [etiquetadefabricacao, setEtiquetaDeFabricao] = useState<
    PicturesDataProps
  >(' ')
  const [gravacaodosvidros, setGravacaoDosVidros] = useState<PicturesDataProps>(
    ' '
  )
  const [etiquetadomotor, setEtiquetaDoMotor] = useState<PicturesDataProps>(' ')
  const [tetointerno, setTetoInterno] = useState<PicturesDataProps>(' ')
  const [volante, setVolante] = useState<PicturesDataProps>(' ')
  const [
    lateraldianteirainternaesquerda,
    setLateralDianteiraInternaEsquerda
  ] = useState<PicturesDataProps>(' ')

  const [
    lateraltraseirainternaesquerda,
    setLateralTraseiraInternaEsquerda
  ] = useState<PicturesDataProps>(' ')

  const [pneudianteirodireito, setPneuDianteiroDireito] = useState<
    PicturesDataProps
  >(' ')

  const [pneudianteiroesquerdo, setPneuDianteiroEsquerdo] = useState<
    PicturesDataProps
  >(' ')
  const [pneutraseiroesquerdo, setPneuTraseiroEsquerdo] = useState<
    PicturesDataProps
  >(' ')

  const [pneutraseirodireito, setPneuTraseiroDireito] = useState<
    PicturesDataProps
  >(' ')

  const [ready, setReady] = useState(false)
  const [imageAlter, setImageAlter] = useState(' ')
  const [pog, setPog] = useState(' ')
  const [isPosition, setPosition] = useState('')

  const { token } = useAuth()

  async function getPermissions () {
    if (Constants.platform?.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA)
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!')
      }
    }
  }

  async function handleUploadImage(data: ImageDataProps) {
    const position = isPosition

    const temp = `${FileSystem.documentDirectory}${isPosition}.png`
    const image = data as ImageDataProps
    const manipResult = await ImageManipulator.manipulateAsync(
      image.uri,
      [
        {
          resize: {
            width: 400,
            height: 400
          }
        }
      ],
      { compress: 0.5, format: ImageManipulator.SaveFormat.PNG }
    )
    setImageAlter(manipResult)

    const movedImage = await FileSystem.moveAsync({
      from: manipResult.uri,
      to: temp
    })
    const getInfo = await FileSystem.getInfoAsync(temp)
    switch (position) {
      case 'frente':
        uploadReportPicture({ baseData, position, getInfo, token })
        setFrente(getInfo)
        break
      case 'traseira':
        uploadReportPicture({ baseData, position, getInfo, token })
        setTraseira(getInfo)
        break
      case 'lateraldireita':
        uploadReportPicture({ baseData, position, getInfo, token })
        setLateralDireita(getInfo)
        break
      case 'lateralesquerda':
        uploadReportPicture({ baseData, position, getInfo, token })
        setLateralEsquerda(getInfo)
        break
      case 'painel':
        uploadReportPicture({ baseData, position, getInfo, token })
        setPainel(getInfo)
        break
      case 'hodrometro':
        uploadReportPicture({ baseData, position, getInfo, token })
        setHodrometro(getInfo)
        break
      case 'motor':
        uploadReportPicture({ baseData, position, getInfo, token })
        setMotor(getInfo)
        break
      case 'numeromotor':
        uploadReportPicture({ baseData, position, getInfo, token })
        setNmotor(getInfo)
        break
      case 'nchassi':
        uploadReportPicture({ baseData, position, getInfo, token })
        setNchassi(getInfo)
        break
      case 'crlv':
        uploadReportPicture({ baseData, position, getInfo, token })
        setCrlv(getInfo)
        break
      case 'compartmotor':
        uploadReportPicture({ baseData, position, getInfo, token })
        setCompartMotor(getInfo)
        break
      case 'placa':
        uploadReportPicture({ baseData, position, getInfo, token })
        setPlaca(getInfo)
        break
      case 'ncambio':
        uploadReportPicture({ baseData, position, getInfo, token })
        setNcambio(getInfo)
        break
      case 'instrumentos':
        uploadReportPicture({ baseData, position, getInfo, token })
        setInstrumentros(getInfo)
        break
      case 'lacreplaca':
        uploadReportPicture({ baseData, position, getInfo, token })
        setLacrePlaca(getInfo)
        break
      case 'chavereserva':
        uploadReportPicture({ baseData, position, getInfo, token })
        setChaveReserva(getInfo)
        break
      case 'manualderevisao':
        uploadReportPicture({ baseData, position, getInfo, token })
        setManualDeRevisao(getInfo)
        break
      case 'etiquetadefabricacao':
        uploadReportPicture({ baseData, position, getInfo, token })
        setEtiquetaDeFabricao(getInfo)
        break
      case 'gravacaodosvidros':
        uploadReportPicture({ baseData, position, getInfo, token })
        setGravacaoDosVidros(getInfo)
        break
      case 'etiquetadomotor':
        uploadReportPicture({ baseData, position, getInfo, token })
        setEtiquetaDoMotor(getInfo)
        break
      case 'tetointerno':
        uploadReportPicture({ baseData, position, getInfo, token })
        setTetoInterno(getInfo)
        break
      case 'volante':
        uploadReportPicture({ baseData, position, getInfo, token })
        setVolante(getInfo)
        break
      case 'lateraldianteirainternaesquerda':
        uploadReportPicture({ baseData, position, getInfo, token })
        setLateralDianteiraInternaEsquerda(getInfo)
        break
      case 'lateraltraseirainternaesquerda':
        uploadReportPicture({ baseData, position, getInfo, token })
        setLateralTraseiraInternaEsquerda(getInfo)
        break
      case 'pneudianteirodireito':
        uploadReportPicture({ baseData, position, getInfo, token })
        setPneuDianteiroDireito(getInfo)
        break
      case 'pneudianteiroesquerdo':
        uploadReportPicture({ baseData, position, getInfo, token })
        setPneuDianteiroEsquerdo(getInfo)
        break
      case 'pneutraseiroesquerdo':
        uploadReportPicture({ baseData, position, getInfo, token })
        setPneuTraseiroEsquerdo(getInfo)
        break
      case 'pneutraseirodireito':
        uploadReportPicture({ baseData, position, getInfo, token })
        setPneuTraseiroDireito(getInfo)
        break
    }

    setModalVisible(false)
    setPosition('')
  }

  async function handleNextStep () {
    setLoading(true)
    navigation.navigate('FinishReport', baseData)
    setLoading(false)
  }

  async function handleModal ({ position }) {
    console.log('a position', position)
    setModalVisible(true)
    setPosition(position)
  }

  async function onCameraPress () {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    const data = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [2, 2],
      quality: 0.5
    })

    await handleUploadImage(data)
  }

  async function onGaleryPress () {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [2, 2],
      quality: 0.5
    })
    await handleUploadImage(data)
  }

  const route: ParamsProps = useRoute()
  const { params } = route

  async function hasBaseData () {
    const data = { params }

    setBaseData(data)
  }

  useEffect(() => {
    hasBaseData()

    getPermissions()
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ContainerPage>
          <LogoHeader isBack />
          <S.Container>
            <ScrollView>
              <S.ContainerHeader>
                <S.Title>Fotos</S.Title>
              </S.ContainerHeader>
              <Form ref={formRef} onSubmit={handleNextStep}>
                <S.ContainerPictures>
                  <Camera
                    text="Frente"
                    onPress={() => handleModal({ position: 'frente' })}
                    image={frente.uri}
                  />
                  <Camera
                    text="Traseira"
                    onPress={() => handleModal({ position: 'traseira' })}
                    image={traseira.uri}
                  />
                  <Camera
                    text="Lateral Esquerda"
                    onPress={() => handleModal({ position: 'lateralesquerda' })}
                    image={lateralesquerda.uri}
                  />
                  <Camera
                    text="Lateral Direita"
                    onPress={() => handleModal({ position: 'lateraldireita' })}
                    image={lateraldireita.uri}
                  />
                  <Camera
                    text="Painel"
                    onPress={() => handleModal({ position: 'painel' })}
                    image={painel.uri}
                  />
                  <Camera
                    text="Hodrometro"
                    onPress={() => handleModal({ position: 'hodrometro' })}
                    image={hodrometro.uri}
                  />
                  <Camera
                    text="Motor"
                    onPress={() => handleModal({ position: 'motor' })}
                    image={motor.uri}
                  />
                  <Camera
                    text="N. Motor"
                    onPress={() => handleModal({ position: 'numeromotor' })}
                    image={numeromotor.uri}
                  />
                  <Camera
                    text="Comp. Motor"
                    onPress={() => handleModal({ position: 'compartmotor' })}
                    image={compartmotor.uri}
                  />
                  <Camera
                    text="N. Chassi"
                    onPress={() => handleModal({ position: 'nchassi' })}
                    image={nchassi.uri}
                  />
                  <Camera
                    text="CRLV"
                    onPress={() => handleModal({ position: 'crlv' })}
                    image={crlv.uri}
                  />
                  <Camera
                    text="N. Cambio"
                    onPress={() => handleModal({ position: 'ncambio' })}
                    image={ncambio.uri}
                  />
                  <Camera
                    text="Placa"
                    onPress={() => handleModal({ position: 'placa' })}
                    image={placa.uri}
                  />
                  <Camera
                    text="Instrumentos"
                    onPress={() => handleModal({ position: 'instrumentos' })}
                    image={instrumentos.uri}
                  />
                  <Camera
                    text="Lacre Placa"
                    onPress={() => handleModal({ position: 'lacreplaca' })}
                    image={lacreplaca.uri}
                  />
                  <Camera
                    text="Chave Reserva"
                    onPress={() => handleModal({ position: 'chavereserva' })}
                    image={chavereserva.uri}
                  />
                  <Camera
                    text="Manual de Revisão"
                    onPress={() => handleModal({ position: 'manualderevisao' })}
                    image={manualderevisao.uri}
                  />
                  <Camera
                    text="Etiqueta de Fabricação"
                    onPress={() =>
                      handleModal({ position: 'etiquetadefabricacao' })
                    }
                    image={etiquetadefabricacao.uri}
                  />
                  <Camera
                    text="Gravação dos Vidros"
                    onPress={() =>
                      handleModal({ position: 'gravacaodosvidros' })
                    }
                    image={gravacaodosvidros.uri}
                  />
                  <Camera
                    text="Etiqueta do Motor"
                    onPress={() => handleModal({ position: 'etiquetadomotor' })}
                    image={etiquetadomotor.uri}
                  />
                  <Camera
                    text="Teto Interno"
                    onPress={() => handleModal({ position: 'tetointerno' })}
                    image={tetointerno.uri}
                  />
                  <Camera
                    text="Volante"
                    onPress={() => handleModal({ position: 'volante' })}
                    image={volante.uri}
                  />
                  <Camera
                    text="Lateral Diant. Interna Esq."
                    onPress={() =>
                      handleModal({
                        position: 'lateraldianteirainternaesquerda'
                      })
                    }
                    image={lateraldianteirainternaesquerda.uri}
                  />
                  <Camera
                    text="Lateral Trase. Interna Esq."
                    onPress={() =>
                      handleModal({
                        position: 'lateraltraseirainternaesquerda'
                      })
                    }
                    image={lateraltraseirainternaesquerda.uri}
                  />
                  <Camera
                    text="Pneu Dianteiro Direita"
                    onPress={() =>
                      handleModal({ position: 'pneudianteirodireito' })
                    }
                    image={pneudianteirodireito.uri}
                  />
                  <Camera
                    text="Pneu Dianteiro Esquerdo"
                    onPress={() =>
                      handleModal({ position: 'pneudianteiroesquerdo' })
                    }
                    image={pneudianteiroesquerdo.uri}
                  />
                  <Camera
                    text="Pneu Traseiro Esquerdo"
                    onPress={() =>
                      handleModal({ position: 'pneutraseiroesquerdo' })
                    }
                    image={pneutraseiroesquerdo.uri}
                  />
                  <Camera
                    text="Pneu Traseiro Direito"
                    onPress={() =>
                      handleModal({ position: 'pneutraseirodireito' })
                    }
                    image={pneutraseirodireito.uri}
                  />
                </S.ContainerPictures>
                <S.ContainerButton>
                  <Button
                    onPress={() => {
                      formRef.current?.submitForm()
                    }}
                  >
                    Prosseguir
                  </Button>
                </S.ContainerButton>
              </Form>
            </ScrollView>
          </S.Container>
          <Modal isVisible={modalVisible}>
            <S.ModalContainer>
              <S.TitleContainer>
                <S.TitleTexto>Escolha uma opção</S.TitleTexto>
              </S.TitleContainer>
              <S.ContainerInfoModalBox>
                <S.ModalTextInfo>
                  Você deseja tirar uma foto ou escolher da galeria?
                </S.ModalTextInfo>
              </S.ContainerInfoModalBox>

              <S.ActionContainer>
                <S.ActionButton onPress={() => onCameraPress()}>
                  <S.ActionButtonText>CÂMERA</S.ActionButtonText>
                </S.ActionButton>

                <S.ActionButton onPress={() => onGaleryPress()}>
                  <S.ActionButtonText>GALERIA</S.ActionButtonText>
                </S.ActionButton>
              </S.ActionContainer>
            </S.ModalContainer>
          </Modal>
        </ContainerPage>
      )}
    </>
  )
}

export default Pictures
