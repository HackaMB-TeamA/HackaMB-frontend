import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const colors = {
  main: '#585F73',
  secondary: '#1A1B26',
  highlightYellow: '#fcba03',
  unfocusedGray: '#a8a8a8',
};

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.main,
    // justifyContent: 'center'
  },
});
