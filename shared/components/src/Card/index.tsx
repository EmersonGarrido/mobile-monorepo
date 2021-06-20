import React from 'react';
import * as S from './styles';

interface DataProps {
  username: string;
  versao: string;
  ano: string;
  km: string;
  mediadepreco: string;
  cidade: string;
  slideTitle?: string;
  slideDescription?: string;
  slideImage: string;
}

interface BoxProps {
  data: DataProps;
  type: 'slider';
}

const Card: React.FC<BoxProps> = ({ data, type }) => {
  return (
    <>
      {type === 'slider' ? (
        <S.CardSlideContainer>
          <S.CardSlideBackgroundImage image={data.slideImage}>
            <S.CardSlideTitle>{data.slideTitle}</S.CardSlideTitle>
            <S.CardSlideSubTitle>{data.slideDescription}</S.CardSlideSubTitle>
          </S.CardSlideBackgroundImage>
        </S.CardSlideContainer>
      ) : (
        <S.Container>
          <S.TitleContainer>
            <S.Title>{'Renault Captur'.toUpperCase()}</S.Title>
            <S.Price>{data.mediadepreco}</S.Price>
          </S.TitleContainer>
          <S.Description>{data.versao}</S.Description>
          <S.Inline>
            <S.Title>{data.ano}</S.Title>
            <S.Title>{data.km}</S.Title>
          </S.Inline>
          <S.Inline>
            <S.Title>Solicitado por : {data.username}</S.Title>
            <S.Title>{data.cidade}</S.Title>
          </S.Inline>
        </S.Container>
      )}
    </>
  );
};

export default Card;
