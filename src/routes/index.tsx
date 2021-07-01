import React from 'react';

import { NavigationContainer } from '@react-navigation/native'

import { AuthRouter } from './auth.routes'
import { useAuth } from '../hooks/auth';
import { SignIn } from '../screens/Signin';

export const Routes = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user.id ? <AuthRouter/> : <SignIn /> }
    </NavigationContainer>
  )
}