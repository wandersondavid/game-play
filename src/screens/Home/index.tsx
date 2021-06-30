import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './styles'
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native'
export const Home = () => {
  const [category, setCategory] = useState('')
  const navigation = useNavigation();
  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  const handleCategorySelected = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  const handlerAppointmentsDetails = () => {
    navigation.navigate('AppointmentDetails')
  }


  const handlerAppointmentsCreate = () => {
    navigation.navigate('AppointmentCreate')
  }

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

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />


        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment
              data={item}
              onPress={handlerAppointmentsDetails}
            />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Background>
  );
}
