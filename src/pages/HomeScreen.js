import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from '../Components/Header';
import { GlobalStyles } from '../GlobalStyles';

const HomeScreen = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Header title={'Home'} />
      <View style={GlobalStyles.container}>
        <Text> HomeScreen </Text>
        <StatusBar style='light' />
      </View>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
