
import { StyleSheet, Dimensions } from 'react-native';
import { colors, size } from '../../GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main,
  },
  box: {
    flexDirection: 'row',
    padding: 5,
    borderRadius: 5,
    margin: 10,
    backgroundColor: colors.lightest,
  },
  input: {
    flex: 1,
    color: colors.secondary,
    marginHorizontal: 10,
    fontSize: size.bigger,
  }
});