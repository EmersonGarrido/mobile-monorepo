/* eslint-disable camelcase */
import React, { useState, useEffect, useCallback } from 'react'
import { FlatList, View, ActivityIndicator } from 'react-native'
import { ContainerPage, LogoHeader } from '@shared/components'
import { api } from '@shared/services'
import Card from './components/Card'

import * as S from './styles'

interface DataProps {
  id: number
  first_name: string
  marca: string
  modelo: string
  versao: string
  ano: string
  cor: string
  km: number
  mediadepreco: number
  cidade: string
  admin: boolean
  status: string
}

const RequestedCar: React.FC = () => {
  const [carlist, setCarlist] = useState<DataProps[]>([])
  const [total, setTotal] = useState(0)

  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const handleGetCarList = useCallback(async () => {
    setLoading(true)

    if (total === carlist.length) {
      setLoading(false)
    } else {
      const response = await api.get('/carlist', {
        params: { page }
      })

      setCarlist([...carlist, ...response.data])
      setTotal(response.headers['x-total-count'])
      setPage(page + 1)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    handleGetCarList()
  }, [])

  const renderFooter = () => {
    if (!loading) return null
    return (
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          marginVertical: 20,
          width: '100%'
        }}
      >
        <ActivityIndicator color="#1976D2" size="small" />
      </View>
    )
  }

  return (
    <ContainerPage>
      <LogoHeader isBack />

      <S.Container>
        <FlatList
          data={carlist}
          keyExtractor={car => String(car.id)}
          renderItem={({ item }) => <Card data={item} />}
          showsVerticalScrollIndicator={false}
          // onEndReached={handleGetCarList}
          // onEndReachedThreshold={0.5}
          contentContainerStyle={{
            paddingHorizontal: 10
          }}
          ListFooterComponent={renderFooter}
        />
      </S.Container>
    </ContainerPage>
  )
}

export default RequestedCar
