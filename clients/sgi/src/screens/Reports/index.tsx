import React, { useState, useEffect } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { api } from '@shared/services';

import { ContainerPage, LogoHeader, Loading } from '@shared/components';
import Card from './components/Card';
import * as S from './styles';

const Reports: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [reportsList, setReportsList] = useState('');

  async function requestCar() {
    const dataRequestCar = await api.get('/laudo');

    setReportsList(dataRequestCar.data);
  }

  useEffect(() => {
    requestCar();
  }, []);

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          marginVertical: 20,
          width: '100%',
        }}
      >
        <ActivityIndicator color="#1976D2" size="small" />
      </View>
    );
  };

  return (
    <ContainerPage>
      <LogoHeader isBack />
      <S.Container>
        {loading ? (
          <Loading />
        ) : (
          <S.ContainerReports>
            <FlatList
              data={reportsList}
              keyExtractor={(car) => String(car.id)}
              renderItem={({ item }) => <Card data={item} />}
              showsVerticalScrollIndicator={false}
              onEndReached={requestCar}
              onEndReachedThreshold={0.5}
              contentContainerStyle={{
                paddingHorizontal: 10,
              }}
              ListFooterComponent={renderFooter}
            />
          </S.ContainerReports>
        )}
      </S.Container>
    </ContainerPage>
  );
};

export default Reports;
