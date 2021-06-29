import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles'
import { Profile } from '../../components/Profile';

export const Home = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Profile />
      </View>
    </View>
  );
}
