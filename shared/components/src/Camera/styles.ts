import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
  background-color: #ccc;
  height: 90px;
  width: 90px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`

export const Content = styled.View`
  margin-bottom: 15px;
  align-items: center;
`

export const Icon = styled(AntDesign).attrs({
  size: 40,
  name: 'camera',
  color: '#003f82'
})``

export const Check = styled(AntDesign).attrs({
  size: 20,
  name: 'check',
  color: '#003f82'
})``

export const Text = styled.Text`
  font-size: 12px;
  color: #003f82;
  text-align: center;
  padding: 0 5px;
`

export const TextClose = styled(Text)`
  font-size: 12px;
  color: red;
  text-align: center;
  margin-top: 5px;
`

export const Image = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: green;
  margin: 2px;
`
