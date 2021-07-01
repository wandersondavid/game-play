import React from 'react';
import { Text, View, Image, Alert, ActivityIndicator } from 'react-native';
import { styles } from './styles'
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import { useAuth } from '../../hooks/auth'
import { theme } from '../../global/styles/theme';

export const SignIn = () => {
  const { user, signIn, loading } = useAuth();

  const handleSignIn = async () => {

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
          {
            loading
              ? <ActivityIndicator color={theme.colors.primary} />
              : <ButtonIcon
                text='Entrar com Discord'
                onPress={handleSignIn}
              />
          }
        </View>
      </View>
    </Background>
  );
}
