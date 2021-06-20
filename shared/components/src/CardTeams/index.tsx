import React from 'react';

import * as S from './styles';

interface UserTeamsProps {
  id: number;
  first_name: string;
  last_name: string;
  admin: boolean;
  cpf: string;
  email: string;
  facebook: string;
  telegram: string;
  instagram: string;
  saldo: string;
  telefone: string;
  whatsapp: string;
}

interface BoxUserProps {
  data: UserTeamsProps;
}

const CardTeams: React.FC<BoxUserProps> = ({ data }) => {
  return (
    <S.Container>
      <S.ContainerTeam>
        <S.ContainerAvatar>
         <S.User />
          <S.Name>
            {data.first_name} {data.last_name}
          </S.Name>
        </S.ContainerAvatar>
        <S.ContainerIcon>
          <S.Icon name="chevron-right" size={15} color="#000" />
        </S.ContainerIcon>
      </S.ContainerTeam>
      <S.Line />
    </S.Container>
  );
};

export default CardTeams;
