import React from 'react';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font';


import { SignIn } from './src/screens/Signin';
import { Background } from './src/components/Background';
import { StatusBar } from 'react-native';

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
      <SignIn />
    </Background>
  );
}

export default App;