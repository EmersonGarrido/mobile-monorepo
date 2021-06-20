import styled from 'styled-components/native'
import { Platform } from 'react-native'
import {
  getBottomSpace,
  getStatusBarHeight
} from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  /* align-items: center; */
  padding: 0 30px;
  background-color: #fff;
  margin-top: ${Platform.OS === 'ios' ? `${getStatusBarHeight()}px` : '0'};
`
export const ContainerLogo = styled.View`
  align-items: center;
`

export const Logo = styled.Image.attrs({
  source: require('../../assets/logonew.png'),
  resizeMode: 'contain'
})`
  width: 200px;
  height: 80px;
  margin: 20px;
`

export const BackToSigInButton = styled.TouchableOpacity`
  /* position: absolute; */
  left: 0;
  bottom: 0;
  right: 0;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  border-top-color: #9d9fa6;
  border-top-width: 1px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
`

export const BackToSigInButtonText = styled.Text`
  color: #003f82;
  margin: 0 10px;
`

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin-top: 30px;
  width: 100%;
  padding: 10px 0;
  align-items: center;
`

export const ForgotPasswordButtonText = styled(BackToSigInButtonText)``
