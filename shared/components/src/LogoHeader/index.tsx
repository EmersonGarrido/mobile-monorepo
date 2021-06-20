import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

interface LogoProps {
  isBack?: boolean;
  title?: string;
}

const LogoHeader: React.FC<LogoProps> = ({ isBack, title }) => {
  const navigation = useNavigation();
  const back = useCallback(() => {
    navigation.goBack()
  }, [navigation])
  return (
    <S.Container>
      {isBack ? (
        <S.ActionContainer onPress={back}>
          <S.Icon name="chevron-left" />
        </S.ActionContainer>
      ) : (
        <S.ActionContainer />
      )}
      <S.LogoContainer>
        {title ? <S.Title>{title}</S.Title> : <S.Logo />}
      </S.LogoContainer>
      <S.ActionContainer />
    </S.Container>
  );
};

export default LogoHeader;
