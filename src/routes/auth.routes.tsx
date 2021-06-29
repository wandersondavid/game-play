import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../../src/screens/Home';
import { SignIn } from '../../src/screens/Signin';

const { Navigator, Screen } = createStackNavigator();


export const AuthRouter = () => {

  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >

      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Home"
        component={Home}
      />

    </Navigator>
  )

}