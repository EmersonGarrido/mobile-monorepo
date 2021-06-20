import React, { useState, useEffect } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { api } from '@shared/services';

import { ContainerPage, CardTeams, LogoHeader } from '@shared/components';

import * as S from './styles';

interface UsersProps {
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

const Teams: React.FC = () => {
  const [teams, setTeams] = useState<UsersProps[]>([]);
  const [loading, setLoading] = useState(false);

  async function getTeams() {
    if (loading) {
      return;
    }

    setLoading(true);

    const response = await api.get('/users');
    setTeams(response.data);
    setLoading(false);
  }

  useEffect(() => {
    getTeams();
  }, []);

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={{ alignSelf: 'center', marginVertical: 20, width: '100%' }}>
        <ActivityIndicator color="#1976D2" size="small" />
      </View>
    );
  };

  return (
    <ContainerPage>
      <LogoHeader isBack />
      <S.Container>
        <FlatList
          data={teams}
          keyExtractor={(team) => String(team.id)}
          renderItem={({ item }) => <CardTeams data={item} />}
          showsVerticalScrollIndicator={false}
          onEndReached={getTeams}
          onEndReachedThreshold={0.5}
          ListHeaderComponent={renderFooter}
        />
      </S.Container>
    </ContainerPage>
  );
};

export default Teams;
