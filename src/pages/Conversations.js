import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GlobalStyles } from '../GlobalStyles';
import Message from '../Components/Message';
import {styles} from './Conversations.styles.js';
import SearchBar from '../Components/SearchBar';

const Conversations = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <View style={GlobalStyles.container}>
        <Text style={styles.title}> Meus chats </Text>
        <StatusBar style='light' />
        <SearchBar />
        {/* <Message author="jhon doe" message="hello word" pastTime="1 week ago" /> */}
      </View>
    </SafeAreaProvider>
  );
};

export default Conversations;
