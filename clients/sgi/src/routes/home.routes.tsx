import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Notifications from '../screens/Notifications'

const HomeStack = createStackNavigator()

const HomeRoutes: React.FC = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#003f82'
      }
    }}
  >
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Notifications" component={Notifications} />
  </HomeStack.Navigator>
)

export default HomeRoutes
