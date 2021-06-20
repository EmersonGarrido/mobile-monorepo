import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { upperFirst } from 'lodash';

import {
  normalizeMoney,
  normalizeNumberFormat,
  changeIconName,
} from '@shared/helpers';

import { useAuth } from '../../../../hooks/auth';

import * as S from './styles';

interface ReportProps {
  placa: string;
  modelo: string;
  tipo: string;
  data_consulta: string;
  marca: string;
  municipio: string;
  ano_fabricacao: number;
  ano_modelo: number;
  cor: string;
  procedencia: string;
  especie: string;
  categoria: string;
  combustivel: string;
  nome_proprietario: string;
  cpf_proprietario: string;
  status_ipva: string;
  status_multa: string;
  uf: string;
}

interface BoxProps {
  data: ReportProps;
}

const Card: React.FC<BoxProps> = ({ data }) => {
  const navigation = useNavigation();

  const { user } = useAuth();

  return (
    <S.Container
      onPress={() =>
        navigation.navigate('ReportsDetails', {
          car_id: data.id,
        })
      }
    >
      <S.ContainerInternal>
        <S.TitleContainer>
          <S.Title>{`${data.marca} ${data.modelo}`.toUpperCase()}</S.Title>
          <S.Price>{data.placa}</S.Price>
        </S.TitleContainer>
        <S.Description>
          {data.ano_fabricacao}/{data.ano_modelo}
        </S.Description>
      </S.ContainerInternal>
      <S.ContainerInternal>
        <S.Inline>
          <S.Title>{data.nome_proprietario}</S.Title>
          <S.Title />
          <S.Title>{data.cor}</S.Title>
        </S.Inline>
      </S.ContainerInternal>
      <S.Line />
      <S.ContainerInternal>
        <S.Inline>
          <S.InfoContainer>
            <S.IconMarker name="map-marker" size={20} />
            <S.InfoText>
              {data.municipio} 
{' '}
{data.uf}
            </S.InfoText>
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoText>Ver Detalhes</S.InfoText>
          </S.InfoContainer>
        </S.Inline>
      </S.ContainerInternal>
    </S.Container>
  );
};

export default Card;
