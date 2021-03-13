import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../GlobalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 20
  }
});
