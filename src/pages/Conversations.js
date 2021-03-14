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
        
        <View style={styles.card}>
          <Text style={styles.title}> Front end </Text>
          <Text style={styles.description}> 
            Um grupo para compartilhar contéudos de back 
            end, mais um texto só para ter um overflow ... 
          </Text>
          
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("Chat")}
          >
            <Text style={styles.buttonText} >Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}> Front end </Text>
          <Text style={styles.description}> 
            Um grupo para compartilhar contéudos de back 
            end, mais um texto só para ter um overflow ... 
          </Text>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("Chat")}
          >
            <Text style={styles.buttonText} >Entrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}> Front end </Text>
          <Text style={styles.description}> 
            Um grupo para compartilhar contéudos de back 
            end, mais um texto só para ter um overflow ... 
          </Text>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("Chat")}
          >
            <Text style={styles.buttonText} >Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default Conversations;
