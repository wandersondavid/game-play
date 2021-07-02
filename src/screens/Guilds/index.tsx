import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './styles'
import { ListDivider } from '../../components/ListDivider';
import { Guild, GuildProps } from '../../components/Guild';
import { Load } from '../../components/Load';
import { api } from '../../services/api';


type Props = {
  handleGuildSelected: (guild: GuildProps) => void
}

export const Guilds = ({ handleGuildSelected }: Props) => {

  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGuilds = async () => {
    const response = await api.get('/users/@me/guilds');

    setGuilds(response.data)
    setLoading(false);
  }


  useEffect(() =>{
    fetchGuilds()
  },[])

  return (
    <View style={styles.container}>
      {!loading &&
        <FlatList
          data={guilds}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Guild
              data={item}
              onPress={() => handleGuildSelected(item)}
            />
          )}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          ListHeaderComponent={() => <ListDivider isCentered />}
          showsVerticalScrollIndicator={false}
          style={styles.guilds}
          contentContainerStyle={{ paddingBottom: 69, paddingTop: 103 }}
        />
      }
      {loading && <Load />}
    </View>
  );
}
