import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { SvgProps } from 'react-native-svg'
import { Text, View } from 'react-native';
import { styles } from './styles'

type Props = RectButtonProps & {
  key: string;
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  hasCheckBox?: boolean;
}

export const Category = ({ key, title, icon: Icon, checked = false, hasCheckBox = false, ...rest }: Props) => {
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
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? theme.colors.secondary85 : theme.colors.secondary50, theme.colors.secondary40]}

        >
          {hasCheckBox &&
            <View
              style={checked ? styles.checked : styles.check}
            />}

          <Icon
            width={48}
            height={48}
          />
          <Text style={styles.title} >
            {title}
          </Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>

  );
}