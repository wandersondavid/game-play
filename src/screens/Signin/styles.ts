import { StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:'100%',
    height:360
 },
  content:{
    marginTop:-40,
    paddingHorizontal: 40,
  },
  title:{
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize:40,
    marginBottom: 16
  },
  subTitle:{
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize:15,
    marginBottom: 64
  }

});