import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { SvgProps } from 'react-native-svg'
import { Text, View } from 'react-native';
import { styles } from './styles'

type Props = RectButtonProps & {
  key: string,
  title: string,
  icon: React.FC<SvgProps>,
  checked?: boolean,
}

export const Category = ({ key, title, icon: Icon, checked = false, ...rest }: Props) => {
  return (
    <RectButton
      key={key}
      style={styles.container}
      {...rest}
    >
      <LinearGradient
        style={styles.container}
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
      >
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.check}>
            <Icon
              width={48}
              height={48}
            />
          </View>
          <Text>
            {title}
          </Text>
        </View>
      </LinearGradient>
    </RectButton>

  );
}