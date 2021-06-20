/* eslint-disable react/display-name */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { useAuth } from '../hooks/auth'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import HomeStack from './home.routes'
import ProfileStack from './profile.routes'
import Notifications from '../screens/Notifications'
import CheckPlate from '../screens/Reports/CheckPlate'
import CreateReport from '../screens/Reports/CreateReport'
import ViewReport from '../screens/Reports'

import RequestCar from './requestcar.routes'
import RequestedCar from '../screens/Request/RequestedCar'
import RequestDetails from '../screens/Request/RequestDetails'

import Evaluation from './evaluation.routes'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
interface TabBarProps {
  focused: boolean
  color: string
  size: number
}

function HomeTabs() {
  const { signOut } = useAuth()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }: TabBarProps) => {
          let iconName
          if (route.name === 'Principal') {
            iconName = focused ? 'car' : 'car-back'
          } else if (route.name === 'Meu Perfil') {
            iconName = focused ? 'account' : 'account-edit'
          } else if (route.name === 'Notificações') {
            iconName = focused ? 'bell' : 'bell-outline'
          } else if (route.name === 'Sair') {
            iconName = focused ? 'logout' : 'logout'
          }
          return (
            <MaterialCommunityIcons
              name={`${iconName}`}
              size={size}
              color={color}
            />
          )
        }
      })}
      tabBarOptions={{
        tabStyle: { borderTopColor: '#1976D2', borderTopWidth: 1 }
      }}
    >
      <Tab.Screen name="Principal" component={HomeStack} />
      <Tab.Screen name="Meu Perfil" component={ProfileStack} />
      <Tab.Screen name="Notificações" component={Notifications} />
      <Tab.Screen
        name="Sair"
        component={ProfileStack}
        listeners={{
          tabPress: () => {
            signOut()
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#003f82'
        }
      }}
    >
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Profile" component={ProfileStack} />

      <Stack.Screen name="CheckPlate" component={CheckPlate} />
      <Stack.Screen name="ViewReports" component={ViewReport} />
      <Stack.Screen name="CreateReport" component={CreateReport} />

      <Stack.Screen name="RequestCar" component={RequestCar} />
      <Stack.Screen name="RequestedCar" component={RequestedCar} />
      <Stack.Screen name="RequestDetails" component={RequestDetails} />

      <Stack.Screen name="Evaluation" component={Evaluation} />
    </Stack.Navigator>
  )
}
