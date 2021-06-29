import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles'
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';

export const Home = () => {
  const [category, setCategory] = useState('')

  const handleCategorySelected = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelected}
        />
      </View>
      <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total 6"/>
      </View>
    </View>
  );
}
