import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles'
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native'
import { Background } from '../../components/Background';

import { useAuth } from '../../hooks/auth'

export const SignIn = () => {
  const navigation = useNavigation();
  const { user } = useAuth();

  const handleSignIn = () => {
    navigation.navigate('Home')
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{`\n`}
          e organize suas{`\n`}
          jogatinas
        </Text>
          <Text style={styles.subTitle}>
            Crie grupos para jogar seus games{`\n`}
          favoritos com seus amigos
        </Text>
          <ButtonIcon
            text='Entrar com Discord'
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  );
}
