import React, { useState } from 'react';
import { ScrollView , Text, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {styles} from './Chat.styles.js';

import Header from '../Components/Header';
import { GlobalStyles } from '../GlobalStyles';
import Message from './../Components/Message/index';
import ChatInput from './../Components/ChatInput/index';

const Chat = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ScrollView  style={styles.container}>
        <Message author="jhon doe" message="hello word" pastTime="1 week ago" />
        <Message author="jhon doe" message="hello word" pastTime="1 week ago" />
        <Message author="jhon doe" message="hello word" pastTime="1 week ago" />
        <Message author="jhon doe" message="hello word" pastTime="1 week ago" />
        <Message author="jhon doe" message="hello word" pastTime="1 week ago" />
        <Message author="jhon doe" message="hello word" pastTime="1 week ago" />
        <Message author="jhon doe" message="hello word" pastTime="1 week ago" />
        <Message author="jhon doe" message="hello word" pastTime="1 week ago" />
        <Message author="jhon doe" message="hello word" pastTime="1 week ago" />
        <Message author="jhon doe" message="hello word" pastTime="1 week ago" />
        <Message author="jhon doe" message="hello word" pastTime="1 week ago" />
        <Message author="jhon doe" message="hello word" pastTime="1 week ago" />
        <Message author="jhon doe" message="hello word" pastTime="1 week ago" />
        <Message author="jhon doe" message="hello word" pastTime="1 week ago" />
        <Message author="jhon doe" message="hello word" pastTime="1 week ago" />
      </ScrollView >
      <ChatInput /> 
    </SafeAreaProvider>
  );
};

export default Chat;
