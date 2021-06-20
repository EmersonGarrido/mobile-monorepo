import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;
export const HeaderContainer = styled.View`
  align-items: center;
`;

export const ContainerInfos = styled.View`
  padding: 20px;
`;
export const Text = styled.Text``;

export const HeaderName = styled.Text`
  font-size: 18px;
`;

export const User = styled.Image.attrs({
  source: require('../../assets/user.png'),
  resizeMode: 'contain',
})`
  width: 110px;
  height: 110px;
  position: relative;
`;

export const UploadImageProfile = styled.View`
  position: absolute;
  background-color: white;
  border: 1px solid #003f82;
  border-radius: 500px;
  padding: 6px;
  bottom: 25%;
  right: 17%;
`;
