import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 5px;
`;

export const NewsButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background-color: #999;
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
`;

export const NewsBackground = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  padding: 10px;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const SubTitle = styled(Title)`
  font-weight: normal;
  font-size: 14px;
`;

export const SectionTitle = styled.Text`
  color: #003f82;
  font-weight: bold;
  font-size: 20px;
  padding: 5px 0;
`;

export const Category = styled(SubTitle)`
  color: #ffd744;
  font-size: 14px;
`;

export const Inline = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
