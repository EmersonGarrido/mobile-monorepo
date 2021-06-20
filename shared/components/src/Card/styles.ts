import styled from 'styled-components/native';


export const Container = styled.View`
  margin-bottom: 10px;
  padding: 15px;
  background-color: #fdfdfd;
  border: 2px solid #f1f1f1;
  border-radius: 5px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 12px;
  margin: 5px 0;
  font-weight: bold;
`;

export const Description = styled(Title)`
  color: #b5b6be;
  font-size: 10px;
`;
export const Price = styled(Title)`
  font-size: 16px;
  color: #003f82;
`;

export const Inline = styled(TitleContainer)`
  justify-content: space-between;
`;

export const CardSlideContainerHeader = styled.View`
  padding: 10px;
  border: 2px solid #f1f1f1;
  width: 100%;
`;

export const CardSlideTitle = styled.Text`
  font-size: 26px;
  color: white;
  font-weight: bold;
`;

export const CardSlideSubTitle = styled.Text`
  font-size: 18px;
  color: white;
`;

export const CardSlideContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  border-radius: 10px;
  margin: 10px;
  width: 300px;
  height: 300px;
  overflow: hidden;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  elevation: 5;
`;

interface BackgroundProps {
  image: string;
}

export const CardSlideBackgroundImage = styled.ImageBackground.attrs({
  source: require('../assets/bannerrequest.png'),
  risezeMode: 'cover',
})<BackgroundProps>`
  height: 100%;
  padding: 20px;
`;
