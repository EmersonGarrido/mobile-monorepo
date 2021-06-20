import React from 'react';
import LottieView from 'lottie-react-native';
import * as S from './styles';

const LoadingCheckPlate: React.FC = () => {
  return (
    <S.Container>
      <LottieView 
      source={require('./check-plate.json')}
      autoPlay
      />
    </S.Container>
  );
}

export default LoadingCheckPlate;






