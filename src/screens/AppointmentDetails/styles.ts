import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 264,
    marginBottom:30,
  },
  bannerContent:{
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal:24,
    marginBottom:30,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 28
  },
  subtitle: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    fontSize: 13
  },

  members:{
    marginTop:27,
    marginLeft:24
  }
});
