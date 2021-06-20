import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Container = styled.View`
  flex: 1;
  background-color: white;
`

export const BoxInfo = styled.View``

export const TitleBox = styled.Text``

export const ContainerHeader = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  color: #003f82;
`

export const ContainerPictures = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
  flex-wrap: wrap;
`

export const ContainerButton = styled.View`
  padding: 20px;
`

export const ModalMessage = styled.Text`
  font-size: 16px;
`

export const ModalTextInfo = styled.Text`
  text-align: center;
`

export const TitleContainer = styled.View`
  border-bottom-color: #ccc;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  width: 100%;
  padding: 5px 0;
  align-items: center;
  justify-content: center;
`

export const ContainerInfoModalBox = styled.View`
  padding: 30px 20px;
`

export const ActionContainer = styled.View`
  border-top-color: #ccc;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
export const ModalContainer = styled.View`
  background-color: #fff;
  overflow: hidden;
  margin: 0 10px;
  border-radius: 5px;
`

export const ActionButton = styled.TouchableOpacity`
  flex: 1;
  padding: 5px 0;
  border-right-color: #ccc;
  border-right-width: ${StyleSheet.hairlineWidth}px;
`
export const TitleTexto = styled.Text`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-weight: bold;
  font-size: 18px;
`

export const ActionButtonText = styled(TitleTexto)``

export const ActionButtonTextoCancel = styled(TitleTexto)`
  color: #fd4b1b;
`
