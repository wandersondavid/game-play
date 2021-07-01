import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../../src/screens/Home';
import { theme } from '../global/styles/theme';
import { AppointmentDetails } from '../../src/screens/AppointmentDetails';
import { AppointmentCreate } from '../../src/screens/AppointmentCreate';
const { Navigator, Screen } = createStackNavigator();


export const AuthRouter = () => {

  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        }
      }}
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />

      <Screen
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
    </Navigator>
  )

}