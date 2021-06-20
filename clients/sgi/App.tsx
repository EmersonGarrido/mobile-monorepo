/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import * as Updates from 'expo-updates'
import { LogBox, StatusBar, YellowBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import FlashMessage from 'react-native-flash-message'
import { useAuth } from './src/hooks/auth'
import Routes from './src/routes'

import { Provider } from 'react-redux'
import Store from './store'

import AuthProvider from './src/hooks'

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state'
])

LogBox.ignoreAllLogs()

const App: React.FC = () => {
  const { signOut, user } = useAuth()

  async function updateApp() {
    const isAvailable = await Updates.checkForUpdateAsync()

    if (isAvailable) {
      await Updates.fetchUpdateAsync()
      // await Updates.reloadAsync()
    }
  }

  useEffect(() => {
    // updateApp()
  }, [])

  return (
    <AuthProvider>
      <Provider store={Store}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor="#003f82" />
          <Routes />
          <FlashMessage />
        </NavigationContainer>
      </Provider>
    </AuthProvider>
  )
}

export default App
