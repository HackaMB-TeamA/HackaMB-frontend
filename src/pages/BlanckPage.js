import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from '../Components/Header';
import { GlobalStyles } from '../GlobalStyles';

const BlanckPage = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <View style={GlobalStyles.container}>
      </View>
    </SafeAreaProvider>
  );
};

export default BlanckPage;
