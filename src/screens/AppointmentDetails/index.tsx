import React from 'react';
import { BorderlessButton, FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

import { Text, View, ImageBackground } from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Fontisto } from '@expo/vector-icons'

import { styles } from './styles'
import { Member } from '../../components/Member';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png'
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';


export const AppointmentDetails = () => {
  const navigation = useNavigation();

  const members = [
    {
      id: '1',
      username: 'Wanderson David',
      avatar_url: 'https://github.com/wandersondavid.png',
      status: 'online'
    },
    {
      id: '3',
      username: 'Wanderson',
      avatar_url: 'https://github.com/wandersondavid.png',
      status: 'Ocupado'
    },
    {
      id: '3',
      username: 'David',
      avatar_url: 'https://github.com/wandersondavid.png',
      status: 'Indisponível'
    },
  ]

  const handleSignIn = () => {
    navigation.navigate('Home')
  }
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              color={theme.colors.primary}
              size={24}
            />
          </BorderlessButton>
        }
      />
      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>

          <Text style={styles.title}>
            League of Legends
          </Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member
            data={item}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.footer}>
        <ButtonIcon text="Entrar no servidor do Discord" />
      </View>
    </Background>
  );
}