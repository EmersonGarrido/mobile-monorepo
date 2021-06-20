import React from 'react';
import LottieView from 'lottie-react-native';

import * as S from './styles';

const Loading: React.FC = () => {
  return (
    <S.Container>
      <LottieView
        source={require('./car-animation.json')}
        autoPlay
      />
      <S.Text>Carregando...</S.Text>
    </S.Container>
  );
};

export default Loading;
