import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles'

import { categories } from '../../utils/categories'
import { Category } from '../Category';


export const CategorySelect = () => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
          />
        ))
      }
    </ScrollView>
  );
}