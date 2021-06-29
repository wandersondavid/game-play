import React from 'react';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { Text, View, Image } from 'react-native';
import { styles } from './styles'
import DiscordImg from '../../assets/discord.png'

type Props = RectButtonProps & {
  text: string
}

export const ButtonIcon = ({ text, ...rest }: Props) => {
  return (
    <RectButton style={styles.container} {...rest} >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.text}>
        {text}
      </Text>
    </RectButton>
  );
}