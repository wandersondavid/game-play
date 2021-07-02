import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native';
import { styles } from './styles'
import { GuidIcon } from '../GuidIcon';
import { theme } from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons'

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

type Props = TouchableOpacityProps & {
  data: GuildProps;
}

export const Guild = ({ data, ...rest }: Props) => {

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >

      <GuidIcon guildId={data.id} iconId={data.icon} />

      <View style={styles.content}>
        <View >
          <Text style={styles.title}>
            {data.name}
          </Text>

          <Text style={styles.type}>
            {data.owner ? 'Anfitrião' : 'Visitante'}
          </Text>
        </View>
      </View>

      <Feather
        name="chevron-right"
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>

  );
}