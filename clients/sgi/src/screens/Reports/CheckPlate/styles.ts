import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: stretch;
`
export const ContainerTitle = styled.View`
  padding: 10px;
`

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #003f82;
`

export const ContainerPictures = styled.View`
  flex: 1;
  background-color: #999;
  justify-content: center;
  align-items: stretch;
`

export const FormContainer = styled.View`
  padding: 0 25px;
`

export const ToggleContainer = styled.View`
  padding: 0 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ToggleOption = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  color: #003f82;
  padding: 15px;
`

export const ToggleOptionText = styled.Text`
  color: ${({ active }) => (active ? '#003f82' : '#003f82')};
`

export const ToggleIndication = styled(MaterialCommunityIcons).attrs(
  ({ active }) => ({
    name: active ? 'toggle-switch-off' : 'toggle-switch',
    color: '#003f82',
    size: 40
  })
)`
  padding: 0 15px;
`

export const ContainerState = styled.View`
  padding: 15px 0 0 0;
`
