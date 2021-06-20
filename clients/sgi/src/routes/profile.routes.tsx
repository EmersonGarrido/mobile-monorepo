import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Profile from '../screens/Profile'
import EditProfile from '../screens/EditProfile'
import Teams from '../screens/Teams'
import Reports from '../screens/Reports'
import CheckPlate from '../screens/Reports/CheckPlate'

const ProfileStack = createStackNavigator()

const ProfileRoutes: React.FC = () => (
  <ProfileStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#003f82'
      }
    }}
  >
    <ProfileStack.Screen name="Profile" component={Profile} />
    <ProfileStack.Screen name="EditProfile" component={EditProfile} />
    <ProfileStack.Screen name="Teams" component={Teams} />
  </ProfileStack.Navigator>
)

export default ProfileRoutes
