import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GlobalStyles } from '../GlobalStyles';
import Message from '../Components/Message';
import {styles} from './Conversations.styles.js';
import SearchBar from '../Components/SearchBar';

const Conversations = ({navigation}) => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <View style={GlobalStyles.container}>
        <Text style={styles.title}> Meus chats </Text>
        <StatusBar style='light' />
        <SearchBar />
        
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate("Chat")}
        >
          <Text style={styles.buttonText} >Ir para chat</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
};

export default Conversations;
