import React from 'react'
import { useNavigation } from '@react-navigation/native'

import * as S from './styles'

const Services: React.FC = () => {
  const navigation = useNavigation()

  return (
    <S.Container>
      <S.ServiceContainer>
        <S.ServiceButton onPress={() => navigation.navigate('RequestedCar')}>
          <S.ServiceBackground
            source={require('../../../../assets/requested.png')}
          >
            <S.Title>Carros</S.Title>
            <S.SubTitle>Solicitados</S.SubTitle>
          </S.ServiceBackground>
        </S.ServiceButton>

        <S.ServiceButton onPress={() => navigation.navigate('RequestCar')}>
          <S.ServiceBackground
            source={require('../../../../assets/request_car.png')}
          >
            <S.Title>Solicitar</S.Title>
            <S.SubTitle>Carro</S.SubTitle>
          </S.ServiceBackground>
        </S.ServiceButton>

        <S.ServiceButton onPress={() => {}}>
          <S.ServiceBackground
            source={require('../../../../assets/evaluations.png')}
          >
            <S.Title>Carros</S.Title>
            <S.SubTitle>Avaliados</S.SubTitle>
          </S.ServiceBackground>
        </S.ServiceButton>

        <S.ServiceButton onPress={() => navigation.navigate('Evaluation')}>
          <S.ServiceBackground
            source={require('../../../../assets/evaluation.png')}
          >
            <S.Title>Avaliar</S.Title>
            <S.SubTitle>Carros</S.SubTitle>
          </S.ServiceBackground>
        </S.ServiceButton>

        <S.ServiceButton onPress={() => navigation.navigate('ViewReports')}>
          <S.ServiceBackground
            source={require('../../../../assets/reports.png')}
          >
            <S.Title>Laudos</S.Title>
            <S.SubTitle>Cautelar Gerados</S.SubTitle>
          </S.ServiceBackground>
        </S.ServiceButton>

        <S.ServiceButton onPress={() => navigation.navigate('CheckPlate')}>
          <S.ServiceBackground
            source={require('../../../../assets/new_report.png')}
          >
            <S.Title>Gerar</S.Title>
            <S.SubTitle>Laudo Cautelar</S.SubTitle>
          </S.ServiceBackground>
        </S.ServiceButton>
      </S.ServiceContainer>
    </S.Container>
  )
}

export default Services
