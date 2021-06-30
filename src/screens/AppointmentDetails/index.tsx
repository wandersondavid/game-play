import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles'
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native'
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';


export const AppointmentDetails = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Home')
  }
  return (
    <Background>
     <Header title="Detalhes"/>
    </Background>
  );
}
