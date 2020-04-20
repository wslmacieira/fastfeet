import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '~/pages/Dashboard';
import Detalhes from '~/pages/DeliveryDetails';
import InformProblem from '~/pages/Problem';
import ProblemDetail from '~/pages/ProblemDetail';
import DeliveryConfirm from '~/pages/DeliveryConfirm';

export default function StackRoutes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator headerMode="none">
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Detalhes" component={Detalhes} />
      <Screen name="InformProblem" component={InformProblem} />
      <Screen name="Problems" component={ProblemDetail} />
      <Screen name="DeliveryConfirm" component={DeliveryConfirm} />
    </Navigator>
  );
}
