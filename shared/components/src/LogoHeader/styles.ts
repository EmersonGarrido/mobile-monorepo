import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import FontAwesomeIcon from '@expo/vector-icons/build/FontAwesome';

export const Container = styled.View`
  background-color: white;
  margin-top: ${Platform.OS === 'ios' ? `${getStatusBarHeight()}px` : '0'};
  border-bottom-color: #e0e0e0;
  border-bottom-width: 1px;
  flex-direction: row;
`;

export const ActionContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.View`
  flex: 4;
  height: 60px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  source: require('../assets/logonew.png'),
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  color: #003f82;
  font-weight: bold;
  font-size: 20px;
`;

export const Icon = styled(FontAwesomeIcon).attrs({
  size: 20,
  color: '#003f82'
})``;
