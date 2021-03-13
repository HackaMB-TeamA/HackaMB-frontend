import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from '../Components/Header';
import { GlobalStyles } from '../GlobalStyles';

const AnnouncementsScreen = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Header title={'Config'} />
      <View style={GlobalStyles.container}>
        <Text> AnnouncementsScreen </Text>
        <StatusBar style='light' />
      </View>
    </SafeAreaProvider>
  );
};

export default AnnouncementsScreen;
