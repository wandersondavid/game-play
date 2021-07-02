import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { ModalView } from '../../components/ModalView';
import { Header } from '../../components/Header';
import { styles } from './styles'
import { CategorySelect } from '../../components/CategorySelect';
import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';
import { GuidIcon } from '../../components/GuidIcon';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { Guilds } from '../Guilds';
import { GuildProps } from '../../components/Guild';
import { Background } from '../../components/Background';
import uuid from 'react-native-uuid'
import { COLLECTION_APPOINTMENTS } from '../../config/database';
import AsyncStore from '@react-native-async-storage/async-storage'



export const AppointmentCreate = () => {

  const [category, setCategory] = useState('')
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState({} as GuildProps);


  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const [description, setDescription] = useState('')

  const navigation = useNavigation();

  const handlerOpenGuild = () => {
    setOpenGuildsModal(true);
  }

  const handlerCloseGuild = () => {
    setOpenGuildsModal(false);
  }

  const handleGuildSelected = (guildSelected: GuildProps) => {
    setGuild(guildSelected)
    setOpenGuildsModal(false);
  }

  const handleCategorySelected = (categoryId: string) => {
    setCategory(categoryId);
  }

  const handlerSave = async () => {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description
    };

    const storage = await AsyncStore.getItem(COLLECTION_APPOINTMENTS)
    const appointments = storage ? JSON.parse(storage) : [];
    await AsyncStore.setItem(COLLECTION_APPOINTMENTS, JSON.stringify([...appointments, newAppointment]));

    navigation.navigate('Home')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Background>
        <ScrollView>
          <Header
            title="Agendar partida"
          />

          <Text style={[styles.label, { marginLeft: 24, marginTop: 32, marginBottom: 18 }]}>
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            categorySelected={category}
            setCategory={handleCategorySelected}
          />

          <View style={styles.form}>
            <RectButton onPress={handlerOpenGuild} >
              <View style={styles.select}>

                {
                  guild.icon
                    ? <GuidIcon guildId={guild.id} iconId={guild.icon} />
                    : <View style={styles.image} />
                }

                <View style={styles.selectBory}>
                  <Text style={styles.label}>
                    {
                      guild.name
                        ? guild.name
                        : 'Selecione um servidor'
                    }
                  </Text>
                </View>
                <Feather
                  name="chevron-right"
                  color={theme.colors.highlight}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>
                <View style={styles.column}>
                  <SmallInput
                    onChangeText={setDay}
                    maxLength={2}
                  />
                  <Text style={styles.divider}>
                    /
                  </Text>
                  <SmallInput
                    onChangeText={setMonth}
                    maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Horário
                </Text>
                <View style={styles.column}>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setHour}
                  />
                  <Text style={styles.divider}>
                    :
                  </Text>
                  <SmallInput
                    onChangeText={setMinute}
                    maxLength={2}
                  />
                </View>
              </View>

            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>
                Descrição
              </Text>
              <Text style={styles.caracteresLimit}>
                Max 100 caracteres
              </Text>
            </View>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={setDescription}
            />
            <View style={styles.footer}>
              <Button text="Agendar" onPress={handlerSave}/>
            </View>
          </View>

        </ScrollView>
      </Background>
      <ModalView visible={openGuildsModal} closeModal={handlerCloseGuild}>
        <Guilds handleGuildSelected={handleGuildSelected} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
