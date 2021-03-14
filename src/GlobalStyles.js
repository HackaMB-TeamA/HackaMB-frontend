import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const colors = {
  main: '#585F73',
  secondary: '#1A1B26',
  highlightYellow: '#fcba03',
  unfocusedGray: '#a8a8a8',
  light: '#C4C4C4',
  lighter: '#E7E4E4',
  lightest: '#FFF',
};
export const size = {
  small: 12,
  smallest: 14,
  default: 16,
  big: 18,
  bigger: 20,
  biggest: 24,
};

export const GlobalStyles = StyleSheet.create({
  container: {
    paddingTop: height * 0.05,
    paddingHorizontal: width * 0.03,
    flex: 1,
    backgroundColor: colors.main,
  },
});
