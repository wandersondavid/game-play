import React from 'react';
import { Text, View, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles'
import DiscordImg from '../../assets/discord.png'

type Props = TouchableOpacityProps & {
  text: string
}

export const ButtonIcon = ({ text, ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.container} {...rest} >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}