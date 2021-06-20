import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Evaluations from '../screens/Evaluations'
import CreateCustomers from '../screens/Evaluations/CreateCustomers'
import BaseInfoEvaluations from '../screens/Evaluations/BaseInfoEvaluations'
import ViewCar from '../screens/Evaluations/ViewCar'

const EvaluationStack = createStackNavigator()

const EvaluatioRoutes: React.FC = () => (
  <EvaluationStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#003f82'
      }
    }}
  >
    <EvaluationStack.Screen name="Evaluations" component={Evaluations} />
    <EvaluationStack.Screen
      name="CreateCustomers"
      component={CreateCustomers}
    />
    <EvaluationStack.Screen
      name="BaseInfoEvaluations"
      component={BaseInfoEvaluations}
    />
    <EvaluationStack.Screen name="ViewCar" component={ViewCar} />
  </EvaluationStack.Navigator>
)

export default EvaluatioRoutes
