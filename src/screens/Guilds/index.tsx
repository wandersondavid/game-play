import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';

import { FlatList, View } from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';
import { styles } from './styles'
import { ListDivider } from '../../components/ListDivider';
import { Guild, GuildProps } from '../../components/Guild';


type Props = {
  handleGuildSelected: (guild: GuildProps) => void
}

export const Guilds = ({ handleGuildSelected }: Props) => {

  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'img.png',
      owner: true,
    },
    {
      id: '2',
      name: 'Galera do gamer',
      icon: 'img.png',
      owner: true,
    },
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild
            data={item}
            onPress={() => handleGuildSelected(item)}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  );
}
