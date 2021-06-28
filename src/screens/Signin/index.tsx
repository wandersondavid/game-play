import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { styles } from './styles'
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';

export const SignIn = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
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
          activeOpacity={.9}
        />
      </View>
    </View>
  );
}
