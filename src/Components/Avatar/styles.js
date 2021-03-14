
import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../GlobalStyles';

export const styles = (props) => StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 20
  },
  avatar : {
    width: props,
    height: props,
    borderRadius: props,
  }
});