import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

interface StatusProps {
  status: string
}

const pendente = css`
  background-color: #aa3300;
`
const comprado = css`
  background-color: #1eda00;
`
const aguardando = css`
  background-color: #f37139;
`

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  background-color: #fff;
  padding: 10px;
`

export const ContainerLogo = styled.View`
  justify-content: center;
  align-items: center;
`

export const Logo = styled.Image.attrs({
  source: require('../../../assets/logo.png'),
  resizeMode: 'contain'
})`
  width: 100px;
  height: 50px;
  padding: 25px;
`

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 20px;
  padding: 5px;
`

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`

export const StatusContainer = styled(RectButton)<StatusProps>`
  padding: 5px;
  border-radius: 5px;
  ${({ status }) => status === 'pendente' && pendente};
  ${({ status }) => status === 'comprado' && comprado};
  ${({ status }) => status === 'aguardando' && aguardando};
`

export const Status = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`

export const ModalMessage = styled.Text`
  font-size: 16px;
`

export const Line = styled.View`
  border: 1px solid #e0e0ee;
  width: 100%;
  margin-top: 10px;
`

export const SubTitle = styled.Text`
  font-size: 14px;
`

export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
