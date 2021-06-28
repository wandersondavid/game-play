import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './src/global/styles/theme';
import { SignIn } from './src/screens/Signin';


const App = () => {
  return (
    <SignIn/>
  );
}

export default App;