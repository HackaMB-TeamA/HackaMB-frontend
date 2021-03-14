
import { StyleSheet, Dimensions } from 'react-native';
import { colors, size } from '../../GlobalStyles';

export const styles = StyleSheet.create({
  container : {
    flexDirection: 'row',
  },
  message: {
    marginLeft: 15,
  },
  messageAuthor: {
    fontSize: size.default,
    color: colors.lightest,
    fontWeight: 'bold',
  },
  messagePastTime: {
    fontSize: size.default,
    marginLeft: 15,
    color: colors.light,
  },
  messageContent: {
    fontSize: size.default,
    color: colors.lighter,
  },
});