import React from 'react';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font';

import { Routes } from './src/routes';
import { Background } from './src/components/Background';
import { StatusBar } from 'react-native';

import { AuthProvider } from './src/hooks/auth'

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  };

  return (
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}

export default App;