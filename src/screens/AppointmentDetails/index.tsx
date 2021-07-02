import React, { useEffect, useState } from 'react';
import { BorderlessButton, FlatList } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native'

import { Text, View, ImageBackground, Alert, Share, Platform } from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Fontisto } from '@expo/vector-icons'

import { styles } from './styles'
import { Member, MemberProps } from '../../components/Member';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png'
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';
import { AppointmentProps } from '../../components/Appointment';
import { api } from '../../services/api';
import { Load } from '../../components/Load';

type Params = {
  guildSelected: AppointmentProps;
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number;
}

export const AppointmentDetails = () => {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { guildSelected } = route.params as Params;

  const fetchGuildWidget = async () => {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
      setWidget(response.data)

    } catch {
      Alert.alert('Verifique as configuração do servidor')
    } finally {
      setLoading(false)
    }
  }
  const handleShareInvitation = () => {
    const message = Platform.OS === 'ios'
      ? `Junte-se a ${guildSelected.guild.name}`
      : widget.instant_invite;

      Share.share({
        message,
        url: widget.instant_invite
      })
  }
  useEffect(() => {
    fetchGuildWidget()
  }, [])

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton onPress={handleShareInvitation}>
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
            {guildSelected.guild.name}
          </Text>

          <Text style={styles.subtitle}>
            {guildSelected.description}
          </Text>
        </View>
      </ImageBackground>
      {loading ?
        <Load />
        :
        <>
          <ListHeader title="Jogadores" subtitle={`Total ${widget.members.length}`} />

          <FlatList
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Member
                data={item}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            style={styles.members}
            showsHorizontalScrollIndicator={false}
          />
        </>
      }
      <View style={styles.footer}>
        <ButtonIcon text="Entrar no servidor do Discord" />
      </View>
    </Background>
  );
}
