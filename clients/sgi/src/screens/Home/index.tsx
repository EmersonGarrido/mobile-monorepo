import React, { useEffect, useState, useRef } from 'react'
import { ScrollView, Platform, Picker } from 'react-native'
import { LogoHeader, ContainerPage } from '@shared/components'
import { sendMessegeDiscord } from '@shared/helpers'
import { api } from '@shared/services'
import { useNavigation, useRoute } from '@react-navigation/native'

import Constants from 'expo-constants'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'
import Services from './components/Services'
import News from './components/News'

import { useAuth } from '../../hooks/auth'
import * as S from './styles'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true
  })
})

const Home: React.FC = () => {
  const navigation = useNavigation()
  const { user } = useAuth()
  const [expoPushToken, setExpoPushToken] = useState('')
  const [notification, setNotification] = useState(false)
  const notificationListener = useRef()
  const responseListener = useRef()

  async function schedulePushNotification () {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'New update',
        body: 'Temos uma nova atualização e estamos baixando ela.',
        data: { data: 'aguarde' }
      },
      trigger: { seconds: 2 }
    })
  }

  async function registerForPushNotificationsAsync () {
    let token

    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      )

      let finalStatus = existingStatus

      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
        finalStatus = status
      }

      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!')
        return
      }

      token = (await Notifications.getExpoPushTokenAsync()).data

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C'
        })
      }

      sendMessegeDiscord({
        username: 'BOT - Informação',
        content: `\n Ei <@!759933809373216768> \nUsuário : ${user.first_name} \nAviso : Acabou de entrar! \nToken : ${token}`
      })

      const iToken = {
        token: token
      }
      await api.post('/user/pushtoken', iToken)

      return token
    }
  }

  useEffect(() => {
    if (notification) {
      const data = notification

      const reportExists = data.request.content.data.data.screen
      if (reportExists === 'report') {
        const baseData = {
          car_id: data.request.content.data.data.car_id
        }
        navigation.navigate('ReportsDetails', baseData)
      }
    }
  }, [notification])

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token))

    notificationListener.current = Notifications.addNotificationReceivedListener(
      notification => {
        setNotification(notification)
      }
    )
    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      response => {}
    )

    return () => {
      Notifications.removeNotificationSubscription(notificationListener)
      Notifications.removeNotificationSubscription(responseListener)
    }
  }, [])
  return (
    <ContainerPage>
      <LogoHeader />
      <S.Container>
        <ScrollView>
          <S.ContainerBox>
            <S.HeaderContainer>
              <S.HeaderSubTitle>Bem vindo {user.first_name}</S.HeaderSubTitle>
            </S.HeaderContainer>
            <Services />
            <News />
          </S.ContainerBox>
        </ScrollView>
      </S.Container>
    </ContainerPage>
  )
}

export default Home
