import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import CheckPlate from '../screens/Reports/CheckPlate'
import CreateReport from '../screens/Reports/CreateReport'

const ReportsStack = createStackNavigator()

const ReportsRoutes: React.FC = () => {
  return (
    <ReportsStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#003f82'
        }
      }}
    >
      <ReportsStack.Screen name="CheckPlate" component={CheckPlate} />
      <ReportsStack.Screen name="CreateReport" component={CreateReport} />
    </ReportsStack.Navigator>
  )
}

export default ReportsRoutes
