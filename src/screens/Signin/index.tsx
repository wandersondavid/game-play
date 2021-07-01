import React from 'react';
import { Text, View, Image, Alert } from 'react-native';
import { styles } from './styles'
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native'
import { Background } from '../../components/Background';

import { useAuth } from '../../hooks/auth'

export const SignIn = () => {
  // const navigation = useNavigation();
  const { user, signIn } = useAuth();

  const handleSignIn = async () => {
    // navigation.navigate('Home')
    try {
      await signIn()
    } catch (err) {
      Alert.alert(err)
    }
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
