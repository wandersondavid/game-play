import React from 'react';
import { FlatList, View } from 'react-native';
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
    {
      id: '3',
      name: 'Galera do gamer',
      icon: 'img.png',
      owner: true,
    },
    {
      id: '4',
      name: 'Galera do gamer',
      icon: 'img.png',
      owner: true,
    },
    {
      id: '5',
      name: 'Galera do gamer',
      icon: 'img.png',
      owner: true,
    },
    {
      id: '6',
      name: 'Galera do gamer',
      icon: 'img.png',
      owner: true,
    },
    {
      id: '7',
      name: 'Galera do gamer',
      icon: 'img.png',
      owner: true,
    }
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
        ItemSeparatorComponent={() => <ListDivider isCentered/>}
        ListHeaderComponent={()=> <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
        contentContainerStyle={{paddingBottom: 69, paddingTop: 103}}
      />
    </View>
  );
}
