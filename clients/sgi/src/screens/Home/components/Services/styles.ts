import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const widthScreen = Dimensions.get('window').width - 48;
const widthCard = widthScreen / 2 - 5;

export const Container = styled.View``;

export const ServiceContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 15px;
`;

interface ServiceButtonProps {
  fullWidth?: boolean;
}

export const ServiceButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})<ServiceButtonProps>`
  background-color: #999;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : `${widthCard}px`)};
  height: 130px;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
`;

export const ServiceBackground = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  padding: 10px;
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const SubTitle = styled(Title)`
  font-weight: normal;
  font-size: 14px;
`;
