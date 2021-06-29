import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {

    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8

  },
  content: {
    width: 100,
    height: 116,
    backgroundColor: theme.colors.secondary40,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 7
  },
  check: {
    width: 12,
    height: 12,
    backgroundColor: theme.colors.secondary100,
    alignSelf:'flex-end',
    marginRight:7,
    borderRadius: 3,
    borderColor: theme.colors.secondary50,
    borderWidth:2,
  },
  checked: {
    width: 8,
    height: 8,
    backgroundColor: theme.colors.primary,
    alignSelf:'flex-end',
    marginRight:7,
    borderRadius: 3,
  },

  title: {
    fontFamily: theme.fonts.text500,
    color: '#fff',
    fontSize: 15
  },
});
