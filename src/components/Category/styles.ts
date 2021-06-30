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
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    paddingVertical: 20
  },
  check: {
    position: 'absolute',
    top: 7,
    right:7,
    width: 12,
    height: 12,
    backgroundColor: theme.colors.secondary100,
    borderRadius: 3,
    borderColor: theme.colors.secondary50,
    borderWidth:2,
  },
  checked: {
    position: 'absolute',
    top: 7,
    right:7,
    width: 8,
    height: 8,
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
  },

  title: {
    fontFamily: theme.fonts.title700,
    color: '#fff',
    fontSize: 15
  },
});
