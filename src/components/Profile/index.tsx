import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';
import { styles } from './styles';

export const Profile = () => {
  return (
    <View style={styles.container}>
      <Avatar urlImage='https://gitlab.com/uploads/-/system/user/avatar/5593475/avatar.png?width=400' />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>
          <Text style={styles.userName}>
            Wanderson
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>

    </View>
  );
}