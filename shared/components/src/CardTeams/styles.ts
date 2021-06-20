import styled from "styled-components/native";
import FontAwesomeIcon from "@expo/vector-icons/build/FontAwesome";

export const Container = styled.View`
  /* flex: 1; */
  background-color: white;
`;

export const ContainerTeam = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  background-color: white;
`;

export const ContainerAvatar = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: 16px;

  padding: 0 10px;
`;

export const ContainerIcon = styled.View``;

export const Icon = styled(FontAwesomeIcon)``;

export const Line = styled.View`
  border: 1px solid #e0e0e0;
`;

export const User = styled.Image.attrs({
  source: require('../assets/user.png'),
  resizeMode: 'contain',
})`
  width: 50px;
  height: 50px;
  position: relative;
`;