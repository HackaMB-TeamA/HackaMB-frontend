import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../GlobalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.secondary,
    height: height / 6.5,
    justifyContent: 'flex-end'
  },
  header: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 5,
    fontWeight: 'bold'
  }
});
