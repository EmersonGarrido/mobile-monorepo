import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import RequestCar from '../screens/Request/RequestCar'
import RequestedCar from '../screens/Request/RequestedCar'
import RequestDetails from '../screens/Request/RequestDetails'
import RequestFinish from '../screens/Request/RequestFinish'

const RequestStack = createStackNavigator()

const RequestCarRoutes: React.FC = () => {
  return (
    <RequestStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#003f82'
        }
      }}
    >
      <RequestStack.Screen name="RequestCar" component={RequestCar} />
      <RequestStack.Screen name="RequestedCar" component={RequestedCar} />
      <RequestStack.Screen name="RequestDetails" component={RequestDetails} />
      <RequestStack.Screen name="RequestFinish" component={RequestFinish} />
    </RequestStack.Navigator>
  )
}

export default RequestCarRoutes
