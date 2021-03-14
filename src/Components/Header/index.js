import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

const Header = ({ title }) => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Text style={styles.header}> {title} </Text>
    </SafeAreaView>
  );
};

export default Header;
