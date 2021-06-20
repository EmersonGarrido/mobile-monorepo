import React from 'react';
import { ActivityIndicator } from 'react-native';

import * as S from './styles';

const SplashLoading: React.FC = () => {
  return (
    <S.Container>
      <ActivityIndicator color="#FFF"/>
    </S.Container>

  );
}

export default SplashLoading;