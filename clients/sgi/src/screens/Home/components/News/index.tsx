import React from 'react'
import { useNavigation } from '@react-navigation/native'

import * as S from './styles'

const News: React.FC = () => {
  const navigation = useNavigation()
  return (
    <S.Container>
      <S.SectionTitle>Notificações</S.SectionTitle>
      <S.NewsButton onPress={() => navigation.navigate('Notifications')}>
        <S.NewsBackground source={require('../../../../assets/bannernews.png')}>
          <S.Title>Informativos RA</S.Title>
          <S.Inline>
            <S.SubTitle>Saiba mais </S.SubTitle>
            <S.Category>0 Notificações</S.Category>
          </S.Inline>
        </S.NewsBackground>
      </S.NewsButton>
    </S.Container>
  )
}

export default News
