import { StyleSheet, Dimensions } from 'react-native';
import { colors, size } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  title: {
    color: colors.lightest,
    fontSize: size.biggest,
  },
});
