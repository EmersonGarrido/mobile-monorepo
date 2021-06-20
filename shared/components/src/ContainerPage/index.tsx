import React from 'react';

import * as S from './styles';

const ContainerPage: React.FC = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default ContainerPage;
