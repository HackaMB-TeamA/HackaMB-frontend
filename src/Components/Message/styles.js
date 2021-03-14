
import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../GlobalStyles';

export const styles = StyleSheet.create({
  container : {
    flexDirection: 'row',
  },
  message: {
    marginLeft: 15,
  },
  messageAuthor: {
    color: colors.lightest,
    fontWeight: 'bold',
  },
  messagePastTime: {
    marginLeft: 15,
    color: colors.light,
  },
  messageContent: {
    color: colors.lighter,
  },
});