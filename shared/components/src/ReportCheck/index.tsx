import React from 'react';
import LottieView from 'lottie-react-native';

import * as S from './styles';

const ReportCheck: React.FC = () => {
  return (
    <S.Container>
    <LottieView
      source={require('./checked-report.json')}
      autoPlay
    />
  </S.Container>
  );
}

export default ReportCheck;