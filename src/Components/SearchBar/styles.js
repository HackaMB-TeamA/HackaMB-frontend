
import { StyleSheet, Dimensions } from 'react-native';
import { colors, size } from '../../GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightest,
    height: 40,
    borderRadius: 5,
  },
  input: {
    color: 'red',
    fontSize: size.bigger,
  }
});