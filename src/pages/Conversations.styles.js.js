import { StyleSheet, Dimensions } from 'react-native';
import { colors, size } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  title: {
    color: colors.lightest,
    fontSize: size.biggest,
  },
  description: {
    marginTop: 10,
    marginLeft: 5,
    width: width * 0.7,
    color: colors.lightest,
    fontSize: size.default,
  },
  card: {
    marginVertical: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#434958',
    borderRadius: 5,
  },
  button: {
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.lightest,
    paddingVertical: 5,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  buttonText: {
    fontSize: size.big,
  }
});
