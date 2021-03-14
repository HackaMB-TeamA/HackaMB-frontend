import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from '../Components/Header';
import { GlobalStyles } from '../GlobalStyles';

const Chat = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <View style={GlobalStyles.container}>
        <Text> ChatScreen </Text>
        <StatusBar style='light' />
      </View>
    </SafeAreaProvider>
  );
};

export default Chat;
