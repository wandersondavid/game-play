import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container:{
    width: 67,
    height: 63,
    borderRadius: 8,
    backgroundColor: theme.colors.discord,
    justifyContent:'center',
    alignItems: 'center',
  },
  image: {
    width: 67,
    height: 63,
  }
});
