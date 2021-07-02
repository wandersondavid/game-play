import React from 'react';

import { NavigationContainer } from '@react-navigation/native'

import { AppRouter } from './app.routes'
import { useAuth } from '../hooks/auth';
import { SignIn } from '../screens/Signin';

export const Routes = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user.id ? <AppRouter/> : <SignIn /> }
    </NavigationContainer>
  )
}