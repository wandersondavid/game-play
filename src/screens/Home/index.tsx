import React, { useCallback, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './styles'
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import AsyncStore from '@react-native-async-storage/async-storage'
import { COLLECTION_APPOINTMENTS } from '../../config/database';
import { Load } from '../../components/Load';


export const Home = () => {
  const [category, setCategory] = useState('')
  const [appointments, setAppointments] = useState<AppointmentProps[]>([])
  const [loading, setLoading] = useState(false);


  const navigation = useNavigation();


  const handleCategorySelected = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  const handlerAppointmentsDetails = (guildSelected: AppointmentProps) => {
    navigation.navigate('AppointmentDetails', { guildSelected })
  }


  const handlerAppointmentsCreate = () => {
    navigation.navigate('AppointmentCreate')
  }

  const loadAppointments = async () => {

    const response = await AsyncStore.getItem(COLLECTION_APPOINTMENTS)
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter(item => item.category === category));
    } else {
      setAppointments(storage)
    }
    setLoading(false)
  }

  useFocusEffect(useCallback(() => {
    loadAppointments()
  }, [category]))

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handlerAppointmentsCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelected}
      />

      {loading ? <Load /> :
        <>
          <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`} />

          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={() => handlerAppointmentsDetails(item)}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            contentContainerStyle={{ paddingBottom: 69 }}
            showsHorizontalScrollIndicator={false}
          />
        </>
      }

    </Background>
  );
}
